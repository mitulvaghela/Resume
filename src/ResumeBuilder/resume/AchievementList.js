import React from 'react'
import AchievementSection from '../components/AchievementSection';
import { useContext } from 'react';
import { FormContext } from '../ResumeBuilder';
import ParentWrapper from '../molecules/atoms/ParentWrapper';
import SectionHeader from '../molecules/atoms/SectionHeader';
// import HelperMap from '../../Helper/HelperMap';
import List from '../molecules/List/List';
import { useSelector } from 'react-redux';
import { SECTION_TYPES } from '../reduce/datamodelTypes';

function AchievementList() {
    // const {dataModel,setDataModel} = useContext(FormContext);
    const ListItems = useSelector((state) => state[SECTION_TYPES["ACHIEVEMENTS"]]);
    // let ListItems = dataModel["achievements"];

  return (
    <>
    <ParentWrapper className="skills-details">
        <SectionHeader  className="fa-solid fa-trophy icon-color" content= "Higher Education" />
        <List List={ListItems} WrapperComponent={AchievementSection} />     
    </ParentWrapper>
    </>
    )
}

export default AchievementList