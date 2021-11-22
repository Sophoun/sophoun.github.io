import React from "react";
import Welcome from "../component/welcome";
import Header from "../component/header";
import Footer from "../component/footer";

const IndexPage = () => {

	return (
		<div className="home-background">
			<div className="container">
				<div className="vh-100 d-flex row">
					<Header />
					<div className="align-self-start">
						<Welcome />
					</div>
					<div className="col-12 align-self-end">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndexPage;
