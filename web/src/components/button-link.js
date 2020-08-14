import React from "react"
/** @jsx jsx */
import { jsx, Styled, css } from "theme-ui"
import { Link } from "gatsby"

import theme from "../gatsby-plugin-theme-ui"
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"

const ButtonLink = ({ children, ...rest }) => {
  return (
    <Link
      sx={{
        appearance: "none",
        display: "block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        cursor: `pointer`,
        height: `64px`,
        fontSize: 2,
        fontWeight: "bold",
        px: 3,
        py: 2,
        color: "text",
        bg: "primary",
        minWidth: `128px`,
        border: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontWeight: `bold`,
        maxWidth: `300px`,
        borderRadius: `6px`,
        "~ button, ~ a": {
          mt: `0 !important`,
        },
        "~ p, ~ div": {
          mt: 5,
        },
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
