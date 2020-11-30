export default {
  name: "snipcartCustomFieldTextarea",
  title: "Textarea",
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
