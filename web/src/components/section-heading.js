import React from 'react'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import BlockContent from "@sanity/block-content-to-react"
import { breakpoints } from "../gatsby-plugin-theme-ui/breakpoints"

export const SectionHeading = ({ heading, className }) => {

  return (
    <Container
      sx={{
        maxWidth: breakpoints.md,
      }}
      className={className}
    >
      {heading?._rawTitle && (
        <BlockContent
          blocks={heading?._rawTitle}
          serializers={serializers}
          renderContainerOnSingleChild={true}
        />
      )}
      {heading?._rawSubtitle && (
        <BlockContent
          blocks={heading?._rawSubtitle}
          renderContainerOnSingleChild={true}
          sx={{
            textAlign: `center`,
          }}
        />
      )}
    </Container>
  )
}

const serializers = {
  container: props => <h2 sx={{ textAlign: `center` }}>{props.children}</h2>,
  marks: {
    strong: props => <span sx={{ color: "primary" }}>{props.children}</span>,
  },
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <>{props.children}</>
      }
    },
  },
}