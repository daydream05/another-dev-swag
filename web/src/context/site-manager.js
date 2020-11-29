import React, { useState, useEffect } from 'react'

export const SiteContext = React.createContext({
  isBannerShown: true,
  hideBanner: () => {},
  cartCount: 0,
  setCartCount: () => {},
})

export const SiteProvider = ({ children }) => {
  const defaultCartCount = window?.localStorage?.getItem(`cartCount`) || 0

  const [showBanner, setShowBanner] = useState(true)
  const [cartCount, setCartCount] = useState(defaultCartCount)

  const handleHideBanner = () => {
    setShowBanner(false)
  }

  useEffect(() => {
    if (window?.Snipcart) {
      const itemUpdated = window.Snipcart.events.on(
        "item.adding",
        () => {
          let count = window.Snipcart.store
            .getState()
            .cart.items.items.reduce(
              (acc, item) => item.quantity + acc,
              0
            )

          setCartCount(count + 1)
        }
      )

      const itemRemoved = window.Snipcart.events.on(
        "item.removed",
        () => {
          let count = window.Snipcart.store
            .getState()
            .cart.items.items.reduce(
              (acc, item) => item.quantity + acc,
              0
            )

          setCartCount(count)
        }
      )

      
      return () => {
        // unsubscribe
        itemUpdated()
        itemRemoved()
      }
    }
  }, [])

  useEffect(() => {
    window?.localStorage?.setItem(`cartCount`, cartCount)
  }, [cartCount])

  const handleCartCount = (count) => {
    window?.localStorage?.setItem('cartCount', JSON.stringify(count))
    setCartCount(count)
  }
  
  return (
    <SiteContext.Provider
      value={{
        hideBanner: handleHideBanner,
        isBannerShown: showBanner,
        cartCount: cartCount,
        setCartCount: handleCartCount,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}