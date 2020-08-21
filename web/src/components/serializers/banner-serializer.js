import React from 'react'
/** @jsx jsx */
import { jsx, Text, Styled } from "theme-ui"

export const bannerSerializer = {
  marks: {
    bold: props => <span sx={{ fontWeight: "bold" }}>{props.children}</span>
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