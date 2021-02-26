import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import { SectionSelector } from "../components/section-selector"

const ProductPage = ({ data }) => {
  const { page  } = data

  const { sections }  = page

  return (
    <Layout>
     {sections?.length > 0 && (
       sections.map((section) => {
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
               ... on SanitySectionMailingList {
                 _type
                 _key
                 heading {
                   _rawTitle
                   _rawSubtitle
                 }
               }
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
                     preOrder
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