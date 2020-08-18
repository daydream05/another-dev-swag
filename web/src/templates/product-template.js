import React from 'react'
import { graphql } from 'gatsby'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import GatsbyImage from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import Layout from "../components/layout"
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

import { api as sanityConfig } from "../../../studio/sanity.json"



export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      title
      price
      path
      _rawDescription
      mainImage {
        alt
        asset {
          _id
        }
      }
    }
  }
`
const ProductTemplate = ({ data }) => {
  const { product } = data


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
              gridTemplateColumns: `800px 400px`,
              gridGap: 3,
              justifyContent: `center`
            },
          }}
        >
          <ProductGallery mainImage={product?.mainImage} />
          <ProductInfo
            title={product?.title}
            price={product?.price}
            description={product?._rawDescription}
          />
        </Container>
      </section>
    </Layout>
  )
}

const ProductGallery = ({ mainImage }) => {
  const imageAssetId = mainImage?.asset?._id
  const fluidImage =
    imageAssetId &&
    getFluidGatsbyImage(imageAssetId, { maxWidth: 3000 }, sanityConfig)

  return (
    <div>
      {fluidImage ? (
        <GatsbyImage
          fluid={fluidImage}
          alt={mainImage?.alt}
        />
      ) : (
        <div sx={{ bg: `tealHighlight` }} />
      )}
    </div>
  )
}

const ProductInfo = ({ title, price, description }) => {
  return (
    <div>
      <h1
        sx={{
          fontWeight: `500`,
          fontSize: 5,
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
      {description && <BlockContent blocks={description} />}
    </div>
  )
}

export default ProductTemplate