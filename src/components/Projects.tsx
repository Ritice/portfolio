import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Info, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Technical details for the modal to make them look like real portfolio cases
  const technicalSpecs: Record<string, { role: string; challenges: string[]; techStack: string[] }> = {
    taskflow: {
      role: "Développeur Front-End Unique & Architecte UI",
      challenges: [
        "Optimisation du rendu pour les glisser-déposer (drag and drop) avec React State.",
        "Mise en cache locale du tableau Kanban pour préserver l'état hors ligne.",
        "Conception de graphiques fluides pour l'analyse des temps de sprint."
      ],
      techStack: ["React 19", "Tailwind CSS v4", "Lucide React", "Framer Motion", "HTML5 LocalStorage"]
    },
    ecosphere: {
      role: "Développeur Full-Stack & Spécialiste Visualisation",
      challenges: [
        "Agrégation des données d'émissions de carbone selon plusieurs facteurs de conversion.",
        "Rendu réactif de graphiques SVG complexes pour l'historique mensuel.",
        "Création d'une API d'analyse prédictive légère."
      ],
      techStack: ["React 19", "Recharts", "TypeScript", "Tailwind CSS", "REST API integration"]
    },
    aurameditation: {
      role: "Créateur UI & Développeur Audio",
      challenges: [
        "Synchronisation parfaite de la boucle audio Web Audio API sans latence.",
        "Animation fluide d'un guide respiratoire de type 'inspire/expire' synchrone.",
        "Gestion d'un minuteur d'arrière-plan résistant à la mise en veille du navigateur."
      ],
      techStack: ["React 19", "Web Audio API", "Framer Motion Animations", "Tailwind Flexbox"]
    }
  };

  return (
    <section id="projets" className="py-24 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
              Mes Réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-4 font-sans">
              Projets Récents
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
              Explorez une sélection de mes travaux récents. Chacun de ces projets a été pensé, conçu et développé pour résoudre un problème précis avec des technologies de pointe.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Image Container with Hover overlay */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 border-b border-gray-100">
                <img
                  id={`project-img-${project.id}`}
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  id={`project-details-btn-overlay-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center space-x-1 hover:bg-white shadow-sm transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-blue-600" />
                  <span>Détails Techniques</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-50 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <button
                    id={`project-details-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Fiche Tech</span>
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        id={`project-github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
                        title="Code Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        id={`project-demo-link-${project.id}`}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold rounded-lg flex items-center space-x-1 transition-all cursor-pointer"
                      >
                        <span>Démo Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                id="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              ></motion.div>

              {/* Modal Container */}
              <motion.div
                id="modal-container"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.3 }}
                className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 border border-gray-100"
              >
                {/* Header Image */}
                <div className="relative aspect-video w-full bg-gray-100">
                  <img
                    id="modal-project-img"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                  
                  {/* Close button */}
                  <button
                    id="modal-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white hover:scale-105 p-2 rounded-full backdrop-blur-sm transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-bold text-blue-400 bg-blue-900/40 border border-blue-400/40 px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                      Fiche Technique
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Bio Role */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Mon Rôle</h4>
                    <p className="text-sm font-semibold text-gray-800">
                      {technicalSpecs[selectedProject.id]?.role || "Développeur Full-Stack"}
                    </p>
                  </div>

                  {/* Challenges Solved */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Défis Techniques Résolus</h4>
                    <ul className="space-y-2.5">
                      {(technicalSpecs[selectedProject.id]?.challenges || []).map((challenge, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2.5 mt-0.5 shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies Clés</h4>
                    <div className="flex flex-wrap gap-2">
                      {(technicalSpecs[selectedProject.id]?.techStack || selectedProject.tags).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200/60 px-3 py-1.5 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    {selectedProject.demoUrl && (
                      <a
                        id="modal-demo-link"
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg transition-all"
                      >
                        <span>Visiter le Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        id="modal-github-link"
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium text-sm rounded-xl flex items-center justify-center space-x-1.5"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code source</span>
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
