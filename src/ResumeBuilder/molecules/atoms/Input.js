import React from 'react'

function Input(props) {
  return (
    <input id={props.id} onBlur={props.onblur} value={props.value} type={props.type} onInput={props.onInputChange} placeholder={props.placeholder} name={props.name}/>
   
  )
}

export default Input