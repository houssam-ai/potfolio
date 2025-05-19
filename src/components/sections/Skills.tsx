import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BrainCircuit, Code, Database, GitBranch, Globe, Languages as LanguagesIcon,
  LayoutDashboard, Cpu, LineChart, Loader2, Monitor, PieChart, Server
} from 'lucide-react';
import { skills } from '../../data/resume';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Map skill categories to icons
  const categoryIcons: Record<string, React.ReactNode> = {
    ai_apis: <BrainCircuit className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    streaming: <LineChart className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    gpu: <Cpu className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    databases: <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    web_dev: <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    collab_tools: <GitBranch className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    computer_vision: <Monitor className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    data_mining: <Server className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    nlp: <LanguagesIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    project_management: <LayoutDashboard className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    data_analysis: <PieChart className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    machine_learning: <BrainCircuit className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    programming: <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    data_viz: <PieChart className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    iot: <Loader2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">{t('skills_title')}</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="skill-card group"
            >
              <div className="flex items-center mb-4">
                {categoryIcons[skill.category]}
                <h3 className="text-lg font-semibold ml-3 text-gray-900 dark:text-gray-100">
                  {t(skill.category)}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {skill.items.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;