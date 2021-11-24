import React from "react"
import { graphql } from "gatsby"
import PostLink from "../component/post_link"
import Layout from "../layout/layout"
import { useTranslation } from "react-i18next"
const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
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
      <div>
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
            title
            path
          }
        }
      }
    }
  }`