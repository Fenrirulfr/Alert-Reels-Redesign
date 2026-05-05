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
import ProductDetail from './pages/ProductDetail';
import { Distributors } from './pages/Distributors';
import { Solutions } from './pages/Solutions';
import { Brands } from './pages/Brands';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-brand-bg flex flex-col font-sans transition-colors duration-300 antialiased selection:bg-brand-yellow selection:text-black">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
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
    </ThemeProvider>
  );
}


