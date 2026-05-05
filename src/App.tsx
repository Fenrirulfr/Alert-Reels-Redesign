/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Distributors } from './pages/Distributors';
import { Solutions } from './pages/Solutions';
import { Brands } from './pages/Brands';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-[#0B0C10] flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-brand-yellow selection:text-black">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/distributors" element={<Distributors />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/brands" element={<Brands />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}


