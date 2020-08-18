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
  button: `0px 7px 10px rgba(0, 0, 0, 0.03)`,
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
      lineHeight: 1,
      p: {
        lineHeight: 1.65,
      },
      h1: {
        fontFamily: `heading`,
        fontWeight: `bold`,
        fontSize: [5, 5, 5, 6],
      },
      h2: {
        fontFamily: `heading`,
        fontSize: [4, 4, 4, 5],
      },
      h3: {
        fontFamily: `heading`,
        fontSize: [3, 3, 3, 4],
      },
      h4: {
        fontFamily: `heading`,
        fontSize: [3, 3, 3, 4],
      },
      h5: {
        fontFamily: `heading`,
        fontSize: [3, 3, 3, 4],
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
  buttons: {
    white: {
      color: "text",
      bg: "background",
      border: `1px solid #E2E2E2`,
      boxShadow: boxShadows.button,
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
      medium: {
        maxWidth: breakpoints.xxl,
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
