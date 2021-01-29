import React from 'react'
import { Link } from 'gatsby'
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
        <Link to={product.path}>
          <GatsbyImage
            fluid={product.mainImage?.asset?.fluid}
            alt={product.mainImage?.alt}
            sx={{
              mb: 4,
            }}
          />
        </Link>
      ) : (
        <div sx={{ bg: `black`, height: `300px`, width: `100%` }} />
      )}
      <div
        sx={{
          flex: 1,
        }}
      >
        <Link
          to={product.path}
          sx={{
            textDecoration: `none`,
            color: `inherit`,
            display: `flex`,
            justifyContent: `space-between`,
            flex: 1,
            "&:hover": {
              textDecoration: `underline`,
            },
          }}
        >
          <h5
            sx={{
              fontWeight: `500`,
              fontSize: 3,
              m: 0,
            }}
          >
            {product.title}
          </h5>
          <span
            sx={{
              fontWeight: `500`,
              fontSize: 3,
              ml: 4,
            }}
          >
            ${product.price}
          </span>
        </Link>
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