import React, { useEffect, useContext } from 'react'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { SiteContext } from '../context/site-manager'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

export const CartButton = () => {

  const { cartCount } = useContext(SiteContext)
  
  return (
    <button
      className="snipcart-checkout"
      sx={{
        bg: `unset`,
        border: `none`,
        fontFamily: `heading`,
        fontSize: 2,
        fontWeight: `500`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <span
        sx={{
          fontSize: 1,
          bg: `text`,
          color: `background`,
          borderRadius: `100%`,
          width: `24px`,
          height: `24px`,
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          ml: 2,
        }}
      >
        {cartCount || 0}
      </span>
    </button>
  )
}

