import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProductSolutions } from '../components/ProductSolutions';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductSolutions />
    </>
  );
}
