import React, { useContext } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { sectionActions } from '../../redux/sectionName';
import { FormContext } from '../../ResumeBuilder'
import { STORE_TYPES } from '../../redux/storeTypes';
import { useHistory } from 'react-router-dom';
// { name }
function MenubarButton(props) {
  // const {formSection,setFormSection} = useContext(FormContext);
  const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSectionChange = () => {
       
      
       dispatch(sectionActions(props.name,"SECTIONNAME"));
       history.push(`/${props.name}`);
  }
  return (
    
       <button className='menuBarButton' onClick={handleSectionChange}>{props.name}</button>
 
  
  )
}

export default MenubarButton