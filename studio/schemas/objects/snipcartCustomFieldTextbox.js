export default {
  name: "snipcartCustomFieldTextbox",
  title: "Textbox",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "URL", value: "url" },
        ],
      },
    },
    {
      name: "defaultValue",
      title: "Default Value",
      type: "string",
    },
    {
      name: "isRequired",
      title: "Is required?",
      type: "boolean",
    },
    {
      name: "placeholder",
      title: "Placeholder",
      type: "string",
    },
  ],
};
