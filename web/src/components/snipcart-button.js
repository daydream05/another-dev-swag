import React from 'react'

/** @jsx jsx */
import { jsx } from 'theme-ui'

export const SnipCartButton = ({ className, variant, children, ...rest }) => {
  return (
    <button
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
        fontWeight: `500`,
        fontFamily: `heading`,
        maxWidth: `300px`,
        borderRadius: `6px`,
        width: `100%`,
        variant: variant ? `buttons.${variant}` : null
      }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
}