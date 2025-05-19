import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('fr')}
        className={`language-switcher ${language === 'fr' ? 'bg-primary-600 text-white' : ''}`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`language-switcher ${language === 'en' ? 'bg-primary-600 text-white' : ''}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;