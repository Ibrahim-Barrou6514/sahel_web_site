import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, MapPin, Eye, Filter, Search, Grid, List } from 'lucide-react';
import im1 from "../images/im5.jpeg";
import im2 from "../images/im3.jpeg";
import im3 from "../images/im19.jpeg";
import im4 from "../images/im4.jpeg";
import im5 from "../images/im18.jpeg"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'Toutes les photos', count: 24 },
    { id: 'construction', name: 'Construction', count: 8 },
    { id: 'renovation', name: 'Rénovation', count: 6 },
    { id: 'infrastructure', name: 'Infrastructure', count: 5 },
    { id: 'equipment', name: 'Équipements', count: 5 }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Chantier Centre Commercial",
      category: "construction",
      location: "Dakar, Sénégal",
      date: "2023",
      description: "Construction du centre commercial moderne avec techniques BIM et béton haute performance"
    },
    {
      id: 2,
      src: im1,
      title: "Équipe sur chantier",
      category: "construction",
      location: "Thiès, Sénégal",
      date: "2023",
      description: "Notre équipe utilisant des technologies de pointe pour la construction"
    },
    {
      id: 3,
      src: im4,
      title: "Résidence moderne",
      category: "construction",
      location: "Dakar, Sénégal",
      date: "2022",
      description: "Résidence haut standing avec matériaux écologiques et domotique"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rénovation hôtel",
      category: "renovation",
      location: "Saint-Louis, Sénégal",
      date: "2023",
      description: "Rénovation avec préservation du patrimoine et technologies modernes"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1329645/pexels-photo-1329645.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Infrastructure routière",
      category: "infrastructure",
      location: "Route Nationale",
      date: "2022",
      description: "Construction avec asphalte recyclé et signalisation intelligente"
    },
    {
      id: 6,
      src: im2,
      title: "Travaux de maçonnerie",
      category: "construction",
      location: "Kaolack, Sénégal",
      date: "2023",
      description: "Maçonnerie moderne avec mortier haute résistance"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Installation électrique",
      category: "equipment",
      location: "Dakar, Sénégal",
      date: "2023",
      description: "Installation électrique avec système de gestion intelligente"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Bâtiment commercial",
      category: "construction",
      location: "Dakar, Sénégal",
      date: "2022",
      description: "Architecture moderne avec façade ventilée et énergie solaire"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rénovation intérieure",
      category: "renovation",
      location: "Thiès, Sénégal",
      date: "2023",
      description: "Rénovation avec matériaux biosourcés et ventilation naturelle"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "École moderne",
      category: "construction",
      location: "Dakar, Sénégal",
      date: "2021",
      description: "Construction d'école avec panneaux solaires et récupération d'eau"
    },
    {
      id: 11,
      src: im3,
      title: "Pont moderne",
      category: "infrastructure",
      location: "Fleuve Sénégal",
      date: "2022",
      description: "Pont avec béton fibré et système de monitoring structurel"
    },
    {
      id: 12,
      src: im5,
      title: "Équipements BTP",
      category: "equipment",
      location: "Base Sahel BTP",
      date: "2023",
      description: "Parc d'équipements modernes avec GPS et télémétrie"
    }
  ];

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#016fba] via-[#016fba] to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Eye className="h-4 w-4" />
            <span className="font-medium">Galerie photos</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            Nos Réalisations
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              en Images
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto text-blue-100 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Découvrez notre savoir-faire à travers une galerie complète de nos projets et innovations technologiques
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              className="relative flex-1 max-w-md"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une photo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#016fba] focus:border-transparent transition-all duration-300"
              />
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div
              className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-[#016fba] text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-[#016fba] text-white' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-gray-600 mr-4">
                <Filter className="h-5 w-5" />
                <span className="font-medium">Filtrer :</span>
              </div>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#016fba] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-[#016fba]'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm + viewMode}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    viewMode === 'list' ? 'flex bg-white' : 'bg-white'
                  }`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-1/3 h-48' : 'h-64'
                  }`}>
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30">
                        <ZoomIn className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute top-4 left-4 bg-[#016fba]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {categories.find(c => c.id === image.category)?.name}
                    </motion.div>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#016fba] transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {image.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-[#016fba]" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-[#016fba]" />
                        <span>{image.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Aucune image trouvée</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>
              
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedImage.title}</h2>
                  <span className="bg-[#016fba] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {categories.find(c => c.id === selectedImage.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-[#016fba]" />
                    <div>
                      <div className="font-semibold text-gray-800">Localisation</div>
                      <div className="text-gray-600">{selectedImage.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-[#016fba]" />
                    <div>
                      <div className="font-semibold text-gray-800">Année</div>
                      <div className="text-gray-600">{selectedImage.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;