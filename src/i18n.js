import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import en from "./locales/en/translations.json";
import de from "./locales/de/translations.json";
import fr from "./locales/fr/translations.json";

const bundledResources = {
    en: { translation: en },
    de: { translation: de },
    fr: { translation: fr }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(ChainedBackend)
    .init({
        backend: {
            backends: [HttpBackend, resourcesToBackend(bundledResources)],
            backendOptions: [
                {
                    loadPath: `${process.env.REACT_APP_API_URL}/?language={{lng}}`
                }
            ]
        },
        ns: ["translation"],
        defaultNS: "translation",
        lng: "en",
        fallbackLng: "en",
        debug: true,
        detection: { order: ["queryString", "cookie"], caches: ["cookie"] },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: true
        }
    });

export default i18n;
