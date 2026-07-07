import { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'frontend', label: 'Front-End' },
    { id: 'backend', label: 'Back-End' },
    { id: 'tools', label: 'Outils & DevOps' },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  // Dynamic Lucide Icon Helper
  const renderIcon = (iconName: string) => {
    // Falls back to a default icon if not found
    const IconComponent = (Icons as any)[iconName] || Icons.Code2;
    return <IconComponent className="w-5 h-5 text-blue-600" />;
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'frontend': return 'Front-End';
      case 'backend': return 'Back-End';
      case 'tools': return 'Outils';
      default: return '';
    }
  };

  return (
    <section id="competences" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Mon Savoir-Faire
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-4 font-sans">
            Compétences Techniques
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Un aperçu des technologies et des outils que je maîtrise au quotidien pour donner vie à vos projets numériques.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          id="skills-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:border-blue-100 hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100/50">
                    {renderIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{skill.name}</h3>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                      {getCategoryLabel(skill.category)}
                    </span>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-600 bg-blue-50/70 border border-blue-100/30 px-2.5 py-0.5 rounded-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Extra Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 pt-8 border-t border-gray-100">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
            {/* Ambient overlay */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <span className="text-blue-400">⚡</span>
              <span>Qualité & Standards de Code</span>
            </h3>
            <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
              Je mets un point d'honneur à écrire du code propre, modulaire et hautement documenté. L'optimisation des performances de chargement, l'accessibilité web (WCAG) et l'architecture sémantique font partie intégrante de ma philosophie de développement.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Clean Code</span>
              <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">SEO & Accessibilité</span>
              <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Mobile-First</span>
              <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">CI/CD & Gitflow</span>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="text-blue-600">🎯</span>
                <span>Méthodologie de Travail</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                De la phase de conception initiale à la mise en production sur Netlify, j'utilise une approche agile centrée sur le retour utilisateur rapide et l'itération continue.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-xs">
                <p className="text-lg font-bold text-blue-600">01</p>
                <p className="text-xs font-semibold text-gray-800 mt-1">Cadrage</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Cahier des charges</p>
              </div>
              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-xs">
                <p className="text-lg font-bold text-blue-600">02</p>
                <p className="text-xs font-semibold text-gray-800 mt-1">Design & Dev</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Sprints & UI</p>
              </div>
              <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-xs">
                <p className="text-lg font-bold text-blue-600">03</p>
                <p className="text-xs font-semibold text-gray-800 mt-1">Déploiement</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Netlify & QA</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
