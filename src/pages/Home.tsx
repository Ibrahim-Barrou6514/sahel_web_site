import React, { useState, useEffect } from 'react'; // ⬅️ Ajout de useEffect
import {
  Building, Hammer, Home as HomeIcon, Lightbulb, Settings, BookOpen,
  ArrowRight, CheckCircle, Users, Trophy, Clock
} from 'lucide-react';
import { motion, AnimatePresence  } from 'framer-motion'; // OK
import im1 from "../images/station2.jpeg";
// import img4 from "../images/im2.jpeg";
import img2 from "../images/im3.jpeg";
import img3 from "../images/im4.jpeg";

interface HomeProps {
  setCurrentPage?: (page: string) => void;
  openQuoteModal?: () => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage, openQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // ✅ Déclaré correctement

  // ⬇️ Bonus : pour animer les changements de slide (optionnel si non utilisé)
 

  // ✅ Défilement automatique du carrousel toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Architecture",
      description: "Conception et design architectural personnalisé pour vos projets résidentiels et commerciaux",
      page: "services"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Construction",
      description: "Construction de bâtiments résidentiels et commerciaux avec les meilleurs matériaux",
      page: "services"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Quincaillerie",
      description: "Fourniture de matériaux et équipements BTP de qualité supérieure",
      page: "services"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Smart Home",
      description: "Solutions domotiques et maisons intelligentes pour un confort moderne",
      page: "services"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Prestations de Services",
      description: "Services techniques spécialisés et maintenance pour tous vos besoins",
      page: "services"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Études & Conseils",
      description: "Études de faisabilité et conseils techniques d'experts pour vos projets",
      page: "services"
    }
  ];

  const stats = [
    { number: "200+", label: "Projets Réalisés", icon: <Trophy className="w-8 h-8" /> },
    { number: "80+", label: "Clients Satisfaits", icon: <Users className="w-8 h-8" /> },
    { number: "12+", label: "Années d'Expérience", icon: <Clock className="w-8 h-8" /> },
    { number: "98%", label: "Taux de Satisfaction", icon: <CheckCircle className="w-8 h-8" /> }
  ];

  const handleServiceClick = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  const handleQuoteClick = () => {
    if (openQuoteModal) {
      openQuoteModal();
    }
  };

  const handleProjectsClick = () => {
    if (setCurrentPage) {
      setCurrentPage('projects');
    }
  };
  const heroSlides = [
    {
      title: "Bienvenue chez SAHEL BTP",
      subtitle: "Le Futur de l'Afrique",
      image: img2,
      cta: "Découvrir nos services"
    },
    {
      title: "Excellence & Innovation",
      subtitle: "au service de vos projets",
      image: im1,
      cta: "Voir nos réalisations"
    },
    {
      title: "Votre partenaire de confiance",
      subtitle: "depuis plus de 15 ans",
      image: img3,
      cta: "Nous contacter"
    }
  ];
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#016fba] from-blue-900 via-blue-800 to-blue-700 text-white py-32">
         <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
            />
        <div className="absolute inset-0 bg-black opacity-20  animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#016fba]/90 via-[#016fba]/70 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-15 animate-ping"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
             <AnimatePresence mode="wait">
              <motion.h1 
                key={currentSlide}
                className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              >
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title}
                </span>
              </motion.h1>
            </AnimatePresence>
            <p className="text-2xl md:text-3xl mb-4 text-orange-400 font-semibold">
              Le Futur de l'Afrique
            </p>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Votre partenaire de confiance pour tous vos projets de construction au Cameroun
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto text-blue-200 leading-relaxed">
              Depuis plus de 5 ans, SAHEL BTP s'impose comme le leader de la construction moderne au Cameroun. 
              Nous transformons vos rêves architecturaux en réalité grâce à notre expertise reconnue dans 
              l'architecture innovante, la construction durable, les solutions smart home et bien plus encore. 
              Notre engagement : excellence, qualité et innovation au service du développement de l'Afrique.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleQuoteClick}
                className="bg-[#016fba] from-orange-500 to-orange-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Demander un Devis Gratuit
              </button>
              <button 
                onClick={handleProjectsClick}
                className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos Projets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Pourquoi choisir SAHEL BTP ?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Basée au Cameroun, SAHEL BTP est une entreprise de construction qui allie tradition africaine 
                et innovation moderne. Nous sommes fiers de contribuer au développement architectural du continent 
                en offrant des solutions de construction durables et respectueuses de l'environnement.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Notre vision "Le Futur de l'Afrique" guide chacune de nos actions. Nous croyons fermement que 
                l'Afrique mérite des infrastructures modernes, intelligentes et durables qui reflètent son potentiel extraordinaire.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Expertise locale reconnue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Technologies modernes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Matériaux de qualité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">Respect des délais</span>
                </div>
              </div>
            </div>
            <div className="relative">
           <img 
  src={im1}
  alt="Construction moderne au Cameroun"
  className="rounded-lg shadow-xl"
/>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">12+</p>
                <p className="text-sm">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services d'Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en construction et aménagement au Cameroun
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-orange-200 group">
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button 
                  onClick={() => handleServiceClick(service.page)}
                  className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer font-medium"
                >
                  <span className="text-sm">En savoir plus</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#016fba] from-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">SAHEL BTP en Chiffres</h2>
            <p className="text-xl opacity-90">
              Des résultats qui témoignent de notre excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-orange-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">L'Excellence SAHEL BTP</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre engagement font de nous le partenaire idéal pour construire le futur de l'Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-green-500 mb-4">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qualité Garantie</h3>
              <p className="text-gray-600">
                Nous utilisons uniquement des matériaux de qualité supérieure et respectons les normes internationales 
                les plus strictes pour chaque projet.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-500 mb-4">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Équipe d'Experts</h3>
              <p className="text-gray-600">
                Notre équipe d'architectes, ingénieurs et artisans qualifiés vous accompagne avec passion 
                et professionnalisme à chaque étape.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-orange-500 mb-4">
                <Clock className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respect des Délais</h3>
              <p className="text-gray-600">
                Nous nous engageons à livrer vos projets dans les délais convenus, sans jamais compromettre 
                la qualité de nos réalisations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Construisons ensemble le futur de l'Afrique</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons 
            transformer votre vision en réalité.
          </p>
          <button 
            onClick={handleQuoteClick}
            className="bg-white text-orange-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Demander un Devis Gratuit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;