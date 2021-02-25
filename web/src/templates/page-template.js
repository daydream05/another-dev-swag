import React from "react"
import { graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "../components/layout"
import { SectionSelector } from "../components/section-selector"

const PageTemplate = ({ data }) => {
  const { page } = data

  const { sections } = page
  const ogImages = page?.seo?.ogImages?.map(img => {
    return {
      url: img.asset.url,
      alt: img.alt,
    }
  })

  return (
    <Layout>
      <GatsbySeo
        title={page?.seo?.metaTitle}
        description={page?.seo?.metaDescription}
        openGraph={{
          title: page?.seo?.metaTitle,
          description: page?.seo?.metaDescription,
          images: ogImages,
        }}
      />
      {sections?.length > 0 &&
        sections.map(section => {
          return <SectionSelector section={section} key={section._key} />
        })}
    </Layout>
  )
}

export default PageTemplate
export const query = graphql`
  query pageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      hero {
        _rawContent(resolveReferences: { maxDepth: 5 })
        mainImage {
          alt
          asset {
            _id
          }
        }
      }
      seo {
        metaTitle
        metaDescription
        ogImages {
          asset {
            url
          }
          alt
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
