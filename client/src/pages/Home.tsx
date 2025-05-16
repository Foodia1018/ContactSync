import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramDetails from '@/components/ProgramDetails';
import Benefits from '@/components/Benefits';
import StickerShowcase from '@/components/StickerShowcase';
import CampaignDetails from '@/components/CampaignDetails';
import RegistrationForm from '@/components/RegistrationForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProgramDetails />
        <Benefits />
        <StickerShowcase />
        <CampaignDetails />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
