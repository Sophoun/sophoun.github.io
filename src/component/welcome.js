import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Welcome = () => {
	return (
		<div className="row">
			<div className="d-flex">
				<div className="col-6">
					<p className="paragraph1">Hello</p>
					<p className="hello-bold">I'm Sophoun</p>
					<p className="paragraph2">
						Professional mobile &amp; backend developer
					</p>
					<div className="d-flex justify-content-start">
						<a className="button btn" target='_blank' rel="noreferrer" alt='Github' href='https://github.com/Sophoun'>
							<img src="https://img.icons8.com/ios-filled/24/000000/github.png" />
						</a>
						<a className="button btn ml-2" target='_blank' rel="noreferrer" alt='LinkedIn' href='https://www.linkedin.com/in/sophoun-nheum'>
							<img src="https://img.icons8.com/fluency/24/000000/linkedin.png" />
						</a>
						<a className="button btn ml-2" href="mailto:sophoun.unix@gmail.com">
							Hire Me
						</a>
					</div>
				</div>
				<div className="col-6 d-flex justify-content-end">
					<StaticImage
						src="../images/banner1@2x.png"
						alt="Banner 1"
						placeholder="blurred"
					/>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
