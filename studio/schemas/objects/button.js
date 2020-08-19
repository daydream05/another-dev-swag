export default {
  name: "button",
  title: "Button",
  type: "object",
  description: "A button that acts a link",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "internalLink",
      title: "Internal Link",
      type: "reference",
      to: [{ type: "page" }, { type: "post" }, { type: "product" }],
    },
    {
      name: "color",
      title: "Choose a color",
      type: "string",
      options: {
        list: [
          { title: "primary", value: "primary" },
          { title: "secondary", value: "secondary" },
          { title: "danger", value: "danger" },
          { title: "black", value: "black" },
          { title: "white", value: "white" },
        ],
      },
    },
    {
      name: "variant",
      title: "Choose a variant",
      type: "string",
      options: {
        list: [
          { title: "default", value: "default" },
          { title: "pill", value: "pill" },
          { title: "outline", value: "outline" },
        ],
      },
    },
    {
      name: "url",
      title: "Url",
      type: "string",
      description: "Only use if you're using an external url.",
    },
  ],
};
