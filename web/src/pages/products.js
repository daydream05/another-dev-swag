import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"
import Layout from "../components/layout"
import { ProductCard } from "../components/product-card"
import { breakpoints } from "../gatsby-plugin-theme-ui/breakpoints"

const ProductPage = ({ data }) => {
  const { products, categories } = data

  console.log(data)

  return (
    <Layout>
      <h1 sx={{ textAlign: `center`, pt: 5, pb: 4, my: 0 }}>Products</h1>
     {categories?.edges?.length > 0 && (
       categories.edges.map(({ node }) => {
         const { products, title } = node

         if(!products) {
           return null
         }

         return (
           <section
             sx={{
               py: 5,
               px: 4,
               [mediaQueries.md]: {
                 px: 5,
               },
               [mediaQueries.xl]: {
                 px: 6,
               },
             }}
             key={node.id}
           >
             <Container sx={{ maxWidth: `964px`}}>
               <h2 sx={{ mt: 0, mb: 4 }}>{title}</h2>
               {products && (
                 <ul
                   sx={{
                     listStyle: `none`,
                     ml: 0,
                     mb: 0,
                     p: 0,
                     li: {
                       mb: 0,
                     },
                     display: `grid`,
                     gridGap: 5,
                     [mediaQueries.md]: {
                       display: `grid`,
                       gridTemplateColumns: `repeat(auto-fit, 300px)`,
                       gridGap: 4,
                       justifyContent: `flex-start`,
                     },
                   }}
                 >
                   {products.length > 0 &&
                     products.map(product => {
                       if (!product.isActive) {
                         return null
                       }
                       return (
                         <li key={product.id}>
                           <ProductCard product={product} />
                         </li>
                       )
                     })}
                 </ul>
               )}
             </Container>
           </section>
         )
       })
     )}
    </Layout>
  )
}

export default ProductPage
export const query = graphql`
  query productsQuery {
    products: allSanityProduct(filter: { isActive: { eq: true } }) {
      edges {
        node {
          id
          title
          path
          price
          mainImage {
            alt
            asset {
              _id
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
    categories: allSanityCategory {
      edges {
        node {
          id
          title
          products {
            id
            title
            path
            price
            isActive
            mainImage {
              alt
              asset {
                _id
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`