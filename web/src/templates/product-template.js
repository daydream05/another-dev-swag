import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import GatsbyImage from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import Layout from "../components/layout"
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

import { api as sanityConfig } from "../../../studio/sanity.json"
import { SnipCartButton } from '../components/snipcart-button'
import { ProductCard } from '../components/product-card'
import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'
import { SiteContext } from '../context/site-manager'



export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      id
      title
      price
      path
      _rawDescription
      customFields {
        name
        options
        defaultValue
        isRequired
      }
      mainImage {
        alt
        asset {
          url
          _id
          metadata {
            dimensions {
              height
              width
              aspectRatio
            }
          }
        }
      }
    }
    moreProducts: allSanityProduct(filter: {id: { ne: $id }, isActive: { eq: true }}) {
      edges {
        node {
          id
          title
          price
          path
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
`
const ProductTemplate = ({ data }) => {
  const { product, moreProducts  } = data

  return (
    <Layout>
      <section
        sx={{
          [mediaQueries.xl]: {
            px: 5,
            py: 5,
          },
        }}
      >
        <Container
          variant="layout.container.large"
          sx={{
            [mediaQueries.xl]: {
              display: `grid`,
              gridTemplateColumns: `650px 400px`,
              gridTemplateRows: `487.5px auto`,
              gridGap: 5,
              justifyContent: `center`,
            },
          }}
        >
          <ProductGallery mainImage={product?.mainImage} />
          <ProductInfo
            product={product}
          />
        </Container>
      </section>
      <MoreProductsSection products={moreProducts?.edges} />
    </Layout>
  )
}

const ProductGallery = ({ mainImage }) => {
  const imageAssetId = mainImage?.asset?._id
  const fluidImage =
    imageAssetId &&
    getFluidGatsbyImage(imageAssetId, { maxWidth: 478.5 }, sanityConfig)
    

  return (
    <div
      sx={{
        position: `relative`,
        width: `100%`,
        [mediaQueries.xl]: {
          maxWidth: `487.5px`,
          margin: `0 auto`,
          justifySelf: `center`,
        },
      }}
    >
      {fluidImage ? (
        <GatsbyImage fluid={fluidImage} alt={mainImage?.alt} />
      ) : (
        <div sx={{ bg: `tealHighlight` }} />
      )}
    </div>
  )
}

const ProductInfo = ({ product, className }) => {
  const { title, price, _rawDescription } = product

  let customField = {}

  if(product?.customFields?.length > 0) {
    const { customFields } = product

    const initialVal = customFields[0]
    customField = product?.customFields?.reduce(
      (acc, val, idx) => {
        const { options, name, defaultValue, isRequired } = val 
        return {
          ...acc,
          [`data-item-custom${idx + 1}-name`]: val.name,
          ...(options && { [`data-item-custom${idx + 1}-options`]: val.options }),
          ...(defaultValue && { [`data-item-custom${idx + 1}-value`]: val.defaultValue }),
          ...(isRequired && { [`data-item-custom${idx + 1}-isRequired`]: val.isRequired })
        }
      },
      {
        [`data-item-custom1-name`]: customFields[0].name,
        ...(initialVal.options && { [`data-item-custom1-options`]: initialVal.options }),
        ...(initialVal.defaultValue && { [`data-item-custom1-value`]: initialVal.defaultValue }),
        ...(initialVal.isRequired && { [`data-item-custom1-isRequired`]: initialVal.isRequired })
      }
    )
  }

  console.log(customField)

  return (
    <div
      sx={{
        px: 4,
        py: 5,
        [mediaQueries.xl]: {
          pt: 0,
        },
      }}
      className={className}
    >
      <h1
        sx={{
          fontWeight: `500`,
          fontSize: 5,
          mt: 0,
        }}
      >
        {title}
      </h1>
      <div
        sx={{
          fontWeight: `500`,
          fontFamily: `heading`,
          mb: 4,
        }}
      >
        <span>${price}</span>
      </div>
      {_rawDescription && <BlockContent blocks={_rawDescription} />}
      <SnipCartButton
        sx={{
          mt: 5,
          maxWidth: `unset`,
        }}
        data-item-id={product?.id}
        data-item-price={product?.price}
        path={product?.path}
        data-item-image={product?.mainImage?.asset?.url}
        data-item-name={product?.title}
        {...customField}
      >
        Add to cart
      </SnipCartButton>
      <SnipCartButton
        sx={{
          mt: 2,
          maxWidth: `unset`,
        }}
        variant="dark"
        className="snipcart-checkout"
        data-item-id={product?.id}
        data-item-price={product?.price}
        path={product?.path}
        data-item-image={product?.mainImage?.asset?.url}
        data-item-name={product?.title}
        {...customField}
      >
        Buy now
      </SnipCartButton>
    </div>
  )
}

const MoreProductsSection = ({ products }) => {
  return (
    <section
      sx={{
        py: 5,
        px: 4,
        [mediaQueries.xl]: {
          py: 6,
        }
      }}
    >
      <Container
        sx={{
          maxWidth: breakpoints.xl,
        }}
      >
        <h2
          sx={{
            fontWeight: `500`,
            fontSize: 4,
            textAlign: `center`,
            mb: 4,
          }}
        >
          Swag you may also like
        </h2>
        {products?.length > 0 && (
          <ul
            sx={{
              listStyle: `none`,
              margin: 0,
              padding: 0,
              display: `grid`,
              gridGap: 3,
              [mediaQueries.xl]: {
                gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                gridGap: 4,
              },
            }}
          >
            {products.map(({ node }) => {
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

export default ProductTemplate