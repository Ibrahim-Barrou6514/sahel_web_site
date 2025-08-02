import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEye,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import im1 from "../images/1d.jpeg";
import im2 from "../images/2d.jpeg";
import im3 from "../images/3d.jpeg";
import im4 from "../images/2d.jpeg";
import im8 from "../images/ECLAIRAGE.jpeg";
import im9 from "../images/ECLAIRAGER.jpeg";
import im10 from "../images/HO.jpeg";
import im11 from "../images/c.jpeg";
type Projecttype = {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'médical' | 'public';
  location: string;
  date?: string;
  budget?: string;
  duration: string;
  client: string;
  images: string[]; // ou (typeof im1)[] si tu veux utiliser les imports comme types
  description: string;
  features: string[];
};
const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Projecttype | null>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects : Projecttype[] = [
    {
      id: 1,
      title: "MBANGA BAKOKO",
      category: "residential",
      location: "Douala, Yassa",
      date: '2024',
      budget: '.... FCFA',
      duration: "",
      client: "SAHEL BTP ",
      images: [im1, im2, im3],
      description:
        "Bâti sur 333,99 m², l’immeuble comprend au rez-de-chaussée des espaces fonctionnels et un appartement. Chaque étage (1er au 4e) abrite deux appartements T3, deux studios et deux chambres modernes. La toiture-terrasse accueille un espace sportif, un minirestaurant et une grande terrasse.",
      features: [
        "10 Appartements T3",
        "10 studios",
        "10 chambres modernes",
        "1 Espace sportif",
        "1 minirestaurant",
        
        "1 grande terrasse",
        "Sécurité 24h/24",
      ],
    },
    {
      id: 2,
      title: "HOTEL IGOR",
      category: "residential",
      location: "Douala,Yassa",
      date: '2025',
      budget: '...... FCFA',
      duration: '24 mois',
      client: "Akwa Business Center",
      images: [
        im4,
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      ],
      description:
        "Érigé sur 346,04 m², ce bâtiment de trois niveaux comprend au rez-dechaussée des espaces d’accueil, un restaurant, une cuisine, cinq chambres avec douche, et une terrasse. Les deux étages supérieurs regroupent un salon de repos et dix chambres avec douche et pl card chacun..",
      features: [
        "120 Boutiques",
        "Cinéma 8 salles",
        "Food Court",
        "Parking 500 places",
        "Climatisation Centrale",
      ],
    },
    {
      id: 3,
      title: "VILLA MÈRE YERIMA",
      category: "residential",
      location: "Bangui RCA",
      date: '2023',
      budget: '..... FCFA',
      duration: '36 mois',
      client: "Ministère des Travaux Publics",
      images: [im3],
      description:
        "Bâtiment bâti sur une superficie de 144.03m2 dont une grande véranda, un séjour spacieux, une salle de prière, une cuisine avec sa véranda, un magasin, trois chambres avec douche et placard.",
      features: [
        "1 grande véranda",
        "1 salle de prière",
        "1 cuisine avec sa véranda",
        "1 magasin",
        "3 chambres avec douche et placard",
      ],
    },
    {
      id: 4,
      title: "ÉNERGIE SOLAIRE",
      category: "public",
      location: "Oeust Cameroun ",
      // date: '2025',
      // budget: '.... FCFA',
      duration: "",
      client: "Solaire",
      images: [im8, im9],
      description:
        "Installation d’un système solaire de 8.5kwa. Ce système est prévu pour entre autonome une maison d’habitation. Il alimente l’éclairage, prise pour téléphone et téléviseur.",
      features: [
        "éclairage",
        "prise pour téléphone et téléviseur",
        "entre autonome une maison d’habitation",
      ],
    },
    {
      id: 5,
      title: "CLINIQUE A4",
      category: "médical",
      location: "Nyalla Douala",
      // date: '2024',
      duration: "",
      client: "",
      images: [im10],
      description:
        "Construit sur 188,82 m², ce bâtiment comprend au rez-de-chaussée un ensemble complet de services médicaux (pharmacie, consultations, urgences, imagerie, laboratoire, hospitalisation, bloc opératoire), et à l’étage des espaces administratifs et médicaux (bureaux, hospitalisation,accouchement, post-partum, archives, infirmiers).",
      features: [
        "des bureaux",
        "espaces administratifs",
        "hospitalisation",
        "laboratoire",
        "pharmacie",
        "etc...",
      ],
    },
    {
      id: 6,
      title: "KAZA 2",
      category: "residential",
      location: "Yassa Douala |",
      // date: '2024',
      // budget: '...FCFA',
      duration: "",
      client: "",
      images: [im11],
      description:
        "Bâtiment bâti sur une superficie de 307.496m2 dont au RDC nous avons une grande véranda, un hall d’entrée, deux salons spacieux, une grande S.A.M, une cuisine américaine, une vaste cuisine, un magasin, une véranda. A l’étage nous avons quatre chambres avec douche et placard, quatre balcons, un vide sur S.A.M",
      features: [
        "1 grande véranda",
        "1 hall d’entrée",
        "2 salons spacieux",
        "1 grande S.A.M",
        "1 cuisine américaine",
        "etc...",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "Tous les Projets", count: projects.length },
    {
      id: "residential",
      label: "Résidentiel",
      count: projects.filter((p) => p.category === "residential").length,
    },
    {
      id: "commercial",
      label: "Commercial",
      count: projects.filter((p) => p.category === "commercial").length,
    },
    {
      id: "médical",
      label: "Médical",
      count: projects.filter((p) => p.category === "médical").length,
    },
    {
      id: "public",
      label: "Public",
      count: projects.filter((p) => p.category === "public").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32  bg-[#016fba] from-[#016fba] to-blue-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border border-white/10 rounded-lg"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 0,
              }}
              animate={{
                rotate: 360,
                y: [null, -50, null],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
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
              Nos{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Projets
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl max-w-4xl mx-auto font-light"
            >
              Découvrez nos réalisations qui témoignent de notre expertise au
              Cameroun Chaque projet est unique et reflète notre engagement
              envers la qualité, l'innovation et la satisfaction client.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-[#016fba] to-blue-700 text-white shadow-2xl"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    filter === category.id ? "bg-white/20" : "bg-gray-300"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-3xl transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                        className="bg-[#016fba] text-white p-4 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
                      >
                        <FaExpand size={24} />
                      </button>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      {/* <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        project.category === 'residential' ? 'bg-green-500 text-white' :
                        project.category === 'commercial' ? 'bg-blue-500 text-white' :
                        project.category === 'infrastructure' ? 'bg-orange-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {project.category === 'residential' ? 'Résidentiel' :
                         project.category === 'commercial' ? 'Commercial' :
                         project.category === 'infrastructure' ? 'Infrastructure' : 'Public'}
                      </span> */}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-center">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 justify-center">
                        <FaMapMarkerAlt className="mr-2 text-[#016fba]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 justify-center">
                        <FaCalendarAlt className="mr-2 text-[#016fba]" />
                        <span>
                          {project.duration} • {project.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImageIndex(0);
                        }}
                        className="bg-gradient-to-r from-[#016fba] to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-[#016fba] transition-all duration-300 flex items-center space-x-2"
                      >
                        <FaEye />
                        <span>Voir Plus</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Image Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Informations Projet
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-2 text-[#016fba]" />
                          <span>{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2 text-[#016fba]" />
                          <span>
                            {selectedProject.date} • {selectedProject.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Budget
                      </h4>
                      <p className="text-2xl font-bold text-[#016fba]">
                        {selectedProject.budget}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Caractéristiques
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#016fba] rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-[#016fba]"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#016fba] to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Excellence en Chiffres
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des résultats qui témoignent de notre expertise et de notre
              engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projets Réalisés", icon: "🏗️" },
              { number: "50+", label: "Clients Satisfaits", icon: "😊" },
              { number: "10+", label: "Années d'Expérience", icon: "📅" },
              { number: "100%", label: "Projets Livrés à Temps", icon: "⏰" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Votre Projet Sera le Prochain
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Rejoignez nos clients satisfaits et confiez-nous la réalisation de
              votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-gradient-to-r from-[#016fba] to-blue-700 hover:from-blue-700 hover:to-[#016fba] text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 shadow-2xl">
                  Demander un Devis
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="border-2 border-[#016fba] text-[#016fba] hover:bg-[#016fba] hover:text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300">
                  Voir Plus de Projets
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
