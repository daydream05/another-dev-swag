import React from 'react'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import GatsbyImage from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import { api as sanityConfig } from "../../../studio/sanity.json"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


export const ProductGallery = ({ images }) => {

  if (images?.length > 0) {
    return (
      <Carousel
        showIndicators={false}
        showStatus={false}
        swipeable={true}
        emulateTouch
        infiniteLoop
        renderArrowPrev={clickHandler => (
          <PreviousButton onClick={clickHandler} />
        )}
        renderArrowNext={clickHandler => (
          <NextButton onClick={clickHandler} />
        )}
        renderThumbs={(children) => children.map((child, id) => {
          return (
            <div key={id}>{child}</div>
          )
        })}
        sx={{
          backgroundColor: `unset`,
          '.carousel-slider': {
            display: `flex`,
            alignItems: `center`,
          },
          '.slide': {
            background: `unset !important`,
          }
        }}
      >
        {images.map((image, id) => {
          const imageAssetId = image?.asset?._id
          const fluidImage =
            imageAssetId &&
            getFluidGatsbyImage(imageAssetId, { maxWidth: 2700 }, sanityConfig)

          return (
            <div index={id} key={image._key}>
              <GatsbyImage fluid={fluidImage} alt={image?.alt} sx={{ backgroundColor: `unset` }} fadeIn={false} />
            </div>
          )
        })}
      </Carousel>
    )
  } else {
    return null
  }
}

const PreviousButton = ({ onClick }) => {
  return (
    <div
      sx={{
        position: `absolute`,
        left: 3,
        zIndex: 1,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <button
        onClick={onClick}
        sx={{
          cursor: `pointer`,
          borderRadius: `100%`,
          border: `1px solid`,
          background: `white`,
          height: 48,
          width: 48,
          variant: `buttons.white`,
          fontSize: 4,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
        aria-label="Go to previous photo"
      >
        <IoIosArrowBack />
      </button>
    </div>
  )
}

const NextButton = ({ onClick }) => {
  return (
    <div
      sx={{
        position: `absolute`,
        right: 3,
        zIndex: 1,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <button
        onClick={onClick}
        sx={{
          cursor: `pointer`,
          borderRadius: `100%`,
          border: `1px solid`,
          background: `white`,
          height: 48,
          width: 48,
          variant: `buttons.white`,
          fontSize: 4,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
        aria-label="Go to next photo"
      >
        <IoIosArrowForward />
      </button>
    </div>
  )
}