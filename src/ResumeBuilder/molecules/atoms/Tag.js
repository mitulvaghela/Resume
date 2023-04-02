import React from 'react'

function Tag(props) {
    // if(props.content =='undefined')
    // props.content="";
  return (
    <> 
    <props.tag className={props.className} id={props.id}  href = {props.href}  > { '\n'  + props.content} </props.tag>
    </>
  )
}

export default Tag