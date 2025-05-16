import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, Bolt, Calendar, CheckCircle, TrafficCone, Gauge } from 'lucide-react';

const Benefits: React.FC = () => {
  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: <DollarSign className="text-2xl text-white" />,
      title: "Weekly Income",
      description: "Earn $350 per week simply for displaying our decal on your vehicle while going about your normal routine."
    },
    {
      icon: <Bolt className="text-2xl text-white" />,
      title: "Professional Installation",
      description: "Our experts handle all aspects of decal placement and removal with no damage to your vehicle."
    },
    {
      icon: <Calendar className="text-2xl text-white" />,
      title: "Flexible Timeframe",
      description: "Choose between 1-month and 3-month program durations to fit your schedule and preferences."
    },
    {
      icon: <CheckCircle className="text-2xl text-white" />,
      title: "No Fees Required",
      description: "Zero application or participation fees. We provide everything needed for the campaign."
    },
    {
      icon: <TrafficCone className="text-2xl text-white" />,
      title: "Drive Normally",
      description: "Continue your regular driving habits with no minimum mileage requirements or route restrictions."
    },
    {
      icon: <Gauge className="text-2xl text-white" />,
      title: "Any Vehicle Type",
      description: "All vehicle types and models are eligible as long as they have the required space for our decal."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Join Our Campaign?</h2>
          <p className="section-description">
            Our auto wrap campaign provides benefits for both drivers and our company, creating a win-win partnership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-montserrat font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToRegister}
            className="btn-primary"
          >
            Join Our Program Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
