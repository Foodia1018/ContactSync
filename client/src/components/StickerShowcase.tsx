import React, { useState } from 'react';
import { Check, Maximize } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { stickerSamples, carDesigns } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

const StickerShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const installationFeatures = [
    "Professional installation by certified technicians",
    "Weather-resistant, high-quality materials",
    "Removal process that preserves your vehicle's finish",
    "18x28 inch size that doesn't overwhelm your vehicle"
  ];

  // Function to generate decal SVGs for different vehicle types
  const generateDecalSVG = (type: string) => {
    // Find the sticker sample with the matching id
    const sticker = stickerSamples.find(s => s.id === type);
    
    // Use matching sticker colors or default to the first sticker's colors
    const colors = sticker?.colors || stickerSamples[0].colors;
    
    return `
      <svg width="180" height="100" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="170" height="90" rx="10" fill="${colors.bgColor}" />
        <rect x="8" y="8" width="164" height="84" rx="8" stroke="${colors.borderColor}" stroke-width="2" fill="none" />
        <text x="90" y="45" font-family="Arial" font-size="16" fill="${colors.textColor}" text-anchor="middle" font-weight="bold">MOMENT</text>
        <text x="90" y="65" font-family="Arial" font-size="16" fill="${colors.textColor}" text-anchor="middle" font-weight="bold">MOTOR CO.</text>
      </svg>
    `;
  };

  // Convert SVG to data URL
  const svgToDataURL = (svg: string) => {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  return (
    <section id="stickers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Auto Wrap Designs</h2>
          <p className="section-description">
            Eye-catching, professionally designed decals that attract attention while maintaining the sleek look of your vehicle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carDesigns.slice(0, 3).map((car: any, index: number) => {
            const decalSvg = generateDecalSVG(car.stickerType);
            const decalUrl = svgToDataURL(decalSvg);
            
            return (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.title} 
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Overlay with decal */}
                  <div className={`absolute ${
                    car.stickerPosition === 'center-right' 
                      ? 'right-4 top-1/2 transform -translate-y-1/2' 
                      : car.stickerPosition === 'center-left'
                        ? 'left-4 top-1/2 transform -translate-y-1/2'
                        : car.stickerPosition === 'bottom-right'
                          ? 'right-4 bottom-12'
                          : 'left-4 bottom-12'
                  }`}>
                    <img 
                      src={decalUrl} 
                      alt="Moment Motor Co. Decal" 
                      className="max-w-[140px] h-auto transition-transform group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Zoom button */}
                  <button 
                    className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage(car.image)}
                  >
                    <Maximize className="h-4 w-4 text-gray-800" />
                  </button>
                  
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    {car.stickerType.charAt(0).toUpperCase() + car.stickerType.slice(1)} Design
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-montserrat font-bold text-lg">{car.title}</h3>
                  <p className="text-gray-600 text-sm">{car.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Sticker Sample Designs */}
        <div className="mt-16">
          <h3 className="text-2xl font-montserrat font-bold text-primary mb-6 text-center">Sticker Sample Designs</h3>
          <p className="text-center text-gray-600 mb-8">
            Below are the various decal designs we offer for different vehicle types. 
            After registering, you'll receive these samples via email to help you choose.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stickerSamples.map((sticker: any, index: number) => {
              const decalSvg = generateDecalSVG(sticker.id);
              const decalUrl = svgToDataURL(decalSvg);
              
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                  <div className="bg-white rounded-md p-4 mb-3 flex items-center justify-center h-32">
                    <img 
                      src={decalUrl} 
                      alt={sticker.name} 
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <h4 className="font-semibold text-primary">{sticker.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{sticker.description}</p>
                </div>
              );
            })}
          </div>
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
                {installationFeatures.map((feature: string, index: number) => (
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
      
      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Vehicle Design Preview</DialogTitle>
            <DialogDescription>
              Close-up view of the vehicle with Moment Motor Co. decal
            </DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="overflow-hidden rounded-md">
              <img 
                src={selectedImage} 
                alt="Vehicle design preview" 
                className="w-full h-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StickerShowcase;
