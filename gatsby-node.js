const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/template/page.tsx`)

  const result = await graphql(`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {} // additional data can be passed via context
    })
  })
}