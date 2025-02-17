import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const supportedLanguages = {
  en: 'English',
  tr: 'Türkçe',
  id: 'Bahasa Indonesia',
  zh: '中文',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  sv: 'Svenska',
  ru: 'Русский',
  ar: 'العربية',
  fa: 'فارسی',
  pt: 'Português'
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: Object.keys(supportedLanguages),
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export { supportedLanguages };
export default i18n;
