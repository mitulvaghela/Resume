import React, { useContext } from 'react'
import { FormContext } from '../ResumeBuilder';
import ParentWrapper from '../molecules/atoms/ParentWrapper'
import Tag from '../molecules/atoms/Tag'
import { useSelector } from 'react-redux';
import { SECTION_TYPES } from '../../constants/sectionTypes';
import { STORE_TYPES } from '../redux/storeTypes';

// ----------------------------


function PersonalSection() {
  // const {dataModel,setDataModel} = useContext(FormContext);
  let List = useSelector( state => {
    return state[STORE_TYPES.DATAMODEL][SECTION_TYPES.PERSONALINFORMATION];
  })

  return (
     
      <ParentWrapper className="contact-section">

        <Tag tag={"h3"} content={"CONTACT "}/>

        <ParentWrapper className="section-layout" >
          <Tag tag="i" className="fa-solid fa-phone icon-color" content={""}  />
          <Tag tag="a" className="icon-info" id="telephone"  href={"tel+919662833396"} content={List.tnumber}/>
        </ParentWrapper>

        <ParentWrapper className="section-layout" >
          <Tag tag="i" className="fa-solid fa-inbox icon-color" content={""}   />
          <Tag tag="a" className="icon-info" id="email"  href="mailto:${personalData.EmailId.value}?
                    subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you" content={List.emailid}/>
        </ParentWrapper>

        <ParentWrapper className="section-layout" >
          <Tag tag="i" className="fa-brands fa-linkedin icon-color" content={""}  />
          <Tag tag="a" className="icon-info" id="linkedin"  href={""} content={List.linkedinid}/>
        </ParentWrapper>

        <ParentWrapper className="section-layout" >
          <Tag tag="i" className="fa-solid fa-location-dot icon-color" content={""}  />
          <Tag tag="a" className="icon-info" id="address"   content={List.address}/>
        </ParentWrapper>

      </ParentWrapper>
    
  )
}

export default PersonalSection