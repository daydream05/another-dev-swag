export default {
  name: "customProductField",
  title: "Custom Product Field",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'options',
      title: 'Options',
      type: 'string',
      description: 'e.g. Small|Medium|Large',
    },
    {
      name: 'defaultValue',
      title: 'Default Value',
      type: "string",
    },
    {
      name: 'isRequired',
      title: 'Is required?',
      type: 'boolean',
    }
  ],
};