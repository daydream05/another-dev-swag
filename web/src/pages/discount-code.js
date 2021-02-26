import React from "react"
import { graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "../components/layout"
/** @jsx jsx */
import {Container, jsx,  Styled } from "theme-ui"
import { constants } from "../gatsby-plugin-theme-ui"

const DiscountCode = ({ data }) => {
  return (
    <Layout>
      <div
        sx={{
          py: 4,
        }}
      >
        <Container
          px={4}
          sx={{
            display: `flex`,
            alignItems: `center`,
            flexDirection: `column`,
          }}
        >
          <Styled.h1 sx={{ textAlign: `center`, mb: 0 }}>
            Here's your discount code:
          </Styled.h1>
          <Styled.p
            sx={{ textAlign: `center`, fontSize: 4, bg: `offWhite`, py: 3, px: 3 }}
          >
            <strong>SWAGDROPS10</strong>
          </Styled.p>
        </Container>
      </div>
    </Layout>
  )
}

export default DiscountCode