import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import Footer from "../component/footer";

export default function Page({ data }) {
	const { markdownRemark: post } = data;
	return (
		<Layout>
			<div className="container">
				<div className="blog-post">
					<h1>{post.frontmatter.title}</h1>
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{ __html: post.html }}
					/>
				</div>
				<Footer />
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query PageByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;
