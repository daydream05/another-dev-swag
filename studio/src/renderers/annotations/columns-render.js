import React from 'react'

export const ColumnsRender = props => {

  return (
    <div style={{ columnCount: props?.count }}>{props.children}</div>
  )
}
