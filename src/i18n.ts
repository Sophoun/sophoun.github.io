import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import labels from "./locales/labels.json"
import home from "./locales/home.json";
import resume from "./locales/resume.json"
import cookie from "react-cookies";
import { utils } from "./utils/utils";

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

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: lang,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
		react: {
			wait: true,
		},
	});

export default i18n;
