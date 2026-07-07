import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

interface HeroProps {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    animateDelayed: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen pt-32 pb-20 flex items-center bg-radial from-blue-50/40 via-white to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Text Content Column */}
        <motion.div
          id="hero-text-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full w-fit mb-6 shadow-xs">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6 font-sans"
          >
            Bonjour, je suis <br />
            <span className="text-blue-600 relative inline-block">
              {personalInfo.name} <br />
              {personalInfo.lastName}
              <span className="absolute left-0 bottom-1 w-full h-2 bg-blue-100 -z-10 rounded-full"></span>
            </span>
          </motion.h1>

          {/* Title Subheading */}
          <motion.h2
            id="hero-subheading"
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-medium text-gray-700 mb-4"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Biography */}
          <motion.p
            id="hero-bio"
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Location & Metadata */}
          <motion.div
            id="hero-meta"
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8"
          >
            <div className="flex items-center space-x-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>{personalInfo.email}</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            id="hero-actions"
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              id="hero-primary-cta"
              onClick={onContactClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
            >
              <span>Me Contacter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-secondary-cta"
              onClick={onProjectsClick}
              className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-xl flex items-center justify-center space-x-2 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
            >
              <span>Voir mes projets</span>
            </button>
            <a
              id="hero-cv-download"
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Téléchargement du CV fictif démarré !"); }}
              className="px-6 py-4 text-gray-500 hover:text-blue-600 text-sm font-medium flex items-center justify-center space-x-1 hover:bg-blue-50/40 rounded-xl transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Mon CV (PDF)</span>
            </a>
          </motion.div>

          {/* Statistics Info */}
          <motion.div
            id="hero-stats"
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">5+</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Années de dev</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">9+</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Projets réalisés</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">100%</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Passion & Riguer</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Showcase Column (Right) */}
        <motion.div
          id="hero-avatar-col"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
          className="lg:col-span-5 flex justify-center relative py-10 lg:py-0"
        >
          {/* Main Rounded Image Frame with decorative background circles */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96">
            {/* Ambient background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-2xl opacity-70 -z-10 animate-pulse"></div>
            
            {/* Outer rings */}
            <div className="absolute -inset-1 border border-blue-100 rounded-full -z-10"></div>
            <div className="absolute -inset-3 border border-blue-50 rounded-full -z-10 opacity-50"></div>

            {/* Avatar Frame */}
            <div className="w-full h-full rounded-full border-4 border-white bg-white shadow-2xl overflow-hidden relative">
              <img
                id="hero-avatar-image"
                src={personalInfo.avatar}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating badges for visual decoration */}
            <motion.div
              id="float-badge-react"
              variants={floatVariants}
              animate="animate"
              className="absolute -top-2 -right-4 bg-white border border-gray-100 px-3.5 py-2 rounded-xl shadow-md flex items-center space-x-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
              <span className="text-xs font-semibold text-gray-700">JAVA</span>
            </motion.div>

            <motion.div
              id="float-badge-node"
              variants={floatVariants}
              animate="animateDelayed"
              className="absolute bottom-6 -left-6 bg-white border border-gray-100 px-3.5 py-2 rounded-xl shadow-md flex items-center space-x-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-semibold text-gray-700">AWS</span>
            </motion.div>

            <motion.div
              id="float-badge-design"
              variants={floatVariants}
              animate="animate"
              className="absolute bottom-16 -right-6 bg-white border border-gray-100 px-3.5 py-2 rounded-xl shadow-md flex items-center space-x-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              <span className="text-xs font-semibold text-gray-700">Clean Code</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
