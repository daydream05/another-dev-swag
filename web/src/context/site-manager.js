import React, { useState, useEffect } from 'react'

export const SiteContext = React.createContext({
  isBannerShown: true,
  hideBanner: () => {},
  cartCount: 0,
  setCartCount: () => {},
})

export const SiteProvider = ({ children }) => {
  let defaultCartCount = 0

  if(typeof window !== `undefined` ) {
    defaultCartCount = window?.localStorage?.getItem(`cartCount`)
  }

  const [showBanner, setShowBanner] = useState(true)
  const [cartCount, setCartCount] = useState(defaultCartCount || 0)

  const handleHideBanner = () => {
    setShowBanner(false)
  }

  useEffect(() => {
    let defaultCount = 0
    defaultCount = window?.localStorage?.getItem(`cartCount`)
    setCartCount(defaultCount)
  }, [])

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

  console.log(cartCount)
  
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