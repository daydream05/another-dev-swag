export const assemblePageUrl = ({ document, options }) => {
  const { slug } = document;
  const { previewURL } = options;

  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL });
    return "";
  }

  if (document._type === "post") {
    return `${previewURL}/blog/${slug.current}`;
  } else if (document._type === "product") {
    return `${previewURL}/product/${slug.current}`;
  } else if (document._type === "page") {
    if (document.slug.current === `home`) {
      return `${previewURL}/`;
    }
    return `${previewURL}/${slug.current}`;
  } else {
    return `${previewURL}/${slug.current}`;
  }
};
