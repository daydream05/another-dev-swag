import React from "react"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import ConvertKitForm from 'convertkit-react'


import { SectionHeading } from "./section-heading"

import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"
import { breakpoints } from "../gatsby-plugin-theme-ui/breakpoints"

const inputStyle = {
  height: `56px`,
  borderColor: `buttonBorder`,
  borderRadius: `4px`,
  borderStyle: `solid`,
  borderWidth: `1px`,
  width: `100%`,
  fontSize: 1,
  px: 3,
  my: 2,
}

export const SectionMailingList = ({ section }) => {
  const { heading } = section

  return (
    <section
      sx={{
        py: 5,
        px: 4,
        bg: `darkAccent`,
        color: `white`,
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
        <ConvertKitForm
          formId={2071704}
          sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            input: {
              ...inputStyle,
            },
            button: {
              ...inputStyle,
              cursor: `pointer`,
              bg: `primary`,
              border: `none`,
            },
            [mediaQueries.md]: {
              display: `grid`,
              gridTemplateColumns: `1fr 2fr 1fr`,
              gridGap: 3,
              maxWidth: breakpoints.md,
              mx: `auto`,
            }
          }}
        />
      </Container>
    </section>
  )
}
