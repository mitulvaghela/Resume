import React from 'react'

function SkillSection({List}) {
    const id = List.id;
  return (
    <>
     <li className="small-item" id={id}>  {List.skillField}  </li>
    </>
  )
}

export default SkillSection

