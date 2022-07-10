import React, { useEffect } from "react"
import { graphql } from "gatsby"
import PostLink from "../component/post_link"
import Layout from "../layout/layout"
import { useTranslation } from "react-i18next"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { getAnalytics, logEvent } from "firebase/analytics"
import app from "gatsby-plugin-firebase-v9.0"
deckDeckGoHighlightElement();

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const analytics = getAnalytics(app)
  useEffect(() => logEvent(analytics, "Open blog page."), []);
  const { t } = useTranslation();

  const Posts: [] = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout
      center={false}>
      <div className="row mt-3">
        <div className="col-12">
          <h1 className="content-title">{t("blog.title")}</h1>
          <hr className="break-line" />
        </div>
      </div>
      <div className="row col-sm-8 offset-sm-2 col-12">
        {Posts}
      </div>
    </Layout>
  )
}
export default Blog
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
            featureImage {
              childImageSharp {
                gatsbyImageData(width: 300)
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
    }
  }`