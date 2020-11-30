export default {
  name: "snipcartCustomFieldCheckbox",
  title: "Checkbox",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
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
