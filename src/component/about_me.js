import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const AboutMe = () => {
	return (
		<div className="row">
			<div className="d-flex">
				<div className="col-6">
					<StaticImage
						width={600}
						src="../images/banner2@2x.png"
						alt="Banner 2"
						placeholder="blurred"
					/>
				</div>
				<div className="col-6">
					<p className="content-title">About Me</p>
					<hr className="break-line" />
					<p className="paragraph3">
						I'm a software developer specialized in mobile development for
						complex scalable apps and also confident in backend development. I
						have more than 7 years experience building software for company
						around the world and I also write about software development on my
						blog.
					</p>
					<p className="paragraph3">
						Want to know how I may help your project? check out below.
					</p>
					<a href="/resume" className="button btn flex-end">
						Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
