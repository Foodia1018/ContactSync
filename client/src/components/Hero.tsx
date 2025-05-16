import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-80 z-10"></div>
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800&q=80" 
          alt="Professional car with branding" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 flex items-center z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4 leading-tight">
            Get Paid to Drive <br />Your Own Car
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Join Moment Motor Co.'s Auto Wrap Campaign and earn $350 weekly by simply driving with our decal on your vehicle.
          </p>
          <Button 
            onClick={scrollToRegister}
            className="btn-accent"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
