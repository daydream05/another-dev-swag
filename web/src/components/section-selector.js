import React from "react"
import { SectionProductList } from "./section-product-list"

export const SectionSelector = ({ section }) => {
  switch(section._type) {
    case 'sectionProductList': {
      return <SectionProductList section={section} />
    }
    default:
      return null
  }
}