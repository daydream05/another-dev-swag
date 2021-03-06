/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { SiteProvider } from "./src/context/site-manager"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export const wrapRootElement = ({ element }) => {
  return (
    <SiteProvider>
      <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
    </SiteProvider>
  )
}