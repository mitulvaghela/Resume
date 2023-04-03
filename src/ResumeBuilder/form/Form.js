import React, { useContext, useEffect,useState, useCallback } from 'react'
// import { formBlock } from '../form'
import IntroductionForm from './Introduction/IntroductionForm'
import PersonalInfoForm from './PersonalInformation/PersonalInfoForm';
import EducationForm from './Education/EducationForm';
import { FormContext } from '../ResumeBuilder'
import ExperienceForm from './Experience/ExperienceForm';
import SkillsForm from './Skill/SkillsForm';
import AchievementForm from './Achievement/AchievementForm';
import { SECTION_TYPES } from '../../constants/sectionTypes';
import { useSelector } from 'react-redux';
import { STORE_TYPES } from '../redux/storeTypes';
const Fallback = () => null;

// Create a HOC => pass IntroductionForm as children and sectionName
const formBlock = {
  [SECTION_TYPES.INTRODUCTION]: IntroductionForm,  
  [SECTION_TYPES.PERSONALINFORMATION]: PersonalInfoForm,
  [SECTION_TYPES.EDUCATION]: EducationForm,
  [SECTION_TYPES.EXPERIENCE]:ExperienceForm,
  [SECTION_TYPES.SKILLS] : SkillsForm,
  [SECTION_TYPES.ACHIEVEMENTS]: AchievementForm,
};

export const FormEditContext = React.createContext("Edit");

function Form() {
   
    
  const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
 
 
  // const [isEditing,setIsEditing] = useState("");

  const ComponentToRender = formBlock[formSection] || Fallback
// const renderFormSection =  useCallback(() => {
  
//   console.log("LOGGGED!")
//   const ComponentToRender = formBlock[formSection] || Fallback;
  
//   return <ComponentToRender />
// }, [formSection]);

return (
  <>
   <ComponentToRender/>
  </>
   
    // // <FormEditContext.Provider value= { {isEditing,setIsEditing}}>
    // {/* <div className='formOptions'>
    //   <form className={formSection + " " + "form-layout"} section={formSection}>  */}
     
      
    //   {/* <AchievementForm renderFormSection={} /> */}
    //   {/* </form>
    //   <ExperiencePreviewForm/>
    // </div> */}
    // // </FormEditContext.Provider>
  )
}

export default Form