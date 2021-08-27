import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import cookie from "react-cookies";

const menuStyle = {
	paddingTop: "24px",
};

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
		cookie.save("language", i18n.language);
	};

	const languageMenu = () => {
		var language = cookie.load("language") ?? "en";
		if (language === "en") {
			return (
				<div className="d-flex align-content-center">
					<StaticImage
						alt={language}
						src="../images/icons/united-kingdom.png"
						style={{
							marginRight: "6px",
						}}
					/>
					{t("language.english")}
				</div>
			);
		} else if (language === "km") {
			return (
				<div className="d-flex align-content-center">
					<StaticImage
						alt={language}
						src="../images/icons/cambodia.png"
						style={{
							marginRight: "6px",
						}}
					/>
					{t("language.khmer")}
				</div>
			);
		}
	};

	return (
		<div className="vw-100">
			<div id="menu" style={menuStyle} className="col-12">
				<Helmet title={`Sophoun - ${data?.frontmatter?.title ?? "Blog"}`} />
				<div className="row d-flex justify-content-between">
					<a href="/">
						<StaticImage
							src="../images/Logo@2x.png"
							className="flex-start"
							alt="Logo"
							placeholder="blurred"
						/>
					</a>
					<div className="row">
						<div className="dropdown pr-2">
							<button
								className="btn button dropdown-toggle d-flex align-content-center"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								{languageMenu()}
							</button>
							<div
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton"
							>
								<button
									className="dropdown-item button d-flex align-content-center"
									href="#"
									onClick={() => changeLanguage("en")}
								>
									<StaticImage
										alt="english"
										src="../images/icons/united-kingdom.png"
										style={{
											marginRight: "6px",
										}}
									/>
									{t("language.english")}
								</button>
								<button
									className="dropdown-item button d-flex align-content-center"
									href="#"
									onClick={() => changeLanguage("km")}
								>
									<StaticImage
										alt="khmer"
										src="../images/icons/cambodia.png"
										style={{
											marginRight: "6px",
										}}
									/>
									{t("language.khmer")}
								</button>
							</div>
						</div>
						<a href="/" className="button btn">
							{t("menu.home")}
						</a>
						{/* <a href="#2" className="button btn ml-2">Hire Me</a> */}
						<a href="/resume" className="button btn ml-2">
							{t("menu.resume")}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
