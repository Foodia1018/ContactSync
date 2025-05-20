import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-montserrat font-bold text-lg">MMC</span>
              </div>
              <span className="font-montserrat font-bold text-xl">Moment Motor Co.</span>
            </div>
            <p className="text-white/80 mb-6">
              Join our Auto Wrap Campaign and earn $350 weekly by simply driving with our decal on your vehicle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition duration-300"
                >
                  About the Program
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-white/80 hover:text-white transition duration-300"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('program')}
                  className="text-white/80 hover:text-white transition duration-300"
                >
                  Program Details
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('register')}
                  className="text-white/80 hover:text-white transition duration-300"
                >
                  Apply Now
                </button>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition duration-300">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-red-500 h-5 w-5" />
                <span className="text-white/80">461 Auto Avenue, Motor City, CA 90210</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-red-500 h-5 w-5" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-red-500 h-5 w-5" />
                <span className="text-white/80">support@kreenmailing.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-red-500 h-5 w-5" />
                <span className="text-white/80">Monday - Friday: 9AM - 5PM EST</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">&copy; {currentYear} Moment Motor Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
