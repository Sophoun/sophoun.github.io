import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import firebase from "gatsby-plugin-firebase";
import React, { useEffect } from "react";
import Welcome from "../component/welcome";
import Layout from "../layout/layout";
import { analytic, analytics } from "../utils/firebase";

const IndexPage = () => {

	useEffect(() => {
		analytic((a) => {
			logEvent(a, "Success calling from development.")
		})
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
