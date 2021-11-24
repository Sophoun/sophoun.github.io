import React from "react";
import Welcome from "../component/welcome";
import Footer from "../component/footer";
import Layout from "../layout/layout";
import Header from "../component/header";

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
