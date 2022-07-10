
import React, { useEffect } from "react";
import Welcome from "../component/welcome";
import Layout from "../layout/layout";
import app from "gatsby-plugin-firebase-v9.0"
import { getAnalytics, logEvent } from "firebase/analytics"

const IndexPage = () => {

	const analytics = getAnalytics(app)

	useEffect(() => {
		logEvent(analytics, "Open home page.");

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
