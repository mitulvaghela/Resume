import React,{useContext, useState} from 'react'
import { FormContext } from '../../ResumeBuilder';
import Button from '../../molecules/atoms/Button';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import withForm from '../../hoc/withForm';
import HelperPreviewSection from '../components/PreviewSection/PreviewSection';
import SkillSection from '../../components/SkillSection';


const initialList = {
    "id":"",
    "skillField":"",
}
function SkillsForm({initialList, sectionData, setSectionData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) {
    const {formSection} = useContext(FormContext);
    const handleReset = (e) => {
      resetForm();
    }
    const handleSubmit = (e) => {
        formSubmit(e);
    }
    const handleSetValue = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        fetchValue(value,id);
    }

  return (
    <>
    <div className='formOptions'>
      <form className={formSection + " " + "form-layout"} section={formSection}> 
        <InputLabel value={sectionData.skillField} className="halfChild" labelname="Skills" type="text" section="skills"   placeholder="e.g. Java, MATLAB,... " 
        onInputChange={handleSetValue} id="skillField" name="skillField" />
        
        <div className='buttonParent formMargin'>
            <Button buttonName="Reset" type="reset" section="skills"   onclick={handleReset} className="buttonStyle resetButton" />
            <Button buttonName="Submit" type="button" section="skills" id="skills-submit"  className="buttonStyle submitButton"  onclick={handleSubmit} value="submit"/>
            
        </div>
        </form>
        { HelperPreviewSection({editItemPhase,deleteItem,ChildComponent:SkillSection})}
      {/* <SkillsPreviewForm editItemPhase ={editItemPhase} deleteItem={deleteItem} /> */}
    </div>
    </>
  )
}

export default withForm({initialList})(SkillsForm);