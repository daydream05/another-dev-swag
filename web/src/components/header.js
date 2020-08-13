import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { boxShadows, constants } from "../gatsby-plugin-theme-ui"
import { breakpoints } from "../gatsby-plugin-theme-ui/breakpoints"
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"


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
        }
      }}
    >
      <Container
        sx={{
          maxWidth: breakpoints.xxxl,
          height: `100%`,
        }}
      >
        <div
          sx={{
            display: `flex`,
            alignItems: `center`,
            height: `100%`,
            [mediaQueries.xl]: {
            }
          }}
        >
          <Link
            sx={{
              fontFamily: `Montserrat`,
              fontWeight: `bold`,
              fontSize: 3,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >GrabASwag</Link>
        </div>
      </Container>
    </header>
  )
}
