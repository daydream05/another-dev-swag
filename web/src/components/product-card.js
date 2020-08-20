import React from 'react'
/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import GatsbyImage from "gatsby-image"

import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"

import ButtonLink from "../components/button-link"

export const ProductCard = ({ product }) => {
  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        height: `100%`,
      }}
    >
      {product.mainImage ? (
        <GatsbyImage
          fluid={product.mainImage?.asset?.fluid}
          alt={product.mainImage?.alt}
          sx={{
            mb: 4,
          }}
        />
      ) : (
        <div sx={{ bg: `black`, height: `300px`, width: `100%` }} />
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
          {product.title}
        </h3>
        <div
          sx={{
            fontWeight: `500`,
            fontSize: 3,
            ml: 4,
          }}
        >
          <span>${product.price}</span>
        </div>
      </div>
      <ButtonLink
        variant="white"
        sx={{
          mt: 4,
        }}
        to={product.path}
      >
        Shop now
      </ButtonLink>
    </div>
  )
}