export default {
  title: "Section Title",
  name: "sectionTitle",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [{ title: "Normal", value: `normal` }],
      lists: [],
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
        ],
        annotations: [],
      },
    },
  ],
};
