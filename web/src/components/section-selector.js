import React from "react"
import { SectionMailingList } from "./section-mailing-list"
import { SectionProductList } from "./section-product-list"

export const SectionSelector = ({ section }) => {
  switch(section._type) {
    case 'sectionProductList': {
      return <SectionProductList section={section} />
    }
    case 'sectionMailingList': {
      return <SectionMailingList section={section} />
    }
    default:
      return null
  }
}