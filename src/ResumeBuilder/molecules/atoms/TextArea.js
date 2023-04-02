import React from 'react'

function TextArea(props) {
  return (
    <textarea type={props.type} value={props.value} section={props.section} onChange={props.onInputChange} placeholder={props.placeHolder} id={props.id} name={props.name}/>
  )
}

export default TextArea