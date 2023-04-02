import React,{useContext, useEffect, useMemo, useState} from 'react'
import Button from '../../molecules/atoms/Button';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import { FormContext } from '../../ResumeBuilder';
import { FormEditContext } from '../Form';
import withForm from '../../hoc/withForm';
import ExperienceSection from '../../components/ExperienceSection';
import HelperPreviewSection from '../components/PreviewSection/PreviewSection';
const initialList = {
    "id":"",
    "jposition":"",
    "jlocation":"",
    "jstart":"",
    "jend":"",
    "jdescription":"",
}

function ExperienceForm({initialList, sectionData, setSectionData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) {
    
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
     
     
        <ParentWrapper className='firstLastName'>
            <InputLabel className="halfChild" value={sectionData.jposition} labelname = "Job Position :" type="text" section="experience"
              onInputChange={handleSetValue} id="jposition" placeholder="e.g. Software Engineer" name="jposition" />
            <InputLabel className="halfChild" value={sectionData.jlocation} labelname = "Job Location :" type="text" section="experience" 
            onInputChange={handleSetValue}  id="jlocation" placeholder="e.g. Surat " name="jlocation" />
        </ParentWrapper>

        
        <ParentWrapper className='firstLastName'>
           <InputLabel className="halfChild" value={sectionData.jstart} labelname="Job Start" type="text" section="experience"  placeholder="Date" 
            onInputChange={handleSetValue} onblur="(this.type='text')"   id="jstart" name="jstart" />
           <InputLabel className="halfChild" value={sectionData.jend}  labelname = "Job End" type="text" section="experience"   placeholder="Date" 
           onInputChange={handleSetValue} onblur="(this.type='text')" id="jend" name="jend"/>
        </ParentWrapper>

        <InputLabel className="halfChild" value={sectionData.jdescription}  labelname = "Description" type="text" section="experience" 
        onInputChange={handleSetValue}  id="jdescription" placeholder="I have worked on many techonologies,..." name="jdescription"/>
        
        <div className='buttonParent formMargin'>
          <Button buttonName="Reset" type="reset" section="experience"   onclick={handleReset} className="buttonStyle resetButton" />
          <Button buttonName="Submit" type="button" section="experience" id="experience-submit"  className="buttonStyle submitButton"  onclick={handleSubmit} value="submit"/>
        </div>

      </form>

      {HelperPreviewSection({editItemPhase,deleteItem,ChildComponent:ExperienceSection})}
      {/* <ExperiencePreviewForm editItemPhase ={editItemPhase} deleteItem={deleteItem} /> */}

    </div>
 </>
  )
}

export default withForm({initialList})(ExperienceForm);