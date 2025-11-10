'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
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

export default function Home() {
  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Doctorat en Chirurgie Dentaire",
      institution: "Faculté de Médecine Dentaire de Monastir",
      year: "2014"
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
                <span className="font-caveat text-2xl inline-block align-middle mr-2">Dr. Guedria Yosra</span>
                <span className="align-middle">vous propose des soins dentaires d'excellence dans un environnement moderne et bienveillant.</span>
                <br />
                <span className="font-caveat text-1xl block mt-1">Votre confort et votre satisfaction sont nos priorités.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/soins">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    Découvrir nos soins
                  </Button>
                </a>
                <a href="/contact">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    Prendre rendez-vous
                  </Button>
                </a>
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
                <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden">
                  <OptimizedImage
                    src="/images/hero/hero-main.jpg"
                    alt="Cabinet dentaire moderne avec équipement de pointe"
                    width={600}
                    height={400}
                    priority={true}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">Cabinet Moderne</p>
                    <p className="text-sm text-blue-200">Équipements de dernière génération</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Image principale - Réception */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[16/9]">
                  <OptimizedImage
                    src="/images/cabinet/reception.jpg"
                    alt="Accueil moderne et chaleureux du cabinet dentaire"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Accueil Chaleureux</h3>
                    <p className="text-lg opacity-90">Un espace moderne conçu pour votre confort dès votre arrivée</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grille des autres images */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <OptimizedImage
                  src="/images/cabinet/equipements.jpg"
                  alt="Équipements dentaires de dernière génération"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">Équipements Modernes</h4>
                    <p className="text-sm opacity-90">Technologies de pointe</p>
                  </div>
                </div>
              </div>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <OptimizedImage
                  src="/images/cabinet/salle-soins-1.jpg"
                  alt="Salle de soins confortable et apaisante"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">Confort Optimal</h4>
                    <p className="text-sm opacity-90">Environnement apaisant</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <OptimizedImage
                  src="/images/cabinet/blanchiment.jpg"
                  alt="Sourire éclatant après un blanchiment dentaire professionnel"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">Blanchiment Dentaire</h4>
                    <p className="text-sm opacity-90">Retrouvez un sourire éclatant et naturel grâce à nos techniques de blanchiment professionnel.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carte informative améliorée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-bold mb-3">Protocoles Stricts</h4>
                <p className="text-blue-100 mb-4">
                  Respect total des normes d&apos;hygiène et de sécurité pour votre protection
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Stérilisation à 134°C</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Matériel à usage unique</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Traçabilité complète</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Prenez rendez-vous dès aujourd&apos;hui pour une consultation personnalisée.
              Notre équipe est là pour vous accompagner dans tous vos projets de soins dentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Clock className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Appeler maintenant
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
