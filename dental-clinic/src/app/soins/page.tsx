'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { 
  Clock,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

export default function Soins() {
  const principalCares = [
    {
      image: "/images/soins/conservateurs.jpg",
      title: "Soins Conservateurs",
      description: "Préservation et restauration de vos dents naturelles avec les matériaux les plus modernes.",
      features: [
        "Détartrage et polissage",
        "Traitement des caries",
        "Composite esthétique",
        "Dévitalisation"
      ],
      duration: "30-90 min",
      price: "À partir de 60€",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      image: "/images/soins/implantologie.jpg",
      title: "Implantologie",
      description: "Remplacement permanent des dents manquantes pour retrouver fonction et esthétique.",
      features: [
        "Implants titane biocompatible",
        "Chirurgie guidée par ordinateur",
        "Mise en charge immédiate",
        "Garantie 10 ans"
      ],
      duration: "1-2h",
      price: "À partir de 1200€",
      gradient: "from-green-500 to-green-600"
    },
    {
      image: "/images/soins/esthetique.jpg",
      title: "Esthétique Dentaire",
      description: "Sublimez votre sourire avec nos traitements esthétiques personnalisés.",
      features: [
        "Facettes en céramique",
        "Blanchiment dentaire",
        "Recontouring esthétique",
        "Smile design numérique"
      ],
      duration: "1-3h",
      price: "À partir de 300€",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      image: "/images/soins/orthodontie.jpg",
      title: "Orthodontie",
      description: "Alignement dentaire pour un sourire parfait et une fonction optimale.",
      features: [
        "Aligneurs transparents",
        "Bagues esthétiques",
        "Orthodontie linguale",
        "Suivi personnalisé"
      ],
      duration: "12-24 mois",
      price: "À partir de 2500€",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const additionalServices = [
    { title: "Parodontologie", description: "Traitement des gencives et de l&apos;os alvéolaire" },
    { title: "Chirurgie Orale", description: "Extractions et chirurgies spécialisées" },
    { title: "Prothèses", description: "Couronnes, bridges et prothèses amovibles" },
    { title: "Endodontie", description: "Traitement des canaux radiculaires" },
    { title: "Pédodontie", description: "Soins dentaires spécialisés pour enfants" },
    { title: "Urgences", description: "Prise en charge rapide des urgences dentaires" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation initiale",
      description: "Examen complet et établissement d&apos;un plan de traitement personnalisé"
    },
    {
      step: 2,
      title: "Devis détaillé",
      description: "Présentation transparente des coûts et des options de paiement"
    },
    {
      step: 3,
      title: "Traitement",
      description: "Soins réalisés avec les dernières technologies dans le confort optimal"
    },
    {
      step: 4,
      title: "Suivi",
      description: "Contrôles réguliers pour garantir la pérennité de vos soins"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Nos Soins Dentaires
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Des traitements de pointe personnalisés pour votre santé bucco-dentaire et votre bien-être.
              Découvrez notre gamme complète de soins dans un environnement moderne et rassurant.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Prendre rendez-vous
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Soins Principaux */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nos Spécialités
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quatre domaines d&apos;excellence pour répondre à tous vos besoins dentaires
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {principalCares.map((care, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${care.gradient}`}></div>
                
                <div className="p-8">
                  <div className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-300 rounded-2xl overflow-hidden">
                    <OptimizedImage
                      src={care.image}
                      alt={`Illustration ${care.title}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {care.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {care.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {care.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{care.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{care.price}</span>
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Additionnels */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une gamme étendue de soins pour une prise en charge complète
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de Soins */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un parcours de soins structuré pour votre confort et votre satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Besoin d&apos;un soin spécifique ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation personnalisée. Nous établirons ensemble 
              le plan de traitement le plus adapté à vos besoins et à votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Consultation gratuite
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Urgence dentaire
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}