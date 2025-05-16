import React from 'react';

const ProgramDetails: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">About The Wrap Campaign</h2>
          <p className="section-description">
            Moment Motor Co. recently gained popularity with multinational partnerships for nationwide expansion. 
            We're looking for individuals who want to earn extra income by advertising with our car decals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Apply Online</h4>
                  <p className="text-gray-600">Fill out our simple application form with your details and vehicle information.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Receive Payment</h4>
                  <p className="text-gray-600">Get your first week's payment upfront via check or direct deposit.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Professional Installation</h4>
                  <p className="text-gray-600">Our vinyl decal specialists will handle the advert placement on your car.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold mr-4">4</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Drive As Usual</h4>
                  <p className="text-gray-600">Continue your normal routine while earning $350 weekly for up to 12 weeks.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Car with professional decal wrap" 
              className="w-full h-auto"
            />
            <div className="p-6 bg-white">
              <h4 className="font-montserrat font-bold text-xl mb-2">Professional Decal Application</h4>
              <p className="text-gray-600 mb-4">Small size of 18x28 inches magnet decal with rounded corners installed on the vehicle door side or fender.</p>
              <div className="flex justify-between text-sm">
                <span className="text-primary font-semibold">Minimum Period: 4 weeks</span>
                <span className="text-primary font-semibold">Maximum Period: 12 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
