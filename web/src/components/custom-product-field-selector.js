import React from 'react'
import { IoIosArrowDown } from "react-icons/io"

/** @jsx jsx */
import { jsx } from 'theme-ui'

export const CustomProductFieldSelector = ({ field, onChange, ...rest }) => {
  switch (field._type) {
    case "snipcartCustomFieldDropdown": {
      return (
        <CustomDropDownField
          field={field}
          onChange={onChange}
          sx={{ my: 3 }}
          {...rest}
        />
      )
    }
    case "snipcartCustomFieldTextbox": {
      return (
        <CustomTextBoxField
          field={field}
          onChange={onChange}
          sx={{ my: 3 }}
          {...rest}
        />
      )
    }
    case "snipcartCustomFieldTextarea": {
      return (
        <CustomTextArea
          field={field}
          onChange={onChange}
          sx={{ my: 3 }}
          {...rest}
        />
      )
    }
    case "snipcartCustomFieldCheckbox": {
      return (
        <CustomCheckbox
          field={field}
          onChange={onChange}
          sx={{ my: 3 }}
          {...rest}
        />
      )
    }
    default:
      return (
        <CustomTextBoxField
          field={field}
          onChange={onChange}
          sx={{ my: 3 }}
          {...rest}
        />
      )
  }
}

const inputStyle = {
  height: `56px`,
  borderColor: `buttonBorder`,
  borderRadius: `4px`,
  borderStyle: `solid`,
  borderWidth: `1px`,
  width: `100%`,
  fontSize: 1,
  px: 3,
}

const selectStyle = {
  appearance: `none`,
  width: `100%`,
  backgroundColor: `unset`,
}

const CustomTextBoxField = ({ field, onChange, ...rest }) => {
  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,

      }}
      {...rest}
    >
      <label sx={{ mb: 2 }}>{field.name}</label>
      <div
        sx={{
          position: `relative`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <input
          type={field.type || "text"}
          sx={inputStyle}
          name={field.name}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

const CustomDropDownField = ({ field, onChange, ...rest }) => {
  if(!field?.options?.length > 0) {
    return null
  }

  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`
      }}
      {...rest}
    >
      <label sx={{ mb: 2 }}>{field.name}</label>
      <div
        sx={{
          position: `relative`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <IoIosArrowDown
          sx={{
            position: `absolute`,
            right: 3,
            zIndex: -1,
          }}
        />
        <select
          name={field.name}
          sx={{
            ...inputStyle,
            ...selectStyle,
          }}
          onChange={onChange}
        >
          {field.options.map((option, id) => {
            return (
              <option key={id} value={option.label}>
                {option.label}
                {option.additionalPrice ? ` (+$${option.additionalPrice})` : ``}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

const CustomTextArea = ({ field, onChange, ...rest }) => {
  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
      }}
      {...rest}
    >
      <label sx={{ mb: 2 }}>{field.name}</label>
      <div
        sx={{
          position: `relative`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <textarea
          sx={{
            height: `80px`,
            px: 3,
            py: 3,
            borderColor: `buttonBorder`,
            borderRadius: `4px`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            fontFamily: `inherit`,
            width: `100%`
          }}
          name={field.name}
          onChange={onChange}
          placeholder={field.placeholder}
        />
      </div>
    </div>
  )
}

const CustomCheckbox = ({ field, onChange, ...rest }) => {
  return (
    <div
      sx={{
        display: `flex`,
        alignItems: `center`,
      }}
      {...rest}
    >
      <label>{field.name}</label>
      <div
        sx={{
          position: `relative`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
        <input
          type="checkbox"
          sx={{
            height: `16px`,
            width: `16px`,
            borderColor: `buttonBorder`,
            borderRadius: `4px`,
            borderStyle: `solid`,
            borderWidth: `1px`,
            fontFamily: `inherit`,
            margin: 0,
            ml: 3,
          }}
          name={field.name}
          onChange={onChange}
        />
      </div>
    </div>
  )
}