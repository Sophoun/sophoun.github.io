import React from "react";
import Header from "../component/header";

const Layout = ({ children }) => (
	<main>
		<div className="container">
			<div className="row">
				<Header />
				<div>{children}</div>
			</div>
		</div>
	</main>
);

export default Layout;
