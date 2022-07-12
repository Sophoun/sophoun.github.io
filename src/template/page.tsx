import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Page({ data }) {
	const { markdownRemark: post } = data;
	return (
		<Layout
			center={false}>
			<div className="mt-3 post d-flex justify-content-sm-center">
				<div>
					<h1 className="content-title">{post.frontmatter.title}</h1>
					<hr className="break-line" />
					<p>
						Date: {post.frontmatter.date}
						<br />
						Author: {post.frontmatter.author}
					</p>
					<p>{post.fields.readingTime.text}</p>
					<hr className="break-line" />
				</div>
			</div>
			<div className="d-flex justify-content-center pt-2 pb-4">
				<GatsbyImage image={getImage(post.frontmatter.featureImage)!} alt="Blog" />
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
				featureImage {
					childImageSharp {
					  gatsbyImageData(width: 800)
					}
				  }
			}
			fields {
				readingTime {
				  text
				}
			  }
		}
	}
`;
