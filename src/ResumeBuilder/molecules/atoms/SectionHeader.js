import React from 'react'
import ParentWrapper from './ParentWrapper'
import Tag from './Tag'

export default function SectionHeader(props) {
    // console.log(props);
  return (
    <>
     <ParentWrapper  className="section-layout">
        <ParentWrapper className="logo">
            <Tag tag="a" className={props.className} content=""/>
        </ParentWrapper>
        <Tag  tag="h2" className="section-name" content={props.content}/>

     </ParentWrapper>
    </>
  )
}
