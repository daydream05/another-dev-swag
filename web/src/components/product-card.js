import React from 'react'
import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import GatsbyImage from "gatsby-image"

import ButtonLink from "../components/button-link"
import { useQuery } from 'react-query'

export const ProductCard = ({ product }) => {

  const { isLoading, error, data } = useQuery(product.id, () =>
    fetch(`https://app.snipcart.com/api/products/${product.id}`, {
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.GATSBY_SNIPCART_REST_API_KEY}`
        )}`,
        Accept: "application/json",
      },
    }).then(res => res.json())
  )

  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        height: `100%`,
      }}
    >
      {product.mainImage ? (
        <Link to={product.path} sx={{ position: `relative` }}>
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
        <div sx={{ display: `flex`, mb: 3 }}>
          {!error && data?.stock && (
            <span
              sx={{ color: `redAlert`, textAlign: `right`, width: `100%` }}
            >{`${data?.stock} left in stock`}</span>
          )}
        </div>
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
        {product?.preOrder ? `Preorder` : `Shop`} now
      </ButtonLink>
    </div>
  )
}