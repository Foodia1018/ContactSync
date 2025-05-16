import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye, BarChart, Users, TrendingUp } from 'lucide-react';

const CampaignDetails: React.FC = () => {
  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programDetails = [
    { label: "Weekly Compensation", value: "$350.00" },
    { label: "Minimum Period", value: "4 weeks (1 Month)" },
    { label: "Maximum Period", value: "12 weeks (3 Months)" },
    { label: "Decal Size", value: "18×28 inches" },
    { label: "Placement Area", value: "Vehicle door or fender" },
    { label: "Payment Method", value: "Check or Direct Deposit" },
    { label: "Application Fee", value: "None Required" }
  ];

  const companyBenefits = [
    {
      icon: <Eye className="text-primary" />,
      title: "Increased Exposure",
      description: "Our colorful, eye-catching auto wraps attract attention in traffic and parking lots."
    },
    {
      icon: <BarChart className="text-primary" />,
      title: "Brand Awareness",
      description: "Regular visibility in various locations builds recognition of our brand."
    },
    {
      icon: <Users className="text-primary" />,
      title: "Captive Audience",
      description: "Other drivers and pedestrians can't avoid seeing our wrapped cars in traffic."
    },
    {
      icon: <TrendingUp className="text-primary" />,
      title: "Increased ROI",
      description: "Mobile advertising reaches more people at a lower cost than traditional billboards."
    }
  ];

  return (
    <section id="program" className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Campaign Details</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Everything you need to know about participating in our auto wrap program.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-montserrat font-bold mb-6">Program Overview</h3>
            <div className="space-y-4">
              {programDetails.map((detail, index) => (
                <div key={index} className={`flex justify-between pb-2 ${index < programDetails.length - 1 ? 'border-b border-white/20' : ''}`}>
                  <span className="font-semibold">{detail.label}</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-montserrat font-bold mb-6">How It Benefits Our Company</h3>
            <ul className="space-y-4">
              {companyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{benefit.title}</h4>
                    <p className="opacity-90">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToRegister}
            className="btn-white"
          >
            Apply for the Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignDetails;
