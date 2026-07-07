import { ArrowUp, Code } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand/Logo Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 text-xl font-bold tracking-tight mb-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm">
                JK
              </span>
              <span>
                {personalInfo.name.split(' ')[0]}
                <span className="text-blue-500">.dev</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Développeur Web passionné par le code propre, l'optimisation des performances et les interfaces interactives soignées.
            </p>
          </div>

          {/* Quick Info / Quote */}
          <div className="hidden lg:flex items-center space-x-2 text-xs text-gray-400 max-w-xs bg-gray-800/40 border border-gray-800 p-3.5 rounded-2xl">
            <Code className="w-5 h-5 text-blue-500 shrink-0" />
            <span>"La simplicité est la sophistication suprême." — Léonard de Vinci</span>
          </div>

          {/* Back to Top */}
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-900/30 cursor-pointer"
            title="Retour en haut"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} {personalInfo.name}. Tous droits réservés.</p>
          <p className="flex items-center space-x-1.5">
          </p>
        </div>

      </div>
    </footer>
  );
}
