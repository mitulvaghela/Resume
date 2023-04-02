import React from 'react'

function Label(props) {
  return (
    <label htmlFor={props.id}>{props.labelname}</label>
  )
}

export default Label