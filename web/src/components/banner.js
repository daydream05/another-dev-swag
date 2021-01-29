import React from 'react'
import BaseBlock from '@sanity/block-content-to-react'
import { bannerSerializer } from './serializers/banner-serializer'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { constants } from '../gatsby-plugin-theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

export const Banner = ({ banner, onDismiss }) => {
  return (
    <aside
      sx={{
        bg: "darkAccent",
        color: `white`,
        px: 3,
        height: constants.bannerHeight,
        p: {
          m: 0,
          whiteSpace: `nowrap`,
        },
        [mediaQueries.lg]: {
          px: 4,
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
            height: `100%`,
            overflowX: `scroll`,
            width: `calc(100% - 32px)`,
            [mediaQueries.lg]: {
              overflow: `unset`,
              alignItems: `center`,
              justifyContent: `center`,
              width: `100%`,
            },
          }}
        />
        <div
          sx={{
            position: `absolute`,
            right: 0,
            top: 0,
            height: `100%`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            [mediaQueries.lg]: {
              right: 4,
            },
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