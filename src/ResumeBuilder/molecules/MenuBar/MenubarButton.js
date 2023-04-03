import React, { useContext } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { sectionActions } from '../../redux/sectionName';
import { FormContext } from '../../ResumeBuilder'
import { STORE_TYPES } from '../../redux/storeTypes';

// { name }
function MenubarButton(props) {
  // const {formSection,setFormSection} = useContext(FormContext);
  const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
  const dispatch = useDispatch();
  const handleSectionChange = () => {
      
       dispatch(sectionActions(props.name,"SECTIONNAME"));
  }
  return (
    
       <button className='menuBarButton' onClick={handleSectionChange}>{props.name}</button>
 
  
  )
}

export default MenubarButton