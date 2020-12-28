const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlog {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsServicing {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsBlog.edges.map(({ node: blog }) => {
        createPage({
          path: `blog/${blog.slug}`,
          component: path.resolve(`./src/templates/blog-post-template.js`),
          context: {
            slug: blog.slug,
          },
        })
      })
      result.data.allDatoCmsServicing.edges.map(({ node: service }) => {
        createPage({
          path: `servicing/${service.slug}`,
          component: path.resolve(`./src/templates/servicing-page-template.js`),
          context: {
            slug: service.slug,
          },
        })
      })
      resolve()
    })
  })
}
