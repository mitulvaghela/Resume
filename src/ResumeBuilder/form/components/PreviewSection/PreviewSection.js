import React from 'react'
// import HelperMap from './HelperMap';
import { useContext } from 'react';
import { FormContext } from '../../../ResumeBuilder';
import ParentWrapper from '../../../molecules/atoms/ParentWrapper';
import Button from '../../../molecules/atoms/Button';
import { useSelector } from 'react-redux';
import { SECTION_TYPES } from '../../../redux/dataModel/dataModelTypes';
import { STORE_TYPES } from '../../../redux/storeTypes';
// {HelperPreviewSection({editItemPhase,deleteItem,EducationSection})}
function HelperPreviewSection({editItemPhase,deleteItem,ChildComponent}) {
   const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
    let List = useSelector( (state) => state["datamodel"][formSection]);
     console.log(List);
  return (
     <>
      { 
    //   HelperMap ( List,ChildComponent,RemoveEditButton)
        List.map( item => {
           const itemId = item.id;
         return (
            <div key={itemId}> 
                <ChildComponent List={item}  id={itemId}/>
                <ParentWrapper className="buttonParent">
                <Button className="submitButton buttonStyle" type="submit" id={itemId} buttonName="X" onclick = { (e) => deleteItem(formSection,e.target.id)} />
                <Button className="resetButton buttonStyle" type="submit" id={itemId} buttonName="Edit"  onclick={ (e) => editItemPhase(e)}/>
                </ParentWrapper>
             </div>
          )
        })
       } 
     </>
  )
}

export default HelperPreviewSection