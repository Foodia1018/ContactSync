import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header: React.FC = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink: React.FC<{ href: string, label: string, isExternal?: boolean }> = ({ href, label, isExternal }) => {
    if (location !== '/' || isExternal) {
      return (
        <Link href={href}>
          <a className="text-secondary hover:text-primary font-medium transition-colors">{label}</a>
        </Link>
      );
    }

    return (
      <button 
        onClick={() => scrollToSection(href.replace('#', ''))}
        className="text-secondary hover:text-primary font-medium transition-colors"
      >
        {label}
      </button>
    );
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <a className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">MMC</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-montserrat font-bold text-primary">Moment Motor Co.</h1>
                <p className="text-sm text-gray-500">Auto Mobile Company</p>
              </div>
            </a>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#about" label="About" />
          <NavLink href="#benefits" label="Benefits" />
          <NavLink href="#program" label="Program" />
          <Button asChild>
            <Link href="#register">
              <a>Register Now</a>
            </Link>
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <NavLink href="#about" label="About" />
              <NavLink href="#benefits" label="Benefits" />
              <NavLink href="#program" label="Program" />
              <Button asChild className="w-full">
                <Link href="#register">
                  <a>Register Now</a>
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
