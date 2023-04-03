import React,{useContext, useEffect, useMemo, useState} from 'react'
import Button from '../../molecules/atoms/Button';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import { FormContext } from '../../ResumeBuilder';
import { FormEditContext } from '../Form';
import withForm from '../../hoc/withForm';
import ExperienceSection from '../../components/ExperienceSection';
import HelperPreviewSection from '../components/PreviewSection/PreviewSection';
import { useSelector } from 'react-redux';
import { STORE_TYPES } from '../../redux/storeTypes';
const initialList = {
    "id":"",
    "jposition":"",
    "jlocation":"",
    "jstart":"",
    "jend":"",
    "jdescription":"",
}

function ExperienceForm({initialList, formData, setFormData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) {
    
  const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
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
            <InputLabel className="halfChild" value={formData.jposition} labelname = "Job Position :" type="text" section="experience"
              onInputChange={handleSetValue} id="jposition" placeholder="e.g. Software Engineer" name="jposition" />
            <InputLabel className="halfChild" value={formData.jlocation} labelname = "Job Location :" type="text" section="experience" 
            onInputChange={handleSetValue}  id="jlocation" placeholder="e.g. Surat " name="jlocation" />
        </ParentWrapper>

        
        <ParentWrapper className='firstLastName'>
           <InputLabel className="halfChild" value={formData.jstart} labelname="Job Start" type="month" section="experience"  placeholder="Date" 
            onInputChange={handleSetValue} onblur="(this.type='text')"   id="jstart" name="jstart" />
           <InputLabel className="halfChild" value={formData.jend}  labelname = "Job End" type="month" section="experience"   placeholder="Date" 
           onInputChange={handleSetValue} onblur="(this.type='text')" id="jend" name="jend"/>
        </ParentWrapper>

        <InputLabel className="halfChild" value={formData.jdescription}  labelname = "Description" type="text" section="experience" 
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