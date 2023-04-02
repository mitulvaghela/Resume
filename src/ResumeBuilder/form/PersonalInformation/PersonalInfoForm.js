import React,{useContext, useState} from 'react'
import { FormContext } from '../../ResumeBuilder';
import Button from '../../molecules/atoms/Button';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import withForm from '../../hoc/withForm';


const initialList = {
    "tnumber":"",
    "emailid":"",
    "linkedinid":"",
    "address":"",     
}
function PersonalInfoForm ({initialList, sectionData, setSectionData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) {
      
  const {formSection} = useContext(FormContext);
  const { tnumber,linkedinid,emailid,address } = sectionData;
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
          <InputLabel value={tnumber}  className="halfChild" labelname = "Telephone number" type="tel" section="personal-info" 
             id="tnumber" onInputChange={handleSetValue} placeholder="e.g. +91 9662833396" name="tnumber"/>
          <InputLabel value={emailid} className="halfChild" labelname = "Email ID" type="email" section="personal-info"
            onInputChange={handleSetValue} placeholder="e.g. vmdipakbhai@tekion.com " id="emailid" name="emailid"/>
        </ParentWrapper>
      
      <InputLabel value={linkedinid} className="halfChild"  labelname="Linkedin Profile URL" type="text" section="personal-info" 
           onInputChange={handleSetValue} placeholder="e.g. https://linkedin/com/mitul-vaghela" id="linkedinid" name="linkedinid" />
      <InputLabel value={address} className="halfChild" labelname = "Address " type="text" section="personal-info" 
           onInputChange = {handleSetValue} placeholder="e.g. Katargam, Surat, Gujarat" id="address" name="address"/>
      <div className='buttonParent formMargin'>
      <Button buttonName="Reset" type="reset" section="personal-info"   onclick={handleReset} className="buttonStyle resetButton" />
      <Button buttonName="Submit" type="button" section="personal-info" id="intro-submit"  className="buttonStyle submitButton"  onclick={handleSubmit} value="submit"/>
      
      </div>   
     </form>
    </div>                                                                                                                        
    </>
  )
}

export default withForm({initialList})(PersonalInfoForm)