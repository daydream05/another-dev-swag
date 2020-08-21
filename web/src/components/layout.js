/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer } from "./footer"
import { Banner } from "./banner"
import { SiteContext } from "../context/site-manager"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      siteSettings: sanitySiteSettings {
        banner {
          _rawContent
        }
      }
    }
  `)

  const { isBannerShown, hideBanner } = useContext(SiteContext)

  console.log(isBannerShown, hideBanner)

  return (
    <>
      {isBannerShown ? (
        <Banner banner={data?.siteSettings?.banner} onDismiss={hideBanner} />
      ) : null}
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
