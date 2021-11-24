import * as React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer >
			<h4>{t("footer.contact")}</h4>
			<hr className="break-line" />
			<div className="d-flex justify-content-between">
				<p>{t("footer.email")}: {t("footer.email_name")}</p>
				<p>{t("footer.copy_right")}</p>
			</div>
		</footer>
	);
};

export default Footer;
