
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SalesforceServices } from '@/components/SalesforceServices';
import { Testimonials } from '@/components/Testimonials';
import { ServicesGrid } from '@/components/ServicesGrid';
import { PledgeSection } from '@/components/PledgeSection';
import { NewsBlogs } from '@/components/NewsBlogs';
import { AIStrategy } from '@/components/AIStrategy';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background flex flex-col overflow-hidden items-stretch min-h-screen">
      <Navigation />
      <Hero />
      
      <main className="flex-1">
        <About />
        <SalesforceServices />
        <Testimonials />
        
        <section className="py-16 bg-background">
          <ServicesGrid />
        </section>
        
        <PledgeSection />
        <NewsBlogs />
        <AIStrategy />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
