import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import { useTranslation } from "react-i18next";

export default function Page({ data }) {
	const t = useTranslation();
	const { markdownRemark: post } = data;
	return (
		<Layout
			center={false}>
			<div className="row mt-3">
				<div className="col-12">
					<h1 className="content-title">{post.frontmatter.title}</h1>
					<hr className="break-line" />
					<p>
						Date: {post.frontmatter.date}
						<br />
						Author: {post.frontmatter.author}
					</p>
					<hr className="break-line" />
				</div>
			</div>
			<div className="d-flex justify-content-center pt-sm-3">
				<div
					className="post-content"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
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
				author
			}
		}
	}
`;
