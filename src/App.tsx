/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './lib/AuthContext';
import { CartDrawer } from './components/CartDrawer';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Checkout } from './pages/Checkout';
import { Profile } from './pages/Profile';
import { Distributors } from './pages/Distributors';
import { Solutions } from './pages/Solutions';
import { Brands } from './pages/Brands';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-brand-bg flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-brand-yellow selection:text-black">
            <Header />
            <CartDrawer />
            <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/distributors" element={<Distributors />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}


