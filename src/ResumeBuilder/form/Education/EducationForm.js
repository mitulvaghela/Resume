import React,{useContext, useEffect, useMemo, useState} from 'react'
import Button from '../../molecules/atoms/Button';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import { FormContext } from '../../ResumeBuilder';
import { FormEditContext } from '../Form';
import withForm from '../../hoc/withForm';
import HelperPreviewSection from '../components/PreviewSection/PreviewSection';
import EducationSection from '../../components/EducationSection';
const initialList = {
    "id":"",
    "uname":"",
    "qname":"",
    "cname":"",
    "syear":"",
    "eyear":"",
}
 
const EducationForm = ({ initialList, sectionData, setSectionData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) => {
    
   
    
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
            <InputLabel className="halfChild" value={sectionData.uname} labelname = "University Name:" type="text" section="education" 
            onInputChange={handleSetValue} id="uname" placeholder="e.g. DAIICT " name="uname"/>
            <InputLabel className="halfChild" value={sectionData.qname}labelname = "Qualification:" type="text" section="education" 
            onInputChange={handleSetValue} id="qname" placeholder="e.g. Bachelor Degree " name="qname"/>
        </ParentWrapper>

        <InputLabel className="halfChild" value={sectionData.cname}labelname="Course Name:" type="text" section="education" 
        onInputChange={handleSetValue} id="cname"  placeholder="e.g. Computer Science " name="cname" />
        
        <ParentWrapper className='firstLastName'>
                <InputLabel className="halfChild" value={sectionData.syear}  labelname = "Start Year :" type="text" section="education"  placeholder="Date"
                onInputChange={handleSetValue}  onblur="(this.type='text')" id="syear" name="syear"/>
                <InputLabel className="halfChild" value={sectionData.eyear}  labelname = "End Year :" type="text" section="education" placeholder="Date" 
                onInputChange={handleSetValue}  onblur="(this.type='text') " id="eyear" name="eyear"/>
        </ParentWrapper>

        <div className='buttonParent formMargin'>
          <Button buttonName="Reset" type="reset" section="education"   onclick={handleReset} className="buttonStyle resetButton" />
          <Button buttonName="Submit" type="button" section="education" id="education-submit"  className="buttonStyle submitButton"  onclick={handleSubmit} value="submit"/>
        </div>
      </form>

      {HelperPreviewSection({editItemPhase,deleteItem,ChildComponent:EducationSection})}
      {/* <EducationPreviewForm editItemPhase ={editItemPhase} deleteItem={deleteItem}/> */}

    </div>
 </>
  )
}

// export default withForm({ uname: '', lName: '' })(EducationForm)
export default withForm({initialList})(EducationForm);