import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { boxShadows, constants } from "../gatsby-plugin-theme-ui"
import { breakpoints } from "../gatsby-plugin-theme-ui/breakpoints"
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"
import { CartButton } from "./cart-button"


export const Header = ({ siteTitle }) => {
  return (
    <header
      sx={{
        boxShadow: boxShadows.nav,
        py: 3,
        px: 3,
        [mediaQueries.xl]: {
          height: constants.headerHeight,
          px: 5,
          py: 0,
        },
      }}
    >
      <Container
        sx={{
          maxWidth: breakpoints.xxxl,
          height: `100%`,
        }}
      >
        <nav
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            height: `100%`,
            [mediaQueries.xl]: {},
          }}
        >
          <Link
            sx={{
              fontFamily: `heading`,
              fontWeight: `bold`,
              fontSize: 3,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            SwagaScript
          </Link>
          <ul
            sx={{
              display: `flex`,
              listStyle: `none`,
              alignItems: `center`,
              li: {
                ml: 2,
              },
            }}
          >
            <li>
              <Link
                sx={{
                  fontFamily: `heading`,
                  fontWeight: `500`,
                  fontSize: 2,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to="/products/"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                sx={{
                  fontFamily: `heading`,
                  fontWeight: `500`,
                  fontSize: 2,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to="/custom-swag/"
              >
                Custom
              </Link>
            </li>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
