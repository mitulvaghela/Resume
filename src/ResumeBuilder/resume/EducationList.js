import React from 'react'
import EducationSection from '../components/EducationSection'
import ParentWrapper from '../molecules/atoms/ParentWrapper';
import SectionHeader from '../molecules/atoms/SectionHeader';
import { useContext } from 'react';
import { FormContext } from '../ResumeBuilder';
import List from '../molecules/List/List';
import { useSelector } from 'react-redux';
import { SECTION_TYPES } from '../../constants/sectionTypes';
import { STORE_TYPES } from '../redux/storeTypes';
function EducationList() {

  const ListItems = useSelector( state => {
    return state[STORE_TYPES.DATAMODEL][SECTION_TYPES.EDUCATION];
  })
  return (
    <>
    
    <ParentWrapper className="education-details">
        <SectionHeader  className="fa-solid fa-user-graduate icon-color" content= "Higher Education" />
        <List List={ListItems} WrapperComponent={EducationSection} />    
    </ParentWrapper>
    </>
  )
}

export default EducationList