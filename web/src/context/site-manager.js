import React, { useState, useEffect } from 'react'

export const SiteContext = React.createContext({
  isBannerShown: true,
  hideBanner: () => {},
  cartCount: 0,
  setCartCount: () => {},
  addItemToCart: () => {},
})

export const SiteProvider = ({ children }) => {
  const localStorage =
    typeof window !== `undefined` ? window.localStorage : null

  let defaultCartCount
  if(localStorage) {
    defaultCartCount = JSON.parse(localStorage.cartCount || 0)
  } else {
    defaultCartCount = 0
  }

  const [showBanner, setShowBanner] = useState(true)
  const [cartCount, setCartCount] = useState(defaultCartCount)

  const handleHideBanner = () => {
    setShowBanner(false)
  }

  useEffect(() => {
    if (window?.Snipcart) {
      let count = window.Snipcart.store
        .getState()
        .cart.items.items.reduce((acc, item) => item.quantity + acc, 0)

      setCartCount(count)
    }
  }, [])

  const handleCartCount = (count) => {
    localStorage.setItem('cartCount', JSON.stringify(count))
    setCartCount(count)
  }

  const handleAddItemToCart = (increment = 1) =>{
    console.log('hello')
    setCartCount(increment + cartCount)
  }
  

  return (
    <SiteContext.Provider
      value={{
        hideBanner: handleHideBanner,
        isBannerShown: showBanner,
        cartCount: cartCount,
        setCartCount: handleCartCount,
        addItemToCart: handleAddItemToCart,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}