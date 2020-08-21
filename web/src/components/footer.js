import React from 'react'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

export const Footer = () => {
  return (
    <footer
      sx={{
        bg: `darkAccent`,
        color: `white`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
      }}
    >
      <Container
        sx={{
          px: 4,
          py: 5,
          display: `flex`,
          alignItems: `center`,
          [mediaQueries.xl]: {
            px: 6,
          },
        }}
      >
        <div
          sx={{
            mb: 4,
            [mediaQueries.xl]: {
              mb: 0,
              flex: 1,
            },
          }}
        >
          <Link
            to="/"
            sx={{
              color: `inherit`,
              fontSize: 3,
              fontWeight: `bold`,
              textDecoration: `none`,
            }}
          >
            AnotherDevSwag
          </Link>
        </div>
        <div
          sx={{
            textAlign: `center`,
            [mediaQueries.xl]: {
              display: `flex`,
              alignItems: `center`,
            },
          }}
        >
          <p
            sx={{
              fontWeight: `500`,
              my: 0,
              [mediaQueries.xl]: {
                fontSize: 3,
              },
            }}
          >
            Need help?
          </p>
          <p
            sx={{
              fontWeight: `500`,
              my: 0,
              [mediaQueries.xl]: {
                ml: 4,
              },
            }}
          >
            <a
              href="mailto:support@underscorelabs.co"
              sx={{ color: `inherit` }}
            >
              support@underscorelabs.co
            </a>
          </p>
        </div>
      </Container>
      <div
        sx={{
          px: 4,
          py: 1,
          bg: `#353E6D`,
        }}
      >
        <Container
          sx={{
            display: `flex`,
            justifyContent: `center`,
          }}
        >
          <p
            sx={{
              color: `inherit`,
              fontSize: 1,
            }}
          >
            Copyright© {new Date().getFullYear()} AnotherDevSwag
          </p>
        </Container>
      </div>
    </footer>
  )
}