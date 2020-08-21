export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to: [{ type: 'banner' }],
    }
  ]
}