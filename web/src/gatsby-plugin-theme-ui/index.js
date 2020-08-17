import { breakpoints } from "./breakpoints"
import { mediaQueries } from "./media-queries"

export const colors = {
  white: "#fff",
  black: "#0A0A0A",
  darkAccent: "#040E3F",
  tealHighlight: `#78A1BB`,
  yellowHighlight: `#F5BE18`,
  redAlert: `#F46036`,
  offWhite: `#FAFAFA`,
  greenAccent: `#4BDA88`,
  background: `white`,
  text: `#040E3F`,
  primary: `#F5BE18`,
}

export const constants = {
  headerHeight: "96px",
  footerHeight: "450px",
  bannerHeight: `56px`,
}

export const boxShadows = {
  nav: `0px 2px 8px rgba(0, 0, 0, 0.07);`,
}

const baseTheme = {
  lineHeights: {
    body: 1.625,
  },
  fonts: {
    body:
      'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  styles: {
    root: {
      fontFamily: `body`,
      h1: {
        fontFamily: `heading`,
        fontWeight: `bold`,
      },
      h2: {
        fontFamily: `heading`,
      },
      h3: {
        fontFamily: `heading`,
      },
      h4: {
        fontFamily: `heading`,
      },
      h5: {
        fontFamily: `heading`,
      },
    },
    h1: {
      fontSize: 5,
      fontFamily: `heading`,
      [mediaQueries.lg]: {
        fontSize: 6,
      },
    },
    h2: {
      fontSize: 4,
      mt: 4,
      fontFamily: `heading`,
      [mediaQueries.lg]: {
        mt: 5,
        fontSize: 5,
      },
    },
    h3: {
      fontSize: 3,
      fontFamily: `heading`,
      [mediaQueries.lg]: {
        fontSize: 4,
      },
    },
    h4: {
      fontSize: 3,
      fontFamily: `heading`,
      [mediaQueries.lg]: {
        fontSize: 4,
      },
    },
    h5: {
      fontSize: 3,
      fonntFamily: `heading`,
      [mediaQueries.lg]: {
        fontSize: 4,
      },
    },
  },
  sizes: {
    container: breakpoints.xxxl,
  },
  layout: {
    container: {
      large: {
        maxWidth: breakpoints.xxxl,
      },
      text: {
        maxWidth: "900px",
        margin: "0 auto",
      },
    },
  },
  colors,
  breakpoints,
  constants,
}

export default baseTheme
