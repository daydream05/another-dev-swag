import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import { SectionSelector } from "../components/section-selector"

const ProductPage = ({ data }) => {
  const { page  } = data
  console.log(data)

  const { sections }  = page

  return (
    <Layout>
      <h1 sx={{ textAlign: `center`, pt: 5, pb: 4, my: 0 }}>Products</h1>
     {sections?.length > 0 && (
       sections.map((section) => {
         console.log(section)
         return (
           <SectionSelector section={section} key={section._key} />
         )
       })
     )}
    </Layout>
  )
}

export default ProductPage
export const query = graphql`
  query productPageQuery {
      page: sanityPage(slug: { current: { eq: "products" } }) {
        hero {
          _rawContent(resolveReferences: { maxDepth: 5 })
          mainImage {
            alt
            asset {
              _id
            }
          }
        }
        sections {
          ... on SanitySectionProductList {
            _type
            _key
            heading {
              _rawTitle
              _rawSubtitle
            }
            products {
              ... on SanityProduct {
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
    }
  `