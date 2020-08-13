export default {
  title: "Hero - With Image",
  name: "heroWithImage",
  type: "object",
  description:
    "Hero section with an image, content. Please add an h1 tag at all times.",
  fields: [
    {
      name: "mainImage",
      title: "Main Image",
      type: "mainImage",
    },
    {
      name: "content",
      title: "Block",
      type: "blockHero",
      description: "Please add an h1 tag at all times",
    },
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Large Text With Image Strip", value: "a" },
          { title: "Background Image", value: "b" },
          { title: "Gradient", value: "c" },
        ],
      },
    },
  ],
};
