export default {
  type: "object",
  name: "seo",
  title: "SEO",
  fieldsets: [{ name: "openGraph", title: "Open Graph" }],
  fields: [
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
    },
    {
      title: "Meta Description",
      name: "metaDescription",
      type: "text",
    },
    {
      title: "Open Graph Images",
      name: "ogImages",
      type: "array",
      of: [{ type: "figure" }],
    },
  ],
};
