export function getPagePath(type, slug) {
  let url
  const pageSlug = slug?.current || slug

  if (type === `post`) {
    url = `/blog/${pageSlug}`
  } else if (type === `page`) {
    if (pageSlug === `home`) {
      url = `/`
    } else {
      url = `/${pageSlug}/`
    }
  } else if (type === `product`) {
    url = `/product/${pageSlug}/`
  } else {
    return url
  }

  return url
}
