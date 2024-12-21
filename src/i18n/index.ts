import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "../../public/locales/en.json";
import translationsBr from "../../public/locales/pt.json";

const resources = {
  en: { translation: translationsEn },
  pt: { translation: translationsBr },
};

i18n.use(initReactI18next).init({
  lng: "en", 
  fallbackLng: "en", 
  resources, 
  interpolation: { escapeValue: false },
});

export default i18n;
