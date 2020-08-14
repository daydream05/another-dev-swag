import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { HeroWithImage } from "../components/hero-with-image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroWithImage hero={data?.page?.hero[0]} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query indexPageQuery {
    page: sanityPage(slug: { current: { eq: "home" } }) {
      hero {
        _rawContent
        mainImage {
          alt
          asset {
            _id
          }
        }
      }
    }
  }
`
