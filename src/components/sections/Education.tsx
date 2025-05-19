import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import { education } from '../../data/resume';

const Education: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t('education_title')}</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700
                        hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                    <BookOpen className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="text-3xl font-bold gradient-text">
                    {edu.endYear}
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

export default Education;