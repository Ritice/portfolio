import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
            Recommandations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mt-4 font-sans">
            Ce qu'on dit de moi
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            La satisfaction de mes collaborateurs et clients est ma priorité. Voici quelques témoignages issus de mes projets récents.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quotes Icon Top Right */}
              <div className="absolute top-8 right-8 text-blue-50">
                <Quote className="w-12 h-12 stroke-[4px]" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed italic relative z-10 mb-8 flex-grow">
                "{test.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-gray-50 pt-6">
                <img
                  id={`testimonial-avatar-${test.id}`}
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{test.name}</h4>
                  <p className="text-xs text-gray-500">
                    {test.role} <span className="text-blue-500 font-medium">@ {test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
