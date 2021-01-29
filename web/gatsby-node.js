/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SanityProduct: {
      path: {
        type: 'String',
        resolve (source, args, context, info) {
          const { slug } = source

          return `/product/${slug.current}/`
        }
      }
    },
    SanityCategory: {
      products: {
        type: ['SanityProduct'],
        resolve (source, args, context, info) {
          return context.nodeModel.runQuery({
            type: 'SanityProduct',
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id
                    }
                  }
                }
              }
            }
          })
        }
      }
    }
  })
}

const createProductPages = async (graphql, actions, reporter) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            path
            isActive
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if(result.errors) throw result.errors

  const productEdges = (result.data.allSanityProduct || {}).edges || []

  productEdges.forEach(({ node }) => {
    const id = node.id
    const slug = node.slug.current
    const path = node.path
    const isActive = node.isActive

    if(isActive) {
      createPage({
        path,
        component: require.resolve(`./src/templates/product-template.js`),
        context: { id }
      })
    }


  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  return Promise.all([
    createProductPages(graphql, actions, reporter)
  ])
}
