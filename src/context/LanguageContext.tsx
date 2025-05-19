import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from '../i18n';

type LanguageType = 'fr' | 'en';
type LanguageContextType = {
  language: LanguageType;
  changeLanguage: (lang: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  changeLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage === 'en' || savedLanguage === 'fr') {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: LanguageType) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);