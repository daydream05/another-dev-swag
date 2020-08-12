import { breakpoints } from "./breakpoints"

const mediaQueries = {}
for (const breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
}

export { mediaQueries }
