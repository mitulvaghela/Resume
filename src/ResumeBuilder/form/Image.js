import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { datamodelAction } from '../reduce/datamodelActions';
import { SECTION_TYPES } from '../reduce/datamodelTypes';
import { FormContext } from '../ResumeBuilder';
<div class="smallChild formMargin">
<label class="profileLabel" for="profile-img">Upload Profile Picture </label> 

<img id="previewProfilePicture" class="pic" alt="Profile Pics" src="./Images/lucifer.jpeg" />
<input type="file" section="image" id="profile-img" name="profile-img" onclick="loadImage(this)"   src="lucifer.jpeg" accept="image/* "/>
<button onclick="event.preventDefault(); document.getElementById('profile-img').click();" class="buttonImage" >Choose File</button>
</div >


function Image() {
    
    // const {dataModel,setDataModel} = useContext(FormContext);
    const dataModel = useSelector( (state) => state[SECTION_TYPES["IMAGE"]]);
    const dispatch = useDispatch();
    const loadImage = (e) => {
        
        const imageDOM = e.target;
        const sectionName=imageDOM.getAttribute("section");

        imageDOM.addEventListener( "change", () => {
            let reader = new FileReader();   
            reader.onload = (e) => {
                  // const newModel = {..};
                 const newModel = {...dataModel,src:e.target.result};
              dispatch(datamodelAction(newModel,sectionName));
                // setDataModel({...dataModel,[sectionName]:{src:e.target.result}});
                // handler(sectionName,this.temporarySectionList[sectionName])
                console.log(dataModel);
                imageDOM.setAttribute("src",e.target.result);
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