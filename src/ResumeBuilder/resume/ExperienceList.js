import React, { useContext } from 'react'
import { FormContext } from '../ResumeBuilder';
import ExperienceSection from '../components/ExperienceSection';
import ParentWrapper from '../molecules/atoms/ParentWrapper';
import SectionHeader from '../molecules/atoms/SectionHeader';
import List from '../molecules/List/List';
import { SECTION_TYPES } from '../reduce/datamodelTypes';
import { useSelector } from 'react-redux';
function ExperienceList() {
    const ListItems = useSelector((state) => state[SECTION_TYPES["EXPERIENCE"]]);
    // let ListItems = dataModel["experience"];

return (
 <> 
    <ParentWrapper className="experience-details">
        <SectionHeader  className="fa-solid fa-briefcase icon-color" content = "Work Experience" />
        <List List={ListItems} WrapperComponent={ExperienceSection} />
    </ParentWrapper>
 </>
)
}

export default ExperienceList