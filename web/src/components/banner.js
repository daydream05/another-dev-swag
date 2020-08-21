import React from 'react'
import BaseBlock from '@sanity/block-content-to-react'
import { bannerSerializer } from './serializers/banner-serializer'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { constants } from '../gatsby-plugin-theme-ui'

export const Banner = ({ banner, onDismiss }) => {
  return (
    <aside
      sx={{
        bg: "darkAccent",
        color: `white`,
        px: 4,
        height: constants.bannerHeight,
        p: {
          m: 0,
        },
      }}
    >
      <Container
        sx={{
          height: `100%`,
          position: `relative`,
        }}
      >
        <BaseBlock
          blocks={banner?._rawContent}
          serializers={bannerSerializer}
          renderContainerOnSingleChild
          sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            height: `100%`,
          }}
        />
        <div
          sx={{
            position: `absolute`,
            right: 4,
            top: 0,
            height: `100%`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <button
            sx={{
              border: `none`,
              bg: `unset`,
              color: `white`,
              fontSize: 5,
            }}
            onClick={onDismiss}
          >
            ×
          </button>
        </div>
      </Container>
    </aside>
  )
}