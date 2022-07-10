import { getAnalytics, logEvent } from "firebase/analytics";
import app from "gatsby-plugin-firebase-v9.0";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
	const { t } = useTranslation();
	const analytics = getAnalytics(app)

	return (
		<div className="row">
			<div className="col-md-12">
				<p className="paragraph1">{t("home.hello")}</p>
				<p className="hello-bold">{t("home.im_sophoun")}</p>
				<p className="paragraph2 col-lg-7 col-md-9 col-12">{t("home.me_info")}</p>
				<div className="d-flex justify-content-start">
					<a
						className="button btn"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/Sophoun"
						onClick={() => logEvent(analytics, "Click on Github profile")}
					>
						<img
							alt="Github"
							src="https://img.icons8.com/ios-filled/24/000000/github.png"
						/>
					</a>
					<a
						className="button btn ms-2"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/sophoun-nheum"
						onClick={() => logEvent(analytics, "Click on LinkedIn profile")}
					>
						<img
							alt="LinkedIn"
							src="https://img.icons8.com/fluency/24/000000/linkedin.png"
						/>
					</a>
					<a className="button btn ms-2" href="mailto:sophoun.unix@gmail.com" onClick={() => logEvent(analytics, "Click on Hire me")}>
						{t("home.hire_me")}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
