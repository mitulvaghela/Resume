import React from 'react'

function Button(props) {
  return (
    <button type={props.type} section={props.section} id={props.id}  className={props.className}  onClick={props.onclick} value={props.value} >{props.buttonName} </button>
       
  )
}

export default Button