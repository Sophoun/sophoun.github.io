import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import firebase from "gatsby-plugin-firebase";
import React, { useEffect } from "react";
import Welcome from "../component/welcome";
import Layout from "../layout/layout";
import { analytics } from "../utils/firebase";

const IndexPage = () => {

	useEffect(() => {
		logEvent(analytics, "Success calling from development.")
	}, []);

	return (
		<div className="home-background">
			<Layout
				center={true}>
				<Welcome />
			</Layout>
		</div>
	);
};

export default IndexPage;
