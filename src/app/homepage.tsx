'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Award, 
  Users, 
  Star,
  GraduationCap,
  Clock,
  Heart,
  Smile
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Doctorat en Chirurgie Dentaire",
      institution: "Université Paris Descartes",
      year: "2010"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Spécialisation Implantologie",
      institution: "Institut de Formation Continue",
      year: "2015"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certification Esthétique Dentaire",
      institution: "European Academy of Cosmetic Dentistry",
      year: "2018"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "2500+", label: "Patients satisfaits" },
    { icon: <Smile className="w-8 h-8" />, number: "15", label: "Années d'expérience" },
    { icon: <Star className="w-8 h-8" />, number: "4.9/5", label: "Note moyenne" },
    { icon: <Heart className="w-8 h-8" />, number: "100%", label: "Dédié à votre sourire" }
  ];

  const cabinetPhotos = [
    { src: "/api/placeholder/400/300", alt: "Salle d'accueil moderne", title: "Accueil chaleureux" },
    { src: "/api/placeholder/400/300", alt: "Cabinet dentaire équipé", title: "Équipements de pointe" },
    { src: "/api/placeholder/400/300", alt: "Salle de soins", title: "Confort optimal" },
    { src: "/api/placeholder/400/300", alt: "Équipe médicale", title: "Équipe professionnelle" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Votre sourire,
                <span className="text-blue-300 block">notre passion</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Des soins dentaires d'excellence dans un environnement moderne et bienveillant. 
                Votre confort et votre satisfaction sont nos priorités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  Prendre rendez-vous
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Découvrir nos soins
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 rounded-full absolute -top-10 -right-10 blur-3xl"></div>
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl relative z-10 flex items-center justify-center">
                  <div className="text-center">
                    <Smile className="w-24 h-24 text-white mx-auto mb-4" />
                    <p className="text-white text-lg font-semibold">Cabinet Moderne</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
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
              Qualifications & Diplômes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Une formation continue et des certifications reconnues pour vous offrir 
              les meilleurs soins avec les techniques les plus avancées.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  {qual.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {qual.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {qual.institution}
                </p>
                <span className="text-sm text-blue-600 font-medium">
                  {qual.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet Photos Section */}
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
              Découvrez Notre Cabinet
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un environnement moderne et apaisant, conçu pour votre confort et votre bien-être.
              Découvrez nos installations de dernière génération.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabinetPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Smile className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">{photo.alt}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold text-center px-4">
                      {photo.title}
                    </h3>
                  </div>
                </div>
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
              Prêt à retrouver le sourire ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée. 
              Notre équipe est là pour vous accompagner dans tous vos projets de soins dentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Clock className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Appeler maintenant
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}