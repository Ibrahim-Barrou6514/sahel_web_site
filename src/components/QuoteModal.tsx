import React, { useState } from 'react';
import { X, Calculator, Send, User, Mail, Phone, Building, MapPin, Calendar } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
const [selectionMode, setSelectionMode] = useState("typeProjet"); // valeurs possibles : "typeProjet" ou "demandeDevis"



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    alert('Votre demande de devis a été envoyée avec succès ! Nous vous répondrons dans les 24 heures.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      location: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  const projectTypes = [
    "Architecture",
    "Construction résidentielle",
    "Construction commerciale",
    "Rénovation",
    "Smart Home",
    "Maintenance",
    "Autre"
  ];

  const budgetRanges = [
    "Moins de 5 millions CFA",
    "5 - 10 millions CFA",
    "10 - 25 millions CFA",
    "25 - 50 millions CFA",
    "50 - 100 millions CFA",
    "Plus de 100 millions CFA"
  ];

  const timelines = [
    "Moins de 1 mois",
    "1 - 3 mois",
    "3 - 6 mois",
    "6 - 12 mois",
    "Plus de 12 mois"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calculator className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Demande de Devis</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Remplissez ce formulaire pour recevoir votre devis personnalisé sous 72h
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+223 XX XX XX XX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Entreprise
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations sur le projet</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Localisation *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ville, quartier"
                  />
                </div>
              </div>

<div className="mb-6">
  <label htmlFor="selectionMode" className="block text-sm font-medium text-gray-700 mb-2">
    Que souhaitez-vous faire ?
  </label>
  <select
    id="selectionMode"
    value={selectionMode}
    onChange={(e) => setSelectionMode(e.target.value)}
    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  >
    <option value="typeProjet">Type de projet</option>
    <option value="demandeDevis">Demande de devis</option>
  </select>
</div>

              {selectionMode === "typeProjet" && (
  <div>
    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
      Type de projet *
    </label>
    <select
      id="projectType"
      name="projectType"
      value={formData.projectType}
      onChange={handleInputChange}
      required
      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">Sélectionnez un type</option>
      {projectTypes.map((type, index) => (
        <option key={index} value={type}>{type}</option>
      ))}
    </select>
  </div>
)}

{selectionMode === "demandeDevis" && (
  <div className="space-y-4">
    <div>
      <label htmlFor="patente" className="block text-sm font-medium text-gray-700 mb-2">
        Fichier PDF des plans details *
      </label>
      <input
        type="file"
        id="patente"
        name="patente"
        accept="application/pdf"
        onChange={handleInputChange}
        required
        className="w-full px-3 py-3 border border-gray-300 rounded-lg"
      />
    </div>

    <div>
      <label htmlFor="registre" className="block text-sm font-medium text-gray-700 mb-2">
        Fichier pdf de notes de calcules *
      </label>
      <input
        type="file"
        id="registre"
        name="registre"
        accept="application/pdf"
        onChange={handleInputChange}
        required
        className="w-full px-3 py-3 border border-gray-300 rounded-lg"
      />
    </div>
     <div>
      <label htmlFor="registre" className="block text-sm font-medium text-gray-700 mb-2">
       fichier pdf rapport étude de sol *
      </label>
      <input
        type="file"
        id="registre"
        name="registre"
        accept="application/pdf"
        onChange={handleInputChange}
        required
        className="w-full px-3 py-3 border border-gray-300 rounded-lg"
      />
    </div>
    <div>
  <label htmlFor="documents" className="block text-sm font-medium text-gray-700 mb-2">
    Téléversez vos documents soft(fichier source)*
  </label>
  <input
    type="file"
    id="documents"
    name="documents"
    multiple
    accept=".pdf,.psd,.ai,.eps,.ino,.pln,.dwg,.docx,.xlsx,.pptx,.zip,.rar,.skp,.blend"
    onChange={handleInputChange}
    required
    className="w-full px-3 py-3 border border-gray-300 rounded-lg"
  />
</div>

  </div>
)}

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Délai souhaité
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un délai</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description du projet *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez votre projet en détail..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="border-t border-gray-200 pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Envoyer ma demande de devis</span>
            </button>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Nous vous répondrons dans les 24 heures avec un devis détaillé
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;