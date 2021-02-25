export default {
  name: "product",
  title: "Product",
  type: "document",
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      name: `price`,
      title: `Price`,
      type: "number",
      validation: (Rule) => Rule.positive(),
    },
    {
      name: "isActive",
      title: "Is active?",
      type: "boolean",
    },
    {
      name: 'preOrder',
      title: 'Pre-order',
      type: 'boolean',
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "mainImage",
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "gallery",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "customFields",
      title: "Custom Fields",
      type: "array",
      of: [
        { type: "snipcartCustomFieldCheckbox" },
        { type: "snipcartCustomFieldDropdown" },
        { type: "snipcartCustomFieldReadonly" },
        { type: "snipcartCustomFieldTextarea" },
        { type: "snipcartCustomFieldTextbox" },
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    }
  ],
  initialValue: () => ({
    isActive: true,
  }),
};
