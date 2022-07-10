import { initReactI18next } from "react-i18next";
import labels from "./locales/labels.json"
import home from "./locales/home.json";
import resume from "./locales/resume.json"
import cookie from "react-cookies";
import { utils } from "./utils/utils";
import i18next from "i18next";

const resources = {
	en: {
		translation: {
			labels: labels,
			home: home,
			resume: resume,
		},
	},
};

const lang = cookie.load("language");
utils.changeBodyFont(lang);

i18next.init({
	resources,
	lng: lang,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false, // react already safes from xss
	},
}, () => { });

initReactI18next.init(i18next)

export default i18next;
