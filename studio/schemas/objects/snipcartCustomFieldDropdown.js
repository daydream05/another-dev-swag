export default {
  name: "snipcartCustomFieldDropdown",
  title: "Dropdown",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "options",
      title: "Options",
      type: "array",
      of: [
        { type: 'dropdownOption' }
      ],
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
