import React, { useContext } from 'react'
import { FormContext } from '../../ResumeBuilder'
// { name }
function MenubarButton(props) {
  const {formSection,setFormSection} = useContext(FormContext);
  return (
    
       <button className='menuBarButton' onClick={ () => { console.log(formSection); setFormSection(props.name)}}>{props.name}</button>
 
  
  )
}

export default MenubarButton