import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./locals/en.json";
import khmer from "./locals/km.json";
import cookie from "react-cookies";
import { utils } from "./utils/utils";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: english,
	},
	km: {
		translation: khmer,
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
	});

export default i18n;
