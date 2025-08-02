import React from 'react';
import { Users, Target, Award, Heart, Building, Lightbulb, Shield, Handshake } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import im2 from "../images/mo.jpg";
import im3 from "../images/pdg.jpeg";
import im4 from "../images/topo1.jpeg";
import im5 from "../images/electricité.jpeg";
import { motion } from "framer-motion";


  
const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fiabilité",
      description: "Nous respectons nos engagements et garantissons la qualité de nos réalisations au Cameroun."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies et méthodes de construction adaptées à l'Afrique."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Nous mettons notre cœur dans chaque projet pour votre satisfaction et le développement du Cameroun."
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Partenariat",
      description: "Nous construisons des relations durables avec nos clients camerounais."
    }
  ];
  const timeline = [
    { year: "2021", title: "Création", description: "Fondation de Sahel BTP avec une vision claire" },
    { year: "2022", title: "Expansion", description: "Ouverture de nouveaux marchés régionaux" },
    { year: "2023", title: "Innovation", description: "Adoption de nouvelles technologies" },
    { year: "2024", title: "Durabilité", description: "Engagement pour l'environnement" },
    { year: "2025", title: "Excellence", description: "Leader reconnu dans le BTP" }
  ];

  const team = [
    {
      name: "Moussa NADJI",
      role: "Directeur Général",
      description: "15 ans d'expérience dans le BTP au Cameroun",
       image: im3
    },
    {
      name: "Hakim Dairou",
      role: "DAAF",
      description: "Spécialiste en architecture moderne africaine",
      // image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "TOPOGRAPHE",
      role: "DES TOPOGRAPHES",
      description: "Expert en topographie et l'etude du terrain",
      image: im4
    },
    {
      name: "Equipe",
      role: "electriciens",
      description: "Spécialiste en electricité ",
      image: im5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ScrollAnimatedSection animation="fade-down">
        <section className="relative bg-[#016fba] from-blue-900 to-blue-700 text-white py-24 ">
          <div className="absolute inset-0 bg-black opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
          <div className="relative max-w-7xl mx-auto px-4 ">

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
             À <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Propos de Nous</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl max-w-4xl mx-auto font-light"
            >
              Découvrez l'histoire et les valeurs qui nous animent
            </motion.p>
            <p className="text-lg max-w-3xl mx-auto text-orange-300 font-medium">
                Le futur de l'Afrique commence ici, au Cameroun
              </p>
          </motion.div>
        </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimatedSection animation="slide-right">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Fondée en 2021, SAHEL BTP s'est rapidement imposée comme l'une des entreprises de construction 
                  les plus fiables du Cameroun. Notre parcours a commencé avec une vision simple : offrir des services 
                  de construction de qualité supérieure tout en respectant les traditions locales africaines.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Au fil des années, nous avons élargi notre gamme de services pour inclure l'architecture moderne, 
                  les solutions smart home adaptées au climat africain, et les conseils techniques. Chaque projet que nous réalisons reflète 
                  notre engagement envers l'excellence et l'innovation pour le développement du Cameroun.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Building className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 font-medium">Plus de 200 projets réalisés au Cameroun</span>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
               <img 
  src={im2}
  alt="Construction moderne au Cameroun"
  className="rounded-lg shadow-xl"
/>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimatedSection animation="scale" delay={100}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-blue-600 mb-4">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                <p className="text-gray-600">
                  Transformer vos rêves en réalité en offrant des services de construction et d'aménagement 
                  de haute qualité au Cameroun. Nous nous engageons à dépasser vos attentes en alliant expertise technique, 
                  innovation et respect des délais, tout en contribuant au développement durable de l'Afrique.
                </p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="scale" delay={300}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-orange-500 mb-4">
                  <Award className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir la référence incontournable du secteur BTP au Cameroun et en Afrique Centrale en proposant des solutions 
                  innovantes et durables. Nous visons à contribuer au développement de notre continent à travers 
                  des constructions modernes et respectueuses de l'environnement africain.
                </p>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre travail et nos relations avec nos clients camerounais
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimatedSection key={index} animation="bounce" delay={index * 100}>
                <div className="text-center group">
                  <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Notre Parcours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les étapes clés de notre développement
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 to-orange-600"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-text-xl font-bold text-gray-800 mb-2amber-600 mb-2">{item.year}</div>
                    <h3 className="">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des professionnels passionnés et expérimentés au service du développement du Cameroun
              </p>
            </div>
          </ScrollAnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollAnimatedSection key={index} animation="slide-up" delay={index * 150}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimatedSection animation="fade-up">
        <section className="py-20 bg-[#016fba] from-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Construisons ensemble le futur de l'Afrique</h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez les nombreux clients qui nous font confiance pour leurs projets de construction au Cameroun.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Commencer un Projet
            </button>
          </div>
        </section>
      </ScrollAnimatedSection>
    </div>
  );
};

export default About;