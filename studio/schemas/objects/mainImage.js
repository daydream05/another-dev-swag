export default {
  name: "mainImage",
  title: "Main image",
  type: "image",
  options: {
    hotspot: false,
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
