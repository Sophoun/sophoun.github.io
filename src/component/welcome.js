import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const Welcome = () => {
	const { t } = useTranslation();

	return (
		<div className="row">
			<div className="d-flex">
				<div className="col-12">
					<p className="paragraph1">{t("home.hello")}</p>
					<p className="hello-bold">{t("home.im_sophoun")}</p>
					<p className="paragraph2">{t("home.me_info")}</p>
					<div className="d-flex justify-content-start">
						<a
							className="button btn"
							target="_blank"
							rel="noreferrer"
							alt="Github"
							href="https://github.com/Sophoun"
						>
							<img
								alt="Github"
								src="https://img.icons8.com/ios-filled/24/000000/github.png"
							/>
						</a>
						<a
							className="button btn ml-2"
							target="_blank"
							rel="noreferrer"
							alt="LinkedIn"
							href="https://www.linkedin.com/in/sophoun-nheum"
						>
							<img
								alt="LinkedIn"
								src="https://img.icons8.com/fluency/24/000000/linkedin.png"
							/>
						</a>
						<a className="button btn ml-2" href="mailto:sophoun.unix@gmail.com">
							{t("home.hire_me")}
						</a>
					</div>
				</div>
				{/* <div className="col-6 d-flex justify-content-end">
					<StaticImage
						src="../images/site_background1.jpg"
						alt="Banner 1"
						placeholder="blurred"
					/>
				</div> */}
			</div>
		</div>
	);
};

export default Welcome;
