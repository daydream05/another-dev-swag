import React from 'react'
import Img from 'gatsby-image'
import BaseBlockContent from "@sanity/block-content-to-react"
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import { api as sanityConfig } from "../../../studio/sanity.json"
import { constants } from '../gatsby-plugin-theme-ui'

import { heroSerializers } from './serializers/hero-serializers'
import { mediaQueries } from "../gatsby-plugin-theme-ui/media-queries"

export const HeroWithImage = ({ hero, height }) => {
  if(!hero) {
    return null
  }

  const { mainImage } = hero

  const imageAssetId = mainImage?.asset?._id || mainImage?.asset?._ref

  const fluidImage = mainImage && getFluidGatsbyImage(imageAssetId, { maxWidth: 3000 }, sanityConfig)
  return (
    <section>
      <div
        sx={{
          position: `relative`,
          width: `100%`,
          height: height || `calc(100vh - ${constants.headerHeight})`,
        }}
      >
        {fluidImage ? (
          <Img
            fluid={fluidImage}
            alt={mainImage?.alt}
            sx={{
              position: `absolute !important`,
              width: `100%`,
              height: `100%`,
              top: 0,
              left: 0,
            }}
          />
        ) : (
          <div sx={{ bg: `tealHighlight` }} />
        )}
        <div
          sx={{
            position: `absolute`,
            width: `100%`,
            bottom: 6,
            px: 4,
            [mediaQueries.xl]: {
              px: 6,
              bottom: 6,
              pb: 5,
            },
            [mediaQueries.xxl]: {
              px: 7,
            }
          }}
        >
          <Container
            sx={{
              ml: 0,
              maxWidth: `450px`,
            }}
          >
            <BaseBlockContent
              blocks={hero?._rawContent}
              serializers={heroSerializers}
            />
          </Container>
        </div>
      </div>
    </section>
  )
}