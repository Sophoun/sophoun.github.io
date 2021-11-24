import React from "react"
import { graphql } from "gatsby"
import PostLink from "../component/post_link"
import Layout from "../layout/layout"
const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts: [] = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout
      center={false}>
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