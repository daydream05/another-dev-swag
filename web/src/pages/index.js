import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import { HeroWithImage } from "../components/hero-with-image"
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"

import { ProductCard } from '../components/product-card'
import { GatsbySeo } from "gatsby-plugin-next-seo"

import { SectionSelector } from "../components/section-selector"


const IndexPage = ({ data }) => {

  const { page } = data
  const { sections } = page

  const ogImages = page?.seo?.ogImages?.map((img) => {
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
      <HeroWithImage hero={data?.page?.hero[0]} />
      {sections?.length > 0 &&
        sections.map(section => {
          return <SectionSelector section={section} key={section._key} />
        })}
    </Layout>
  )
}

const MoreProductsSection = ({ products }) => {
  return (
    <section
      sx={{
        py: 5,
        px: 4,
        [mediaQueries.xl]: {
          px: 6,
        },
      }}
    >
      <Container variant="layout.container.medium">
        <h2
          sx={{
            fontWeight: `500`,
            textAlign: `center`,
            mb: 4,
          }}
        >
          More products
        </h2>
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
              [mediaQueries.xl]: {
                display: `grid`,
                gridTemplateColumns: `repeat(3, 300px)`,
                gridGap: 4,
                justifyContent: `center`,
              },
            }}
          >
            {products.length > 0 &&
              products.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <ProductCard product={node} />
                  </li>
                )
              })}
          </ul>
        )}
      </Container>
    </section>
  )
}


export default IndexPage

export const query = graphql`
  query indexPageQuery {
    page: sanityPage(slug: { current: { eq: "home" } }) {
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
