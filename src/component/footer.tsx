import * as React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer >
			<h4>{t("labels.contact")}</h4>
			<hr className="break-line" />
			<div className="d-md-flex justify-content-between">
				<p>{t("labels.email")}: {t("labels.email_name")}</p>
				<p>{t("labels.copy_right")}</p>
			</div>
		</footer>
	);
};

export default Footer;
