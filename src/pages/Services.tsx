import React from 'react';
import { Building, Hammer, Settings, Home, Lightbulb, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";
import im1 from "../images/bus.jpg";
import im2 from "../images/im5.jpeg";
import im3 from "../images/im4.jpeg";
import im4 from "../images/im7.jpg";

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
  openQuoteModal?: () => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage, openQuoteModal }) => {
  const services = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Architecture",
      description: "Conception architecturale personnalisée et innovante pour le Cameroun",
      features: [
        "Plans architecturaux détaillés",
        "Modélisation 3D et visualisation",
        "Études de faisabilité",
        "Permis de construire",
        "Suivi de chantier"
      ],
      image: im1
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Construction",
      description: "Construction de bâtiments résidentiels et commerciaux au Cameroun",
      features: [
        "Maisons individuelles",
        "Immeubles résidentiels",
        "Locaux commerciaux",
        "Bâtiments industriels",
        "Rénovation et extension"
      ],
      image: im2
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Quincaillerie",
      description: "Fourniture de matériaux et équipements de construction",
      features: [
        "Matériaux de construction",
        "Outils et équipements",
        "Quincaillerie générale",
        "Conseil technique",
        "Livraison sur site"
      ],
      image: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Smart Home",
      description: "Solutions domotiques et maisons intelligentes",
      features: [
        "Automatisation résidentielle",
        "Systèmes de sécurité connectés",
        "Gestion énergétique",
        "Éclairage intelligent",
        "Contrôle à distance"
      ],
      image: im3
      },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Prestation de Services",
      description: "Services techniques et maintenance spécialisée",
      features: [
        "Maintenance préventive",
        "Réparations urgentes",
        "Installation électrique",
        "Plomberie et sanitaire",
        "Climatisation"
      ],
      image: "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Étude de Projets et Conseils",
      description: "Expertise technique et accompagnement projet",
      features: [
        "Études de faisabilité",
        "Conseils techniques",
        "Expertise bâtiment",
        "Audit énergétique",
        "Accompagnement projet"
      ],
      image: im4
    }
  ];

  const handleQuoteClick = () => {
    if (openQuoteModal) {
      openQuoteModal();
    }
  };

  const handleContactClick = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#016fba] from-blue-900 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-15 animate-ping"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-8"
            >
              Nos <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl max-w-4xl mx-auto font-light"
            >
              Une gamme complète de services pour tous vos projets BTP au Cameroun
            </motion.p>
            <p className="text-lg max-w-3xl mx-auto text-orange-300 font-medium">
                De la conception à la réalisation, nous vous accompagnons à chaque étape de votre projet avec expertise et professionnalisme.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} group`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} transform transition-all duration-700 hover:translate-x-2`}>
                  <div className="text-blue-600 mb-4 transform transition-all duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-500 group-hover:text-blue-700">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 transition-all duration-300 hover:scale-110" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={handleQuoteClick}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 transform hover:scale-105"
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} transform transition-all duration-700 hover:scale-105`}>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Analyse de vos besoins et définition du projet"
              },
              {
                step: "02",
                title: "Conception",
                description: "Élaboration des plans et devis détaillés"
              },
              {
                step: "03",
                title: "Réalisation",
                description: "Exécution des travaux avec suivi qualité"
              },
              {
                step: "04",
                title: "Livraison",
                description: "Réception finale et accompagnement post-projet"
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#016fba] from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#016fba]">{process.title}</h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#016fba] from-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-24 h-24 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-bounce"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleQuoteClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Demander un Devis
            </button>
            <button 
              onClick={handleContactClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;