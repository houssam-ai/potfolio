import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../../data/resume';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t('contact_title')}</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              {t('contact_me')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800
                          focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:text-gray-100"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800
                          focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:text-gray-100"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800
                          focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:text-gray-100"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full btn-primary flex items-center justify-center"
              >
                {formStatus === 'submitting' ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    {t('send')} <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
              
              {formStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                {t('contact')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {t('address')}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {t('email')}
                    </h4>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline mt-1 block"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {t('phone')}
                    </h4>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary-600 dark:text-primary-400 hover:underline mt-1 block"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md h-64 overflow-hidden">
              <iframe
                title="Google Maps"
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.72692390935!2d-6.8782299!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat!5e0!3m2!1sen!2sma!4v1656552673348!5m2!1sen!2sma"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;