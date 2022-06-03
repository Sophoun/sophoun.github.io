import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layout/layout";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { useTranslation } from "react-i18next";

const Resume = () => {
	const { t } = useTranslation();

	return (
		<Layout
			center={false}
		>
			<div className="row mt-3">
				<div className="col-6">
					<h1 className="content-title">{t("resume.title")}</h1>
					<hr className="break-line" />
				</div>
				<div className="col-6 d-flex justify-content-end">
					<a className="button btn"
						href="https://docs.google.com/document/d/1H0B3roqtRtj-3o3yOK8REJ26eMPsz2kGH056bdATXyg/edit?usp=sharing"
						target="blank">
						{t("resume.download")}
					</a>
				</div>
			</div>
			<div>
				<div className="row">
					<div className="col-lg-3 col-sm-5 col-12 d-flex justify-content-center d-md-flex justify-content-sm-start">
						<StaticImage
							className="profile-image"
							src="../images/profile_circle.jpg"
							alt="Profile"
							placeholder="blurred"
						/>
					</div>
					<div className="col-lg-9 col-sm-7 col-12 mt-4 mt-sm-0 d-flex flex-column">
						<h1 className="content-title text-sm-start text-center">{t("resume.name")}</h1>
						<p className="paragraph3 mt-2 mt-sm-0">{t("resume.slang")}</p>
					</div>
				</div>
			</div>
			<div className="pt-2 pt-sm-5">
				<h1>{t("resume.personal_info_title")}</h1>
				<hr className="break-line" />
				<p>{t("resume.personal_info_block")}</p>
			</div>
			<div>
				<h1>{t("resume.experiences_title")}</h1>
				<hr className="break-line" />
			</div>

			<div>
				<Timeline lineColor={"#ddd"} className="timeline-custom">
					<TimelineItem
						key="005"
						dateText={t("resume.experiences.prince_bank_manager.year")}
						dateInnerStyle={{ background: "#FFAC38", color: "white" }}
						style={{ color: "#FFAC38" }}>
						<h3 style={{ color: "#FFAC38" }}>
							{t("resume.experiences.prince_bank_manager.title")}
						</h3>
						<h4>{t("resume.experiences.prince_bank_manager.sub_title")}</h4>
						<ul>
							<li>{t("resume.experiences.prince_bank_manager.task1")}</li>
							<li>{t("resume.experiences.prince_bank_manager.task2")}</li>
						</ul>
					</TimelineItem>
					<TimelineItem
						key="004"
						dateText={t("resume.experiences.prince_bank.year")}
						dateInnerStyle={{ background: "#e86971", color: "white" }}
						style={{ color: "#e86971" }}>
						<h3 style={{ color: "#e86971" }}>
							{t("resume.experiences.prince_bank.title")}
						</h3>
						<h4>{t("resume.experiences.prince_bank.sub_title")}</h4>
						<ul>
							<li>{t("resume.experiences.prince_bank.task1")}</li>
							<li>{t("resume.experiences.prince_bank.task2")}</li>
						</ul>
					</TimelineItem>
					<TimelineItem
						key="003"
						dateText={t("resume.experiences.beniten.year")}
						dateInnerStyle={{ background: "#61b8ff", color: "#fff" }}>
						<h3 style={{ color: "#61b8ff" }}>
							{t("resume.experiences.beniten.title")}
						</h3>
						<p>
							<ul>
								<li>{t("resume.experiences.beniten.task1")}</li>
								<li>{t("resume.experiences.beniten.task2")}</li>
							</ul>
						</p>
					</TimelineItem>
					<TimelineItem
						key="002"
						dateText={t("resume.experiences.cam_wp.year")}
						dateInnerStyle={{ background: "#76bb7f" }}>
						<h3 style={{ color: "#76bb7f" }}>
							{t("resume.experiences.cam_wp.title")}
						</h3>
						<h4>{t("resume.experiences.cam_wp.sub_title")}</h4>
						<p>
							<ul>
								<li>{t("resume.experiences.cam_wp.task1")}</li>
							</ul>
						</p>
					</TimelineItem>
					<TimelineItem
						key="001"
						dateText={t("resume.experiences.blue.year")}
						dateInnerStyle={{ background: "#bb007f" }}>
						<h3 style={{ color: "#bb007f" }}>
							{t("resume.experiences.blue.title")}
						</h3>
						<p>
							<ul>
								<li>{t("resume.experiences.blue.task1")}</li>
								<li>{t("resume.experiences.blue.task2")}</li>
							</ul>
						</p>
					</TimelineItem>
				</Timeline>
			</div>
			<div>
				<h1>{t("resume.educations_title")}</h1>
				<hr className="break-line" />
			</div>
			<div>
				<Timeline lineColor={"#ddd"} className="timeline-custom">
					<TimelineItem
						key="001"
						dateText={t("resume.educations.rupp.year")}
						style={{ color: "#e86971" }}>
						<h3 style={{ color: "#e86971" }}>
							{t("resume.educations.rupp.school")}
						</h3>
						<p>{t("resume.educations.rupp.certification")}</p>
					</TimelineItem>
					<TimelineItem
						key="002"
						dateText={t("resume.educations.ckcc.year")}
						dateInnerStyle={{ background: "#61b8ff", color: "#fff" }}>
						<h3 style={{ color: "#61b8ff" }}>
							{t("resume.educations.ckcc.school")}
						</h3>
						<p>{t("resume.educations.ckcc.certification")}</p>
					</TimelineItem>
					<TimelineItem
						key="004"
						dateText={t("resume.educations.donbosco.year")}
						dateInnerStyle={{ background: "#76bb7f" }}>
						<h3 style={{ color: "#76bb7f" }}>
							{t("resume.educations.donbosco.school")}
						</h3>
						<p>{t("resume.educations.donbosco.certification")}</p>
					</TimelineItem>
				</Timeline>
			</div>
		</Layout>
	);
};

export default Resume;
