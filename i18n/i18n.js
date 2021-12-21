import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import detector from 'i18next-browser-languagedetector';

import translationRU from "../i18n/locales/ru-RU.json"
import translationEN from "../i18n/locales/en-US.json"

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;