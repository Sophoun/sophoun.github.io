import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useTranslation } from "react-i18next";
import cookie from "react-cookies";
import { utils } from "../utils/utils";
import { logEvent } from "firebase/analytics";
import { useAnalytics } from "../utils/firebase";

const Header = ({ data }) => {
	const { t, i18n } = useTranslation();
	useAnalytics((analytics) => logEvent(analytics, "Open home page."))

	const changeLanguage = (lang) => {
		var language = cookie.load("language") ?? "en";
		if (lang === language) return;
		console.log(language);
		if (language === "en") {
			i18n.changeLanguage("km");
		} else if (language === "km") {
			i18n.changeLanguage("en");
		}
		cookie.save("language", i18n.language, { path: "/" });
		utils.changeBodyFont(lang);
	};

	return (
		<div className="row justify-content-between pt-md-3 pt-3">
			<a className="col-6" href="/">
				<StaticImage
					src="../images/Logo@2x.png"
					alt="Logo"
					placeholder="blurred"
				/>
			</a>
			<div className="col-6 justify-content-md-end justify-content-start d-sm-flex d-none d-sm-block">
				<a href="/" className="button btn col-md-4" onClick={() => useAnalytics((analytics) => logEvent(analytics, "Click on Home menu"))}>
					{t("labels.home")}
				</a>
				{/* <a href="#2" className="button btn ml-2">Hire Me</a> */}
				<a href="/resume" className="button btn col-md-4 ms-2" onClick={() => useAnalytics((analytics) => logEvent(analytics, "Click on Resume menu"))}>
					{t("labels.resume")}
				</a>
				{/* <a href="/blog" className="button btn col-md-4 ms-2">
					{t("labels.blog")}
				</a> */}
			</div>
			<div className="col-6 d-sm-none d-sm-block d-flex justify-content-end dropdown">
				{/* <button className="btn button" id="dropdownMenuLink">MORE</button> */}
				<div className="dropdown">
					<a className="btn button dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						{t("labels.menu")}
					</a>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<li><a className="dropdown-item btn button" href="/resume">{t("labels.resume")}</a></li>
						{/* <li><a className="dropdown-item btn button" href="/blog">{t("labels.blog")}</a></li> */}
					</ul>
				</div>
			</div>

		</div>
	);
};

export default Header;
