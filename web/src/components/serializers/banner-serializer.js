import { Link } from 'gatsby'
import React from 'react'
/** @jsx jsx */
import { jsx, Text, Styled } from "theme-ui"

export const bannerSerializer = {
  marks: {
    bold: props => <span sx={{ fontWeight: "bold" }}>{props.children}</span>,
    internalLink: ({ mark, children }) => {
      return (
        <Link to={`/${mark.internal?.slug?.current}/`} sx={{ color: `inherit` }}>
          {children}
        </Link>
      )
    }
  },
  types: {
    block(props) {
      switch(props.node.style) {
        default:
          return (
            <p
              sx={{
                fontSize: 2,
                fontFamily: `body`,
              }}
            >{props.children}</p>
          )
      }
    }
  }
}