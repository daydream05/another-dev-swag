import React, { useEffect, useContext } from 'react'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { SiteContext } from '../context/site-manager'

export const CartButton = () => {

  const { cartCount, setCartCount, add } = useContext(SiteContext)

  useEffect(() => {
    if (window?.Snipcart) {

      let count = window.Snipcart.store
        .getState()
        .cart.items.items.reduce((acc, item) => item.quantity + acc, 0)

      setCartCount(count)

      const itemUpdated = window.Snipcart.events.on("item.updated", () => {

        let count = window.Snipcart.store
          .getState()
          .cart.items.items.reduce((acc, item) => item.quantity + acc, 0)

        setCartCount(count)
      })

      const itemRemoved = window.Snipcart.events.on("item.removed", () => {

        let count = window.Snipcart.store
          .getState()
          .cart.items.items.reduce((acc, item) => item.quantity + acc, 0)

        setCartCount(count)
      })

      return () => {
        // unsubscribe
        itemUpdated()
        itemRemoved()
      }
    }
  }, [])

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
      <span>Cart</span>
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
        {cartCount}
      </span>
    </button>
  )
}

