import React, { useContext } from 'react'
import { FormContext } from '../ResumeBuilder';
import ParentWrapper from '../molecules/atoms/ParentWrapper';
import Tag from '../molecules/atoms/Tag'
import { SECTION_TYPES } from '../redux/dataModel/dataModelTypes';
import { useSelector } from 'react-redux';
import { STORE_TYPES } from '../redux/storeTypes';
function IntroductionSection() {

  /*
    Redux: 
     
  */
    const List =useSelector( state => {
      return state[STORE_TYPES.DATAMODEL][SECTION_TYPES.INTRODUCTION];
    })
    // const Image = useSelector ( (state) => state["datamodel"][SECTION_TYPES["IMAGE"]]);
  // console.log(dataModel,"IntroductionSection has not been called");

  return (
    <> 
      <ParentWrapper className="introduction-section">
          <ParentWrapper className="content-layout">
              <Tag className="name" tag={"h1"} content={ List.fname + '\n'+ List.lname } />
              <Tag className="sub-heading" tag={"h2"} content = { List.rolename}/>
          </ParentWrapper>

          <img id="profilePicture" className="pic" alt="Profile Pics" src={List.src} />

          <ParentWrapper className="content-layout">
              <Tag tag="h3" content="Profile" />
              <Tag className="paragraph" tag={"p"} id="personal-intro"  content={List.introduction}/>
        </ParentWrapper>
        
      </ParentWrapper>

    </>
    // <div>IntroductionSection</div>
  )
}

export default IntroductionSection