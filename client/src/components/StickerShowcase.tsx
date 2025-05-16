import React from 'react';
import { Check } from 'lucide-react';

const StickerShowcase: React.FC = () => {
  const carExamples = [
    {
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Sedan Door Panel",
      description: "Clean, professional door placement for maximum visibility"
    },
    {
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "SUV Fender Design",
      description: "Bold side panel placement for larger vehicles"
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Sports Car Side Accent",
      description: "Sleek design that complements aerodynamic vehicles"
    }
  ];

  const installationFeatures = [
    "Professional installation by certified technicians",
    "Weather-resistant, high-quality materials",
    "Removal process that preserves your vehicle's finish",
    "18x28 inch size that doesn't overwhelm your vehicle"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Auto Wrap Designs</h2>
          <p className="section-description">
            Eye-catching, professionally designed decals that attract attention while maintaining the sleek look of your vehicle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carExamples.map((car, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img 
                src={car.image} 
                alt={car.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-montserrat font-bold">{car.title}</h3>
                <p className="text-gray-600 text-sm">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-montserrat font-bold text-primary mb-3">Professional Installation & Removal</h3>
              <p className="text-gray-600 mb-4">
                Our team of experts handles the entire process of decal installation and removal, ensuring no damage to your vehicle's paint or finish.
                The high-quality vinyl decals are designed to be durable yet removable.
              </p>
              <ul className="text-gray-600 space-y-2">
                {installationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1518987048-93e29699e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Professional decal installation process" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickerShowcase;
