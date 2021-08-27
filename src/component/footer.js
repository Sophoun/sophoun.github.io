import * as React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div>
			<div className="row">
				<h4>{t("footer.contact")}</h4>
			</div>
			<div className="row">
				<hr className="break-line" />
			</div>
			<div className="row d-flex justify-content-between">
				<p>
					{t("footer.email")}: {t("footer.email_name")}
				</p>

				<p>{t("footer.copy_right")}</p>
			</div>
		</div>
	);
};

export default Footer;
