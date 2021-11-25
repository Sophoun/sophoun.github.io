import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useTranslation } from "react-i18next";
import cookie from "react-cookies";
import { utils } from "../utils/utils";

const Header = ({ data }) => {
	const { t, i18n } = useTranslation();

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

	// const languageMenu = () => {
	// 	var language = cookie.load("language") ?? "en";
	// 	if (language === "en") {
	// 		return (
	// 			<div className="">
	// 				<StaticImage
	// 					alt={language}
	// 					src="../images/icons/united-kingdom.png"
	// 					style={{
	// 						marginRight: "6px",
	// 					}}
	// 				/>
	// 				{t("language.english")}
	// 			</div>
	// 		);
	// 	} else if (language === "km") {
	// 		return (
	// 			<div className="">
	// 				<StaticImage
	// 					alt={language}
	// 					src="../images/icons/cambodia.png"
	// 					style={{
	// 						marginRight: "6px",
	// 					}}
	// 				/>
	// 				{t("language.khmer")}
	// 			</div>
	// 		);
	// 	}
	// };

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
				{/* <div className="dropdown col-md-3 justify-content-end">
					<button
						className="btn button dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						{languageMenu()}
					</button>
					<div
						className="dropdown-menu"
						aria-labelledby="dropdownMenuButton">
						<button
							className="dropdown-item button d-flex align-content-center"
							onClick={() => changeLanguage("en")}>
							<StaticImage
								className="ms-2 me-2"
								alt="english"
								src="../images/icons/united-kingdom.png"
							/>
							{t("language.english")}
						</button>
						<button
							className="dropdown-item button d-flex align-content-center"
							onClick={() => changeLanguage("km")}>
							<StaticImage
								className="ms-2 me-2"
								alt="khmer"
								src="../images/icons/cambodia.png"

							/>
							{t("language.khmer")}
						</button>
					</div>
				</div> */}
				<a href="/" className="button btn col-md-4">
					{t("menu.home")}
				</a>
				{/* <a href="#2" className="button btn ml-2">Hire Me</a> */}
				<a href="/resume" className="button btn col-md-4 ms-2">
					{t("menu.resume")}
				</a>
				<a href="/blog" className="button btn col-md-4 ms-2">
					{t("menu.blog")}
				</a>
			</div>
			<div className="col-6 d-sm-none d-sm-block d-flex justify-content-end dropdown">
				{/* <button className="btn button" id="dropdownMenuLink">MORE</button> */}
				<div className="dropdown">
					<a className="btn button dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						MENU
					</a>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<li><a className="dropdown-item btn button" href="/resume">{t("menu.resume")}</a></li>
						<li><a className="dropdown-item btn button" href="/blog">{t("menu.blog")}</a></li>
					</ul>
				</div>
			</div>

		</div>
	);
};

export default Header;
