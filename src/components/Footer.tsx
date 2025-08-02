import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../images/sahel.png";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-60 h-60 object-contain" />
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">SAHEL BTP</h3>
                <p className="text-xs text-orange-400">Le futur de l'Afrique</p>
              </div> */}
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour tous vos projets de construction et d'aménagement au Cameroun.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Architecture</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Construction</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Quincaillerie</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Smart Home</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Prestations de Services</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Étude de Projets</button></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="text-gray-400 hover:text-white transition-colors">Accueil</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white transition-colors">À propos</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('projects')} className="text-gray-400 hover:text-white transition-colors">Projets</button></li>
              <li><button onClick={() => setCurrentPage('gallery')} className="text-gray-400 hover:text-white transition-colors">Galeries</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Cameroun</p>
                  <p className="text-gray-400">Afrique Centrale</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400">+237 682216208/622051724</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400">Info.sahelbtp@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Lun - Ven: 7h - 18h</p>
                  <p className="text-gray-400">Sam: 8h - 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SAHEL BTP. Tous droits réservés. | Le futur de l'Afrique commence ici
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;