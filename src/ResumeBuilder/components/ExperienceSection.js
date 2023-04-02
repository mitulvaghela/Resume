import React from 'react'
import ParentWrapper from '../molecules/atoms/ParentWrapper'
import Tag from '../molecules/atoms/Tag';

function ExperienceSection({List}) {
    // console.log(props);
    const id = List.id;
  return (
    <>
       <ParentWrapper  id={id}>
            <ParentWrapper className="content-title">
                <Tag tag="h4" className="content-item" content={List.jposition} />
                <Tag tag="span" className="content-item extreme-right-item" content={List.jstart + " - " + List.jend}/>
                <Tag tag="p" className="content-item" content={List.jlocation}/>
            </ParentWrapper>
            <Tag tag="p" className="content-item paragraph" content={List.jdescription}/>
        </ParentWrapper>
    </>
  )
}

export default ExperienceSection