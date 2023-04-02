import React from 'react'

function Input(props) {
  return (
    <input id={props.id} value={props.value} type={props.type} onInput={props.onInputChange} placeholder={props.placeholder} name={props.name}/>
   
  )
}

export default Input