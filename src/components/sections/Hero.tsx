import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-500 mx-auto mb-6">
              {/* This is a placeholder for user's image */}
              <img 
  src="/images/profile.jpeg" 
  alt="Houssam Eddine SAFIR" 
  className="w-full h-full object-cover"/>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">{t('hello')}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Houssam Eddine SAFIR</h1>
            <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-6">{t('title')}</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#about" className="btn-primary">
              {t('cta')}
            </a>
            <a href="#contact" className="btn-secondary">
              {t('contact_me')}
            </a>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <a href="#about" className="text-gray-400 dark:text-gray-600">
              <ChevronDown size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;