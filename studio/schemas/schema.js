// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blocks/blockContent'
import category from './category'
import post from './post'
import author from './author'
import blockHero from './blocks/blockHero'
import heroWithImage from './modules/heroWithImage'
import button from './objects/button'
import page from './documents/page'
import mainImage from './objects/mainImage'
import figure from './objects/figure'
import seo from './objects/seo'
import product from './documents/product'
import siteSettings from './documents/siteSettings'
import blockBanner from './blocks/blockBanner'
import banner from './documents/banner'
import customProductField from './objects/customProductField'
import gallery from './objects/gallery'
import snipcartCustomFieldCheckbox from './objects/snipcartCustomFieldCheckbox'
import snipcartCustomFieldDropdown from './objects/snipcartCustomFieldDropdown'
import snipcartCustomFieldReadonly from './objects/snipcartCustomFieldReadonly'
import snipcartCustomFieldTextarea from './objects/snipcartCustomFieldTextarea'
import snipcartCustomFieldTextbox from './objects/snipcartCustomFieldTextbox'
import dropDownOption from './objects/dropDownOption'
import sectionHeading from './objects/sectionHeading'
import sectionTitle from './blocks/sectionTitle'
import sectionProductList from './objects/sectionProductList'
import sectionMailingList from './objects/sectionMailingList'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    page,
    author,
    dropDownOption,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    banner,
    blockBanner,
    blockContent,
    blockHero,
    button,
    customProductField,
    sectionHeading,
    sectionTitle,
    sectionMailingList,
    sectionProductList,
    snipcartCustomFieldCheckbox,
    snipcartCustomFieldDropdown,
    snipcartCustomFieldReadonly,
    snipcartCustomFieldTextarea,
    snipcartCustomFieldTextbox,
    figure,
    gallery,
    heroWithImage,
    mainImage,
    product,
    seo,
    siteSettings,
  ])
})
