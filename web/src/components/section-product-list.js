import React from 'react'
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import { ProductCard } from "../components/product-card"
import { SectionHeading } from './section-heading'

import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"

export const SectionProductList = ({ section }) => {
  const { heading, products } = section

  return (
    <section
      sx={{
        py: 5,
        px: 4,
        [mediaQueries.md]: {
          px: 5,
        },
        [mediaQueries.xl]: {
          px: 6,
        },
      }}
    >
      <Container sx={{ maxWidth: `964px` }}>
        <SectionHeading heading={heading} />
        {products && (
          <ul
            sx={{
              listStyle: `none`,
              ml: 0,
              mb: 0,
              mt: 5,
              p: 0,
              li: {
                mb: 0,
              },
              display: `grid`,
              gridGap: 5,
              [mediaQueries.md]: {
                display: `grid`,
                gridTemplateColumns: `repeat(auto-fit, 300px)`,
                gridGap: 4,
                justifyContent: `flex-start`,
              },
            }}
          >
            {products.length > 0 &&
              products.map(product => {
                if (!product.isActive) {
                  return null
                }
                return (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                )
              })}
          </ul>
        )}
      </Container>
    </section>
  )
}