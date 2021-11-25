import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";

interface LayoutProps {
	center: boolean,
	children: React.ReactNode,
}

const Layout = (props: LayoutProps) => {
	return (
		<main className="container d-flex flex-column vh-100 justify-content-between">
			<div>
				<Header data={undefined} />
				{props.center ? "" : props.children}
			</div>
			{props.center ? props.children : ""}
			<Footer />
		</main>
	);
};

export default Layout;