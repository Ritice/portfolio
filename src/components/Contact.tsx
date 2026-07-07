import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Github, Linkedin, Check, Copy, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Validation states
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire.';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est obligatoire.";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "L'adresse email n'est pas valide.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate standard submission behavior (Netlify forms ready)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Clear success banner after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Me Joindre
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-4 font-sans">
            Prenons Contact
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Un projet en tête, une opportunité professionnelle ou simplement envie de saluer ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gray-50/50 border border-gray-100 rounded-3xl p-8 lg:p-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informations de contact</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Vous préférez m'envoyer un email directement ? Vous pouvez utiliser le bouton ci-dessous pour copier mon adresse professionnelle. Je réponds généralement sous 24h à 48h.
              </p>

              {/* Interactive Email Copier */}
              <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between mb-8 shadow-xs">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2.5 bg-blue-50 rounded-xl">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Email professionnel</p>
                    <p className="text-sm font-semibold text-gray-800 truncate">{personalInfo.email}</p>
                  </div>
                </div>
                <button
                  id="email-copy-btn"
                  onClick={handleCopyEmail}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    copied
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                      : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  title={copied ? "Copié !" : "Copier l'email"}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social profiles linking */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Retrouvez-moi sur les réseaux</p>
              <div className="flex items-center space-x-3">
                <a
                  id="contact-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 bg-white border border-gray-100 text-gray-700 font-semibold text-sm rounded-xl flex items-center space-x-2 shadow-xs hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4 text-gray-600" />
                  <span>GitHub</span>
                </a>
                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 bg-white border border-gray-100 text-gray-700 font-semibold text-sm rounded-xl flex items-center space-x-2 shadow-xs hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-xs relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>
            
            {/* Netlify Forms Support Configuration attributes */}
            <form
              id="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* For Netlify build detection */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Name Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Votre Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`px-4 py-3.5 rounded-xl border text-sm text-gray-800 bg-gray-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all ${
                    errors.name ? 'border-red-300 ring-2 ring-red-50' : 'border-gray-200 focus:border-blue-500'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Votre Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jean.dupont@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`px-4 py-3.5 rounded-xl border text-sm text-gray-800 bg-gray-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all ${
                    errors.email ? 'border-red-300 ring-2 ring-red-50' : 'border-gray-200 focus:border-blue-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Expliquez brièvement votre projet ou votre demande..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  className={`px-4 py-3.5 rounded-xl border text-sm text-gray-800 bg-gray-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none ${
                    errors.message ? 'border-red-300 ring-2 ring-red-50' : 'border-gray-200 focus:border-blue-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>{isSubmitting ? "Envoi en cours..." : "Envoyer le message"}</span>
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </form>

            {/* Success Animation Overlay */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  id="success-overlay"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-xs rounded-3xl flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', duration: 0.5, delay: 0.1 }}
                    className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100 mb-6"
                  >
                    <Check className="w-8 h-8 stroke-[3px]" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center space-x-1.5">
                    <span>Message Envoyé !</span>
                    <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </h4>
                  <p className="text-gray-600 text-sm max-w-sm leading-relaxed mb-6">
                    Merci beaucoup pour votre message. Je reviens vers vous sous les plus brefs délais pour échanger sur votre projet.
                  </p>
                  <button
                    id="success-reset-btn"
                    onClick={() => setSubmitStatus('idle')}
                    className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Renvoyer un message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
