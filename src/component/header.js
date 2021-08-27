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

	const changeLanguage = () => {
		var language = cookie.load("language") ?? "en";
		console.log(language);
		if (language === "en") {
			i18n.changeLanguage("km");
		} else if (language === "km") {
			i18n.changeLanguage("en");
		}
		cookie.save("language", i18n.language);
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
					<div className="align-content-end">
						<button className="button btn" onClick={changeLanguage}>
							Khmer
						</button>
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
