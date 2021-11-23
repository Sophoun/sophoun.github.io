import React from "react";
import Header from "../component/header";

const Layout = ({ children }) => (
	<main>
		<div className="container">
			<Header data={undefined} />
			<div>{children}</div>
		</div>
	</main>
);

export default Layout;
