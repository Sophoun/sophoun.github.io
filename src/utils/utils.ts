export const utils = {
	changeBodyFont(lang) {
		const body = document.getElementsByTagName("body")[0];
		if (lang === "en") {
			body.style.fontFamily = "Shanti";
		} else if (lang === "km") {
			body.style.fontFamily = "Khmer OS Battambang";
		}
	},
};
