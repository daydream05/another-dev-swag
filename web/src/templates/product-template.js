import React, { useState } from 'react'
import { graphql } from 'gatsby'

import BlockContent from "@sanity/block-content-to-react"
import { ProductJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo'
import { useQuery } from "react-query"


/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import Layout from "../components/layout"
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

import { api as sanityConfig } from "../../../studio/sanity.json"
import { SnipCartButton } from '../components/snipcart-button'
import { ProductCard } from '../components/product-card'
import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'
import { SiteContext } from '../context/site-manager'
import { portableTextToPlainText } from '../utils/portableTextToPlainText'
import { CustomProductFieldSelector } from '../components/custom-product-field-selector'
import { ProductGallery } from '../components/product-gallery'
import { ConvertKitSignup } from '../components/convert-kit-signup'



export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      id
      title
      price
      path
      preOrder
      _rawDescription
      customFields {
        ... on SanitySnipcartCustomFieldDropdown {
          _type
          _key
          name
          options {
            label
            additionalPrice
          }
          defaultValue
          isRequired
          placeholder
        }
        ... on SanitySnipcartCustomFieldTextbox {
          _type
          _key
          name
          type
          defaultValue
          isRequired
          placeholder
        }
        ... on SanitySnipcartCustomFieldTextarea {
          _type
          _key
          name
          placeholder
          isRequired
        }
        ... on SanitySnipcartCustomFieldCheckbox {
          _type
          _key
          name
          isRequired
        }
      }
      mainImage {
        alt
        asset {
          url
          _id
          metadata {
            dimensions {
              height
              width
              aspectRatio
            }
          }
        }
      }
      gallery {
        images {
          _key
          alt
          asset {
            url
            _id
            metadata {
              dimensions {
                height
                width
                aspectRatio
              }
            }
          }
        }
      }
    }
    moreProducts: allSanityProduct(filter: {id: { ne: $id }, isActive: { eq: true }}) {
      edges {
        node {
          id
          title
          price
          path
          preOrder
          mainImage {
            alt
            asset {
              _id
              url
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`
const ProductTemplate = ({ data }) => {
  const { product, moreProducts  } = data

  const plainTextDescription = portableTextToPlainText(product?._rawDescription)

  const ogImages = [{
    url: product?.mainImage?.asset?.url,
    width: 3000,
    height: 2250,
  }]

  return (
    <Layout>
      {product && (
        <ProductJsonLd
          productName={product.title}
          images={[product.mainImage?.asset?.url]}
          description={plainTextDescription}
          titleTemplate={"%s | SwagaScript"}
          brand="SwagaScript"
          sku={product.id}
          offers={{
            price: product?.price,
            priceCurrency: `USD`,
            itemCondition: `https://schema.org/NewCondition`,
            availability: `http://schema.org/InStock`,
            url: `https://swagascript.com${product.path}`,
            seller: {
              name: `SwagaScript`
            }
          }}
        />
      )}
      {product && (
        <GatsbySeo
          title={product.title}
          titleTemplate={"%s | SwagaScript"}
          description={plainTextDescription}
          openGraph={{
            images: ogImages,
          }}
        />
      )}
      <section
        sx={{
          [mediaQueries.xl]: {
            px: 5,
            py: 5,
          },
        }}
      >
        <Container
          variant="layout.container.large"
          sx={{
            [mediaQueries.xl]: {
              display: `grid`,
              gridTemplateColumns: `650px 400px`,
              gridGap: 5,
              justifyContent: `center`,
            },
          }}
        >
          <ProductGallery images={product?.gallery?.images} />
          <ProductInfo product={product} />
        </Container>
      </section>
    </Layout>
  )
}

const ProductInfo = ({ product, className }) => {
  const { title, price, _rawDescription, customFields } = product

  const [cfValues, setCfValues] = useState([])

  const { isLoading, error, data } = useQuery(product.id, () =>
    fetch(`https://app.snipcart.com/api/products/${product.id}`, {
      headers: {
        Authorization: `Basic ${btoa(
          `${process.env.GATSBY_SNIPCART_REST_API_KEY}`
        )}`,
        Accept: "application/json",
      },
    }).then(res => res.json())
    )

  const handleCfChange = (event, id) => {

    let vals = [...cfValues]
    if(event.target.type === `checkbox`) {
      vals[id] = event.target.checked
    } else {
      vals[id] = event.target.value
    }

    setCfValues(vals)
  }

  const generateCustomFieldAttributes = ({ customFields }) => {
    if(!customFields) {
      return {}
    }

    let attributeObj = {}

    for(let i = 0; i < customFields.length; i++) {
      const field = customFields[i]

      const dataItemString = `data-item-custom${i + 1}`

      if(field.name) {
        attributeObj[`${dataItemString}-name`] = field.name
      }

      if (field.options) {
        const optionsString = field.options?.reduce((acc, val, id) => {
          return `${acc}|${val.label}${
            val.additionalPrice ? `[+${val.additionalPrice}]` : ``
          }`
        }, "")
        attributeObj[`${dataItemString}-options`] = optionsString
        
        // set the default value to the first item on the options array
        attributeObj[`${dataItemString}-value`] = field.options[0]?.name
      }

      if (field.isRequired) {
        attributeObj[`${dataItemString}-isRequired`] = field.isRequired
      }

      if(field.defaultValue) {
        attributeObj[`${dataItemString}-value`] = field.defaultValue
      }

      if(field._type === `snipcartCustomFieldTextarea`) {
         attributeObj[`${dataItemString}-type`]= "textarea"
      }

      if (field._type === `snipcartCustomFieldCheckbox`) {
        attributeObj[`${dataItemString}-type`] = "checkbox"
      }
    }

    return attributeObj
  }

  const generateValueAttributes = () => {
    let attributeObj = {}
    for(let i = 0; i < cfValues.length; i++) {
      const value = cfValues[i]
      const dataItemString = `data-item-custom${i + 1}`

      attributeObj[`${dataItemString}-value`] = value
    }

    return attributeObj
  }

  const customFieldAttributes =  generateCustomFieldAttributes({ customFields })

  const valueAttributes = generateValueAttributes()

  return (
    <div
      sx={{
        px: 4,
        py: 5,
        [mediaQueries.xl]: {
          pt: 0,
        },
      }}
      className={className}
    >
      <h1
        sx={{
          fontWeight: `500`,
          fontSize: 5,
          mt: 0,
        }}
      >
        {title}
      </h1>
      <div
        sx={{
          fontWeight: `500`,
          fontFamily: `heading`,
          fontSize: 2,
          mb: 4,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <span>${price}</span>
        <div sx={{ display: `flex` }}>
          {!error && data?.stock >= 0 && (
            <span
              sx={{ color: `redAlert`, textAlign: `right`, width: `100%` }}
            >{`${data?.stock} left in stock`}</span>
          )}
        </div>
      </div>
      {_rawDescription && (
        <div sx={{ mb: 5 }}>
          <BlockContent
            blocks={_rawDescription}
            sx={{ lineHeight: 1.2, li: { pb: 2 } }}
          />
        </div>
      )}
      {product?.customFields && (
        <ProductCustomFieldsForm
          customFields={product.customFields}
          handleFieldChange={handleCfChange}
        />
      )}
      {product?.preOrder ? (
        <div>
          <p>Be the first to know when this swag drops!</p>
          <ConvertKitSignup />
        </div>
      ) : (
        <div>
          {data?.stock !== 0 ? (
            <div>
              <SnipCartButton
                sx={{
                  mt: 4,
                  maxWidth: `unset`,
                }}
                data-item-id={product?.id}
                data-item-price={product?.price}
                path={product?.path}
                data-item-image={product?.mainImage?.asset?.url}
                data-item-name={product?.title}
                {...customFieldAttributes}
                {...valueAttributes}
              >
                Add to cart
              </SnipCartButton>
              <SnipCartButton
                sx={{
                  mt: 2,
                  maxWidth: `unset`,
                }}
                variant={product?.preOrder ? `white` : `dark`}
                className="snipcart-checkout"
                data-item-id={product?.id}
                data-item-price={product?.price}
                path={product?.path}
                data-item-image={product?.mainImage?.asset?.url}
                data-item-name={product?.title}
                {...customFieldAttributes}
                {...valueAttributes}
              >
                {product?.preOrder ? `Preorder` : `Buy`} now
              </SnipCartButton>
            </div>
          ) : (
            <div>
              <p>Find out when this swag gets another drop!</p>
              <ConvertKitSignup />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const ProductCustomFieldsForm = ({ customFields, handleFieldChange }) => {
  if(!customFields) {
    return null
  }

  return (
    customFields?.length > 0 &&
      customFields.map((field, id) => {
        return (
          <CustomProductFieldSelector
            field={field}
            key={field._key}
            onChange={event => handleFieldChange(event, id)}
          />
        )
      }
    )
  )
}

const MoreProductsSection = ({ products }) => {
  return (
    <section
      sx={{
        py: 5,
        px: 4,
        [mediaQueries.xl]: {
          py: 6,
        },
      }}
    >
      <Container
        sx={{
          maxWidth: breakpoints.xl,
        }}
      >
        <h2
          sx={{
            fontWeight: `500`,
            fontSize: 4,
            textAlign: `center`,
            mb: 4,
          }}
        >
          Swag you may also like
        </h2>
        {products?.length > 0 && (
          <ul
            sx={{
              listStyle: `none`,
              margin: 0,
              padding: 0,
              display: `grid`,
              gridGap: 4,
              [mediaQueries.md]: {
                gridTemplateColumns: `repeat(auto-fit, 300px)`,
                justifyContent: `center`,
                gridGap: 4,
              },
            }}
          >
            {products.map(({ node }) => {
              return (
                <li key={node.id}>
                  <ProductCard product={node} />
                </li>
              )
            })}
          </ul>
        )}
      </Container>
    </section>
  )
}

export default ProductTemplate