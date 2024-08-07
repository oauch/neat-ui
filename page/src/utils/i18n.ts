import usTranslations from "@/translations/en_US.json";
import krTranslations from "@/translations/ko_KR.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en_US: {
    translation: usTranslations,
  },
  ko_KR: {
    translation: krTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en_US",
  fallbackLng: "en_US",
  interpolation: { escapeValue: true },
  returnObjects: true,
  returnEmptyString: true,
  returnNull: true,
});

export default i18n;
