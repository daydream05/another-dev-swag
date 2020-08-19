import React from "react"
import { Link, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { HeroWithImage } from "../components/hero-with-image"
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"
import GatsbyImage from "gatsby-image"
import ButtonLink from "../components/button-link"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroWithImage hero={data?.page?.hero[0]} />
      <MoreProductsSection products={data.products?.edges} />
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
        }
      }}
    >
      <Container
        variant="layout.container.medium"
      >
        <h2
          sx={{
            fontWeight: `500`,
            textAlign: `center`,
            mb: 4,
          }}
        >More products</h2>
        {products && (
          <ul
            sx={{
              listStyle: `none`,
              ml: 0,
              mb: 0,
              li: {
                mb: 0,
              },
              [mediaQueries.xl]: {
                display: `grid`,
                gridTemplateColumns: `repeat(3, 300px)`,
                gridGap: 4,
                justifyContent: `center`,
              }
            }}
          >
            {products.length > 0 && products.map(({ node }) => {
              return (
                <li key={node.id}>
                  <div
                    sx={{
                      display: `flex`,
                      flexDirection: `column`,
                      height: `100%`,
                    }}
                  >
                    {node.mainImage ? (
                      <GatsbyImage
                        fluid={node.mainImage?.asset?.fluid}
                        alt={node.mainImage?.alt}
                        sx={{
                          mb: 4,
                        }}
                      />
                    ) : (
                      <div
                        sx={{ bg: `black`, height: `300px`, width: `100%` }}
                      />
                    )}
                    <div
                      sx={{
                        display: `flex`,
                        justifyContent: `space-between`,
                        flex: 1,
                      }}
                    >
                      <h3
                        sx={{
                          fontWeight: `500`,
                          fontSize: 3,
                          m: 0,
                        }}
                      >
                        {node.title}
                      </h3>
                      <div
                        sx={{
                          fontWeight: `500`,
                          fontSize: 3,
                          ml: 4,
                        }}
                      >
                        <span>${node.price}</span>
                      </div>
                    </div>
                    <ButtonLink
                      variant="white"
                      sx={{
                        mt: 4,
                      }}
                      to={node.path}
                    >Shop now</ButtonLink>
                  </div>
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
        _rawContent
        mainImage {
          alt
          asset {
            _id
          }
        }
      }
    }
    products: allSanityProduct(filter: {isActive: {eq: true}}) {
      edges {
        node {
          id
          title
          path
          price
          mainImage {
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
`
