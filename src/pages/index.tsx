import React from "react";
import Welcome from "../component/welcome";
import Layout from "../layout/layout";

const IndexPage = () => {

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
