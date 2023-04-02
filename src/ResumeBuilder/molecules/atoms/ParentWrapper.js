import React from 'react'

function ParentWrapper(props) {
  return (
    <div className={props.className} id={props.id}>{props.children}</div>
  )
}

export default ParentWrapper