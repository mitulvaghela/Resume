import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { datamodelAction } from '../redux/dataModel/dataModelActions';
import { SECTION_TYPES } from '../redux/dataModel/dataModelTypes';
import { FormContext } from '../ResumeBuilder';
import { STORE_TYPES } from '../redux/storeTypes';



function Image() {
    
    // const {dataModel,setDataModel} = useContext(FormContext);
    const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
    const dispatch = useDispatch();
    const loadImage = (e) => {
        
        const imageDOM = e.target;
        const sectionName=imageDOM.getAttribute("section");
        const previewImage = document.getElementById("previewProfilePicture");
        imageDOM.addEventListener( "change", () => {
            let reader = new FileReader();   
            reader.onload = (e) => {

              // imageDOM.setAttribute("src",e.target.result);
              previewImage.setAttribute("src",e.target.result);
                 // after  with logic redux
              const formData = {src:e.target.result};
              dispatch(datamodelAction("SUBMIT",{formData,formSection}))
              
                //  after without logic redux 
                // const newModel = {...dataModel,src:e.target.result};
              // dispatch(datamodelAction(newModel,sectionName));
                
                // console.log(dataModel);
              

                // before redux
                // setDataModel({...dataModel,[sectionName]:{src:e.target.result}});
                // handler(sectionName,this.temporarySectionList[sectionName])
            }
        
            if(imageDOM.files[0])
                reader.readAsDataURL(imageDOM.files[0]);
        })

    }

    const handleImageClick = (e) => {
        e.preventDefault();
        document.getElementById('profile-img').click();
    }

  return (
    <>
       <label htmlFor='profile-img' className='profileLabel'>Upload Profile Picture</label>
       <img id="previewProfilePicture" className="pic" alt="Profile Pics" src="./Images/lucifer.jpeg" />
       <input type="file" section="image" id="profile-img" name="profile-img" onClick={loadImage}   src="lucifer.jpeg" accept="image/* "/>
       <button onClick={handleImageClick} className="buttonImage" >Choose File</button>

    </>
  )
  
}

export default Image