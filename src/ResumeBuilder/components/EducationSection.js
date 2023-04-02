import React from 'react'
import ParentWrapper from '../molecules/atoms/ParentWrapper'
import Tag from '../molecules/atoms/Tag'

// className is written instead of id in ParentWrapper 
function EducationSection({List}) {
  // console.log(props);
  const id = List.id;
    //  console.log(List);
  return (
    <>
        <ParentWrapper className="content-title" id={id}>
                <Tag tag="h4" className="content-item" content={List.qname + " - " + List.uname } />
                <Tag tag="span" className="content-item extreme-right-item" content={List.syear + " - " + List.eyear}/>
                <Tag tag="p" className="content-item" content={List.cname}/>
        </ParentWrapper>
    </>
    
  )
}

export default EducationSection