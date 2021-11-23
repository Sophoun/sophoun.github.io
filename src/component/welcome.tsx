import React from "react";
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
							href="https://github.com/Sophoun"
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
						>
							<img
								alt="LinkedIn"
								src="https://img.icons8.com/fluency/24/000000/linkedin.png"
							/>
						</a>
						<a className="button btn ms-2" href="mailto:sophoun.unix@gmail.com">
							{t("home.hire_me")}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
