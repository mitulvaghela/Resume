import React,{useContext, useState} from 'react'
import { FormContext } from '../../ResumeBuilder'
import Button from '../../molecules/atoms/Button';
import InputLabel from '../../molecules/InputLabel'
import ParentWrapper from '../../molecules/atoms/ParentWrapper';
import TextArea from '../../molecules/atoms/TextArea';
import Label from '../../molecules/atoms/Label';
import withForm from '../../hoc/withForm';
import AchievementSection from '../../components/AchievementSection';
import HelperPreviewSection from '../components/PreviewSection/PreviewSection';

const initialList = {
    "id":"",
    "achievementsField":"",
}
function AchievementForm({ initialList, sectionData, setSectionData,resetForm,formSubmit,fetchValue, deleteItem,editItemPhase}) {
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
  return (<>
            <div className='formOptions'>
                <form className={formSection + " " + "form-layout"} section={formSection}> 
                    <Label for="achievementsField" labelname="Achievements"/>
                    <TextArea value={sectionData.achievementsField} type="text" section="achievements" onInputChange={handleSetValue} placeHolder="e.g. I have secured 4th Rank in Regional Board Exam " id="achievementsField" name="achievementsField"/>
                    <div className='buttonParent formMargin'>
                            <Button buttonName="Reset" type="reset" section="achievements"   onclick={handleReset} className="buttonStyle resetButton" />
                            <Button buttonName="Submit" type="button" section="achievements" id="achievements-submit"  className="buttonStyle submitButton"  onclick={handleSubmit} value="submit"/>
                            
                    </div>
                </form>
                {HelperPreviewSection({editItemPhase,deleteItem,ChildComponent:AchievementSection})}
                {/* <AchievementPreviewForm editItemPhase ={editItemPhase} deleteItem={deleteItem}/> */}
            </div>
          </>
  )
}

export default withForm({initialList})(AchievementForm)