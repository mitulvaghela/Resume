import React from 'react'
import SkillSection from '../components/SkillSection';
import { useContext } from 'react';
import { FormContext } from '../ResumeBuilder';
import SectionHeader from '../molecules/atoms/SectionHeader';
import List from '../molecules/List/List';
import { useSelector } from 'react-redux';
import { SECTION_TYPES } from '../../constants/sectionTypes';
import { STORE_TYPES } from '../redux/storeTypes';
function SkillList() {
    const ListItems = useSelector( state => {
      return state[STORE_TYPES.DATAMODEL][SECTION_TYPES.SKILLS];
    })
  return (
    <>
      <SectionHeader  className="fa-solid fa-flask icon-color" content = "Skills" />  
      <ol className='parent-small-item' id="skills-details">
        <List List={ListItems} WrapperComponent={SkillSection} />
      </ol>
    </>
  )
}

export default SkillList