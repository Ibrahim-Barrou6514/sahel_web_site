import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import logo from "../images/sahel.png";
import { NavLink, useLocation } from 'react-router';

interface HeaderProps {
  openQuoteModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openQuoteModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useLocation().pathname.toLowerCase()

  const navItems = [
    { id: 'home', label: 'Accueil', path: '/' },
    { id: 'about', label: 'À propos', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'projects', label: 'Projets', path: '/projects' },
    { id: 'gallery', label: 'Galeries', path: '/gallery' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#016fba] text-white py-2 px-4 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+237 682216208/622051724</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Info.sahelbtp@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Cameroun</span>
          </div>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="bg-[#016fba] text-white py-2 px-4 text-xs lg:hidden">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+237 682216208</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span>Cameroun</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3" />
            <span>moussanadji.sci@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <img
        src={logo}
        alt="Logo Sahel BTP"
        className="h-16 w-auto object-contain"
      />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.id}
                to={item.path}
                reloadDocument
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? 'text-[#016fba] bg-blue-50'
                    : 'text-gray-700 hover:text-[#016fba] hover:bg-blue-50'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={openQuoteModal}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-md font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              Demande de Devis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  reloadDocument
                  className={`px-3 py-3 rounded-md text-sm font-medium text-left transition-colors ${
                    pathname === item.path
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  openQuoteModal();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-md font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 mt-4 text-center"
              >
                Demande de Devis
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
