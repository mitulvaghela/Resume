import React from 'react'
import Input from './atoms/Input'
import Label from './atoms/Label'
{/* <label for="fname">First Name:</label>
<input type="text" section="intro" id="fname" oninput=" fetchValue(this)" placeHolder="e.g. Mitul" name="fname"/> */}

function InputLabel(props) {
  return (
    
    <div className={ props.className + " " + "formMargin"} >
    <Label id={props.id} labelname={props.labelname}/>
    <Input id={props.id} value={props.value} onblur={props.onblur} type={props.type} onInputChange={props.onInputChange} placeholder={props.placeholder} name={props.name}/>
    </div>
  )
}

export default InputLabel