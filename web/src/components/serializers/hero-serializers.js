import React from "react"
import { IoMdQuote } from "react-icons/io"

/** @jsx jsx */
import { jsx, Text, Styled } from "theme-ui"
import ButtonLink from "../button-link"
import { mediaQueries } from "../../gatsby-plugin-theme-ui/media-queries"


export const heroSerializers = {
  marks: {
    bold: props => {
      return <span sx={{ fontWeight: "600" }}>{props.children}</span>
    },
    leftAlign: props => (
      <span sx={{ textAlign: "left", display: "block" }}>{props.children}</span>
    ),
    rightAlign: props => (
      <span sx={{ textAlign: "right", display: "block" }}>
        {props.children}
      </span>
    ),
    centerAlign: props => (
      <span sx={{ textAlign: "center", display: "block" }}>
        {props.children}
      </span>
    ),
  },
  list: props => <ul>{props.children}</ul>,
  types: {
    block(props) {
      const { node } = props

      switch (props.node.style) {
        case "h1": {
          return (
            <Styled.h1
              sx={{
                color: "inherit",
                mt: 0,
                mb: 3,
                [mediaQueries.lg]: {
                  fontSize: 6,
                },
              }}
            >
              {props.children}
            </Styled.h1>
          )
        }
        case "h2": {
          return (
            <Styled.h2 sx={{ color: "inherit" }}>{props.children}</Styled.h2>
          )
        }
        case "h3": {
          return (
            <Styled.h3 sx={{ color: "inherit" }}>{props.children}</Styled.h3>
          )
        }
        case "blockquote": {
          return (
            <blockquote
              sx={{
                position: `relative`,
                my: 6,
                mx: 3,
              }}
            >
              <IoMdQuote
                sx={{
                  variant: `body.large`,
                  opacity: 0.15,
                  fontSize: 7,
                  position: `absolute`,
                  top: -3,
                  left: -3,
                  [mediaQueries.lg]: {
                    fontSize: `128px`,
                    top: -4,
                    left: -5,
                  },
                }}
              />
              <Text
                variant="body.large"
                as="p"
                sx={{
                  display: `inline`,
                  "&&&": {
                    color: `text`,
                  },
                }}
              >
                {props.children}
              </Text>
            </blockquote>
          )
        }
        default:
          return (
            <Styled.p
              sx={{
                mt: 0,
                mb: 3,
                "+ section": {
                  mt: 6,
                },
              }}
            >
              {props.children}
            </Styled.p>
          )
      }
    },
    figure(props) {
      return (
        <div />
      )
    },
    button(props) {
      const { node } = props

      return (
        <ButtonLink
          variant={node?.color}
          shape={node?.variant}
          sx={{
            mt: 4,
            mb: 2,
            [mediaQueries.lg]: {
              mr: 2,
            },
          }}
        >
          {node?.label}
        </ButtonLink>
      )
    },
  },
}
