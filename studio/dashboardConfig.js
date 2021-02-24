export default {
  widgets: [
    {
      name: "snipcart-orders",
      options: {
        apiKey: process.env.SANITY_STUDIO_SNIPCART_API_KEY, // SNIPCART SECRET API KEY
      },
    },
    {
      name: "document-list",
      options: {
        title: "Documents with unpublished changes",
        query: '*[_id in path("drafts.**")] | order(_updatedAt desc)',
      },
    },
  ],
};

console.log(process.env.SNIPCART_REST_API_KEY);