import React,{useContext, useState} from 'react'
import { FormContext } from '../../ResumeBuilder';
import Button from '../../molecules/atoms/Button';
import Image from './Image';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import withForm from '../../hoc/withForm';
import { useSelector } from 'react-redux';
import { STORE_TYPES } from '../../redux/storeTypes';
const initialList = {
        "fname":"",
        "lname":"",
        "rolename":"",
        "introduction":"",     
    }
function IntroductionForm({initialList, formData, setFormData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) {
      
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
        <ParentWrapper className="firstLastName">
            <div className="smallChild formMargin">
              <Image/>
            </div>

            <ParentWrapper className="bigChild formMargin">

                <ParentWrapper className='firstLastName'>
                  <InputLabel value={formData.fname} className="halfChild"  labelname = "First Name :" type="text" section="intro" 
                    id="fname" onInputChange={handleSetValue} placeholder="e.g. Mitul" name="fname"/>
                  <InputLabel value={formData.lname} className="halfChild" labelname = "Last Name :" type="text" section="intro" 
                    id="lname" onInputChange={handleSetValue} placeholder="e.g. Vaghela" name="lname"/>
                </ParentWrapper>
              
                <InputLabel value={formData.rolename}  className="halfChild" labelname = "Type Of Role " type="text" section="intro" 
                    id="rolename" onInputChange={handleSetValue} placeholder="e.g. Software Engineer" name="rolename" />
                <InputLabel value={formData.introduction} className="halfChild" labelname = "Introduce Yourself " type="text" section="intro" 
                    id="introduction"  onInputChange={handleSetValue} placeholder="e.g. I have good knowledge regarding data-structures,..." name="introduction" />
                    
                <div className='buttonParent formMargin'>
                  <Button buttonName="Reset" type="reset" section="intro"   onclick={handleReset} className="buttonStyle resetButton" />
                  <Button buttonName="Submit" type="button" section="intro" id="intro-submit"  className="buttonStyle submitButton"  onclick={handleSubmit} value="submit"/>  
                </div>

            </ParentWrapper>

        </ParentWrapper>
      </form>
    </div>
    </>
  )
}

export default withForm({initialList})(IntroductionForm)