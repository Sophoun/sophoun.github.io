
import React from "react";
import Welcome from "../components/welcome";
import Layout from "../layout/layout";
import { logEvent } from "firebase/analytics"
import { useAnalytics } from "../utils/firebase";

const IndexPage = () => {
	useAnalytics((analytics) => logEvent(analytics, "Open home page."))

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
