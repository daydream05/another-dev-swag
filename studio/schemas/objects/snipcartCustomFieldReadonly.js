export default {
  name: "snipcartCustomFieldReadonly",
  title: "Readonly",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "defaultValue",
      title: "Default Value",
      type: "text",
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
