import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../../data/resume';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-white">{t('experience_title')}</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-primary-500
                       shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-2 text-primary-400 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                  </div>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                 bg-primary-900/50 text-primary-300 border border-primary-700/50">
                    {experience.type}
                  </span>
                  
                  <div className="mt-4 space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-accent-400" />
                      <span>{experience.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent-400" />
                      <span>{experience.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent-400" />
                      <span>{experience.startDate} - {experience.endDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-3/4 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t('responsibilities')}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {experience.responsibilities.map((responsibility, i) => (
                        <li key={i} className="pl-2">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {t('technologies')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.split(', ').map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full text-xs bg-primary-900/50 text-primary-300 
                                   border border-primary-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;