import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  User,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

interface AuthContextType {
  user: User | any | null;
  loading: boolean;
  userProfile: any | null;
  signOut: () => Promise<void>;
  loginAsPlaceholder: () => void;
  updateUserProfile: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  userProfile: null,
  signOut: async () => {},
  loginAsPlaceholder: () => {},
  updateUserProfile: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | any | null>(null);
  const [userProfile, setUserProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const loginAsPlaceholder = () => {
    const mockUser = {
      uid: 'placeholder-user-id',
      email: 'm.vance@globallogistics.com',
      displayName: 'Marcus Vance',
    };
    const mockProfile = {
      fullName: 'Marcus Vance',
      email: 'm.vance@globallogistics.com',
      role: 'Fleet Manager',
      organization: 'Global Logistics Corp',
      phoneNumber: '+1 (555) 012-3456',
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
    setUserProfile(mockProfile);
    setLoading(false);
    localStorage.setItem('auth_placeholder', 'true');
    localStorage.setItem('placeholder_profile', JSON.stringify(mockProfile));
  };

  const updateUserProfile = async (newData: any) => {
    if (!user) return;

    if (localStorage.getItem('auth_placeholder') === 'true') {
      const updated = { ...userProfile, ...newData };
      setUserProfile(updated);
      localStorage.setItem('placeholder_profile', JSON.stringify(updated));
      return;
    }

    try {
      await setDoc(doc(db, 'users', user.uid), newData, { merge: true });
      setUserProfile({ ...userProfile, ...newData });
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  useEffect(() => {
    const isPlaceholder = localStorage.getItem('auth_placeholder');
    if (isPlaceholder === 'true') {
      const savedProfile = localStorage.getItem('placeholder_profile');
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
        setUser({
          uid: 'placeholder-user-id',
          email: 'm.vance@globallogistics.com',
          displayName: 'Marcus Vance',
        });
        setLoading(false);
      } else {
        loginAsPlaceholder();
      }
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          } else {
            // Initial profile if it doesn't exist
            const initialProfile = {
              fullName: currentUser.displayName || 'Marcus Vance', // Design default
              email: currentUser.email,
              role: 'Fleet Manager',
              organization: 'Global Logistics Corp',
              phoneNumber: '',
              createdAt: new Date().toISOString(),
            };
            await setDoc(doc(db, 'users', currentUser.uid), initialProfile);
            setUserProfile(initialProfile);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      localStorage.removeItem('auth_placeholder');
      setUser(null);
      setUserProfile(null);
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, userProfile, signOut, loginAsPlaceholder, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
