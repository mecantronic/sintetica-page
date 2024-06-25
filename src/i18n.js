import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locale/{{lng}}/{{ns}}.json',
    },
    ns: [
      'brand',
      'home',
      'navBar',
      'footer',
      'contact',
      'about',
      'data',
      'voiceCloning',
    ],
  });

export default i18n;
