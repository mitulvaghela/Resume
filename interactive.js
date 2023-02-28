
// let options = document.getElementById("resume-form");
// let oldOptionValue = options.value;
let currentOptionValue;
let suffixID = "-";
let previewButton = document.getElementById("preview");
let flagPreview = false;
let form = document.getElementsByClassName("formOptions")[0];
let resumeBlock = document.getElementsByClassName("previewResume")[0];

let firstName ;
let lastName ;
let roleName;
let introductionName ;
let ProfileImageLink;
let IntroductionData = {
    firstName,
    lastName,
    roleName,
    introductionName,
    ProfileImageLink,
}
let universityName  ;
let qualificationName;
let courseName ;
let startYear ;
let endYear;
let educationData = {
    universityName,
    qualificationName,
    courseName,
    startYear,
    endYear,
};
let telephoneNumber;
let EmailId;
let linkedinId;
let addressDetails ;

let personalData = {
    telephoneNumber,
    EmailId,
    linkedinId,
    addressDetails,
};

let jobPosition ;
let jobLocation ;
let jobStart ;
let jobEnd ;
let jobDescription;
let jobData = {
    jobDescription,
    jobPosition,
    jobStart,
    jobEnd,
    jobLocation,
};

let skillField;
let skillData = {
    skillField,
};
let achievementDetails;
let achievementData = {
    achievementDetails,
};

let dataModel = {
    
        ["intro"]:  IntroductionData,  
        ["personal-info"]: personalData,
        ["education"]:  educationData,
        ["experience"]:    jobData,
        ["skills"] : skillData,
        ["achievements"]: achievementData,
}

function emptyFormData ( currentData) {
    for ( let properties in currentData){
        currentData[properties].value = "";
    }
}
let closeModalButton;
let currentModal = document.getElementById("modal");

previewButton.addEventListener ("click", (e)=> {
   
   
    let closeButton = createButton(buttonType.remove);
    closeButton.innerHTML="Close Preview";
    closeButton.classList.add("class","closeModalButton","prevButton");
    closeModalButton=closeButton;
    closeModalButton.addEventListener("click",(e)=>{
        e.preventDefault();
        currentModal.close();
    }
    )
    if(flagPreview == false) {
        let cloneBlock = resumeBlock.cloneNode(true);
        currentModal.appendChild(closeButton);
        currentModal.appendChild (cloneBlock);
        
    currentModal.showModal();
      currentModal.style = "width: 90%";
      cloneBlock.style="width: 80% ;height: 1000px; margin: auto ; ";
    
     flagPreview = true;
    }
    else{
       currentModal.innerHTML="";
       flagPreview = false;        
    }
})
window.onclick = function(event) {
    if (event.target == currentModal) {
      
      currentModal.innerHTML="";
      currentModal.style.display = "none";
    }

  }
let buttonType = {
    remove: "x",
    edit:"Edit",
};
function createButton (buttonType) {
    let btn = document.createElement("button");
    btn.innerHTML = buttonType;
    return btn;
}
// function createEditButton () {
//     let edt_btn = document.createElement("button");
//     edt_btn.innerHTML = "Edit";
//     return edt_btn;
// }
function generateRandomID (){
    return Date.now() + Math.random().toString(16).slice(2);
}

function removecontainer (e) {
    let currentId = e.target.id;
    let parentId = currentId.slice(0,-1);
    // console.log(e.target.parentNode);

    //delete that block
    console.log(document.getElementById(parentId+suffixID));   // use var for hyphen (-)
    console.log(document.getElementById(parentId+parentSuffixID));
    document.getElementById(parentId+suffixID).remove();
    document.getElementById(parentId+parentSuffixID).remove();
}
// duplicate  Tag  - removed it 😊.
function createTag (tagType) {
    return document.createElement(tagType);
}
// function createSpan (){
//     return document.createElement('span');
// }
// function createParagraph (){
//     return document.createElement('p');
// }
// function createH4 () {
//     return document.createElement('h4');
// }
let parentSuffixID = "parent";
let removeButtonSuffixId = "r";
let editButtonSuffixId = "e";
function createPreviewContainer (previewContainer,currentContainer) {
    let removeButton = createButton(buttonType.remove);
    let editButton = createButton(buttonType.edit);
    let previewBlock = createTag("div");
    let cloneContainer = currentContainer.cloneNode(true);
    previewBlock.appendChild(cloneContainer);
     let buttonParent = createTag("div");
     buttonParent.classList.add("buttonParent");
     removeButton.classList.add("buttonStyle","submitButton");
     editButton.classList.add("buttonStyle","resetButton");
     buttonParent.appendChild(removeButton);
     buttonParent.appendChild(editButton);
     previewBlock.appendChild(buttonParent);
     previewContainer.appendChild(previewBlock);
     previewContainer.classList.add("formMargin");
     let currentId = generateRandomID();
     removeButton.setAttribute('id',currentId+removeButtonSuffixId);
     editButton.setAttribute('id',currentId+editButtonSuffixId);
     previewBlock.setAttribute('id',currentId+parentSuffixID);
     currentContainer.setAttribute('id', currentId+suffixID);
         
}

let previewIntroductionFormContainer = createTag("div");
let previewPersonalInfoFormContainer = createTag("div");
let previewEducationFormContainer = createTag("div");
let previewExperienceFormContainer = createTag("div");
let previewSkillFormContainer = createTag("div");
let previewAchievementsFormContainer = createTag("div");
previewAchievementsFormContainer.classList.add("previewBlockInForm");
let previewBlockDOM = {
          ["intro"]: previewIntroductionFormContainer,
          ["personal-info"]: previewPersonalInfoFormContainer,
          ["education"]: previewEducationFormContainer,
          ["experience"]:previewExperienceFormContainer,
          ["skills"] : previewSkillFormContainer,
          ["achievements"]: previewAchievementsFormContainer,
       
}

const handleSubmitState = (currentdata,selectedElement,currentSubmitButton) => () => {
    let isSubmitActive = true;
      for (let properties in currentdata) {
        console.log(currentdata, properties, currentdata[properties].value);
          if(currentdata[properties].value == "")
            isSubmitActive = false;
      }
      console.log(isSubmitActive, currentSubmitButton);
      if(isSubmitActive)
      currentSubmitButton.disabled = false;   //   currentSubmitButton.removeAttribute('disabled');
}

let introSubmitButton;
let personalInfoSubmitButton;
let educationSubmitButton;
let experienceSubmitButton;
let skillsSubmitButton;
let achievementsSubmitButton;


function onSubmit(event) {
    console.log("snfnjfnf");
   console.log(event);
   event.preventDefault();
    let introductionSection = document.getElementsByClassName("introduction-section")[0];   //id
    let picUrl;
    introductionSection.innerHTML= `
         <div class="content-layout">
            <h1 class="name">${IntroductionData.firstName.value} <br> ${IntroductionData.lastName.value}</h1>
            <h2 class="sub-heading">${IntroductionData.roleName.value}</h2>
         </div>
         <img id="profilePicture" class="pic" alt="Profile Pics" />
         <div class="content-layout  "> 
            <h3 style="border-bottom:1px solid rgb(216,204,190)">Profile</h3> 
            <p class="paragraph" id="personal-intro">${IntroductionData.introductionName.value} </p>
         </div>`;

    let resumePictureBlock = document.getElementById("profilePicture");
    // console.log(resumePictureBlock);
    // console.log(ProfileImageLink.files[0]);
    let files = IntroductionData.ProfileImageLink.files[0];
    
    resumePictureBlock.src = URL.createObjectURL(files);

       emptyFormData(IntroductionData);
      // duplicate loop 
  
}

 function getEducationInformation ( currentData ) {
     

        let education = {
           universityQualification : currentData.getElementsByTagName('h4')[0],
           courseName : currentData.getElementsByTagName('p')[0],
            duration : currentData.getElementsByTagName('span')[0],
            
        };
        console.log(education);
        let filterIndex = education.universityQualification.innerHTML.indexOf("-");
        education.Qualification = education.universityQualification.innerHTML.substring(0,filterIndex-1);
        education.universityName = education.universityQualification.innerHTML.substring(filterIndex+2);
       
        let filterIndexForDuration = 8;
        education.startYear = education.duration.innerHTML.substring(0,filterIndexForDuration-1);
       
        education.endYear = education.duration.innerHTML.substring(filterIndexForDuration+2);
        console.log(education.startYear);
        console.log(education.endYear);
        return education;
    }
 function setEducationInformation(  setData, data ){
    
        console.log(data.universityName,data.qualificationName,setData.universityQualification);
    
        setData.universityQualification.innerHTML = data.qualificationName.value + " - " + data.universityName.value;
        setData.courseName.innerHTML = data.courseName.value;
        setData.duration.innerHTML = data.startYear.value + " - " + data.endYear.value;
    }

 function EducationPreviewEditRemoveFeatures (e, educationData) {
    e.preventDefault();
    // console.log(e.target);
    let currentEvent = e.target.innerHTML;
    let currentEventId = e.target.id;
    console.log((e.target.id).slice(0,-1)+ parentSuffixID);
    let parentId =(e.target.id).slice(0,-1)+ parentSuffixID;
    let parentEvent = document.getElementById(parentId).firstChild;
    // let parentEvent = e.target.parentNode;
    // let currentEventId = parentEvent.id;

   
    // console.log(e.target);
    // console.log(e.target.parentNode);
    // for many buttons : do it without condition
    switch (currentEvent) {
        case buttonType.remove:
            // alert('if block');
            removecontainer(e);
            break;
        case buttonType.edit:
            // console.log("parentnode of preview");
            // console.log(e.target.parentNode);
            console.log(parentEvent);
            let currentEducation = getEducationInformation(parentEvent);
               
               educationData.universityName.value = currentEducation.universityName;
               educationData.qualificationName.value = currentEducation.Qualification;
               educationData.courseName.value = currentEducation.courseName.innerHTML;
               educationData.startYear.value = currentEducation.startYear;
               educationData.endYear.value = currentEducation.endYear;
          
               educationData.universityName.setAttribute('class', currentEventId.slice(0,-1));
    }
   


 }
function onEducationSubmit() {


 


let educationSubmit = document.getElementById("edu-submit");
let educationDetails = document.getElementById("edu-details");
let previewEducationBlock = createTag("div");
// let previewEducationFormContainer = document.getElementsByClassName('education')[0];



let currBlockFilled = educationData.universityName.classList[0];
console.log(educationData);
     if(currBlockFilled && currBlockFilled[0]){
          console.log("event is edited");
               let currentPreviewBlock = getEducationInformation(document.getElementById(currBlockFilled+parentSuffixID));
               let currentBlock = getEducationInformation(document.getElementById(currBlockFilled+suffixID));
                setEducationInformation(currentPreviewBlock,educationData);
                setEducationInformation(currentBlock,educationData);

                
               educationData.universityName.removeAttribute('class');
              
     }
     else {
// let previewBlock = createTag("div");
let universityNameBlock = createTag("h4");
let yearOfEducationBlock = createTag("span");  
let courseNameBlock = createTag("p");
let currentEducationBlock = createTag("div");

//  button element  -> btn redundancy has been removed
// let btn = createRemoveButton();
// let edt_btn = createEditButton();


// add classes
currentEducationBlock.classList.add("content-title");
universityNameBlock.classList.add("content-item");
yearOfEducationBlock.classList.add("content-item");
yearOfEducationBlock.classList.add("extreme-right-item");
courseNameBlock.classList.add("content-item");

// console.log(universityName.value);
// change value of html
universityNameBlock.innerHTML = educationData.qualificationName.value + " - " + educationData.universityName.value;
yearOfEducationBlock.innerHTML = educationData.startYear.value + " - " + educationData.endYear.value;
courseNameBlock.innerHTML = educationData.courseName.value;


currentEducationBlock.appendChild(universityNameBlock);
currentEducationBlock.appendChild(yearOfEducationBlock);
currentEducationBlock.appendChild(courseNameBlock);
educationDetails.appendChild(currentEducationBlock);

// let clone_current_edu = currentEducationBlock.cloneNode(true);

createPreviewContainer(previewEducationBlock,currentEducationBlock);

// previewBlock.appendChild(btn);
// previewBlock.appendChild(edt_btn);
// previewEducationBlock.appendChild(previewBlock);

//  unique id 
// let currentId = generateRandomID();
// previewBlock.setAttribute('id',currentId);
// currentEducationBlock.setAttribute('id', currentId+suffixID);
 
console.log(previewEducationBlock);
console.log(previewEducationFormContainer);
previewEducationFormContainer.appendChild(previewEducationBlock);

// console.log(document.getElementsByClassName(currentOptionValue)[0]);

previewEducationBlock.addEventListener("click", (e)=> { 
    EducationPreviewEditRemoveFeatures(e,educationData);
})
     }
    emptyFormData(educationData);

}

function onPersonalInformationSubmit () {

  
    
    // let telephoneNumber = document.getElementById("telephone-div");
    // let email_div = document.getElementById("email-div");
    // let linkedin_div = document.getElementById("linkedin-div");
    // let add_div = document.getElementById("add-div");

let contactSection = document.getElementsByClassName("contact-section")[0];

    
   console.log("DSFffdbb");
  
     contactSection.innerHTML = `
     <div class="icon-layout content-layout>
    <h3 style="border-bottom:1px solid rgb(216,204,190)">CONTACT</h3>

    <div class="section-layout">
        <i  class="fa-solid fa-phone icon-color"></i>   
        <a class="icon-info" id="telephone-div" href="tel+919662833396"> Tel: ${personalData.telephoneNumber.value}</a>
    </div>

    <div class="section-layout">
        <i class="fa-solid fa-inbox icon-color"></i>
        <a class="icon-info" id="email-div"href="mailto:${personalData.EmailId.value}?
        subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you"
         target="_blank" >${personalData.EmailId.value}</a>
    </div> 

    <div class="section-layout">
        <i class="fa-brands fa-linkedin icon-color"></i>
        <a class="icon-info " id="linkedin-div" href="${personalData.linkedinId.value}" target="_blank">${personalData.linkedinId.value}</a>
    </div>

    <div class="section-layout">
        <i class="fa-solid fa-location-dot icon-color"></i>
        <p class="icon-info" id="add-div">${personalData.addressDetails.value}</p>
    </div> 

</div>
</div>`;


     emptyFormData(personalData);
 

}

function setJobInformation ( setData, data) {
    setData.location.innerHTML = data.jobLocation.value;
    setData.start.innerHTML = data.jobStart.value;
    setData.end.innerHTML = data.jobEnd.value;
    setData.description.innerHTML = data.jobDescription.value;
    setData.position.innerHTML = data.jobPosition.value;
    // setData.timeline.innerHTML = data.jobStart + " - " + data.jobEnd;
}
function getJobInformation (currentData) {
    console.log("currentData" + currentData.innerHTML);
    let job = {

         position: currentData.getElementsByTagName('h4')[0],
        //  timeline: currentData.getElementsByTagName('span')[0].innerText,
         location: currentData.getElementsByTagName('p')[0],
         start: currentData.getElementsByTagName('span')[0],
         end: currentData.getElementsByTagName('span')[1],
         description: currentData.getElementsByTagName('p')[1],
         
    }  
  
  
    return job;
}

function  ExperiencePreviewEditRemoveFeatures (e,jobData) {
    // e.preventDefault();
    console.log("clicked on remove/edit button");
    // console.log(e,e.target.parent.parent);
    // console.log(e.target.parent);
    let currentEvent = e.target.innerHTML;
    let currentEventId = (e.target.id).slice(0,-1);
    let parentEvent = document.getElementById(currentEventId+parentSuffixID);
    console.log(currentEventId);
    // console.log(e.target);
    console.log(e.target.parentNode);
    switch (currentEvent) {
        case buttonType.remove:
             alert("removing container");
             removecontainer(e);
             break;
        case buttonType.edit:
            console.log("parentnode of preview");
            console.log(e.target.parentNode);
            let currentJob = getJobInformation(parentEvent);
            
            jobData.jobLocation.value = currentJob.location.innerHTML; 
            jobData.jobStart.value = currentJob.start.innerHTML;
            jobData.jobEnd.value = currentJob.end.innerHTML;
            jobData.jobDescription.value = currentJob.description.innerHTML;
            jobData.jobPosition.value = currentJob.position.innerHTML;
            jobData.jobLocation.setAttribute('class', currentEventId);
    }

}
function onExperienceSubmit(){

let workDetails = document.getElementById("work-details");
let experienceSubmit =document.getElementById("exp-submit");


let previewExperienceBlock = createTag("div");
// let previewExperienceFormContainer = document.getElementsByClassName("experience")[0];



        
    let currBlockFilled = jobData.jobLocation.classList[0];
   
        if(currBlockFilled)
        {
            console.log(document.getElementById(currBlockFilled+suffixID));
               let currentPreviewBlock = getJobInformation(document.getElementById(currBlockFilled+parentSuffixID));
               let currentBlock = getJobInformation(document.getElementById(currBlockFilled+suffixID));
                 
               setJobInformation(currentPreviewBlock,jobData);
               setJobInformation(currentBlock,jobData);
            //    currBlockFilled.removeAttribute("class");
               jobData.jobLocation.removeAttribute("class");

        }
        else 
        {
        let workContainerBlock = createTag("div");
        // workContainerBlock.classList.add("content-layout");
        let workHeaderBlock = createTag("div");
        workHeaderBlock.setAttribute('class','content-title');
        
        let jobPositionBlock = createTag("h4");
        jobPositionBlock.setAttribute('class','content-item');

        let jobEndYearBlock = createTag("span");
        jobEndYearBlock.setAttribute('class',' small-content-item extreme-right-item');
        let jobStartYearBlock  = createTag("span");
        jobStartYearBlock.setAttribute('class','small-content-item extreme-right-item');
        let jobLocationBlock = createTag("p");
        jobLocationBlock.setAttribute('class','content-item');

        workHeaderBlock.appendChild(jobPositionBlock);
        workHeaderBlock.appendChild(jobStartYearBlock);
        
        workHeaderBlock.appendChild(jobEndYearBlock);
        workHeaderBlock.appendChild(jobLocationBlock);

        let jobDescriptionBlock =createTag("p");
        jobDescriptionBlock.setAttribute('class','paragraph');


        workContainerBlock.appendChild(workHeaderBlock);
        workContainerBlock.appendChild(jobDescriptionBlock);

     //  button element     //  reuse btn each time using function
     
       
        jobPositionBlock.innerHTML = jobData.jobPosition.value;
        jobLocationBlock.innerHTML = jobData.jobLocation.value;
        jobDescriptionBlock.innerHTML = jobData.jobDescription.value;
        jobStartYearBlock.innerHTML = jobData.jobStart.value;
        jobEndYearBlock.innerHTML = jobData.jobEnd.value;


        // let clone_current_exp = workContainerBlock.cloneNode(true);
         createPreviewContainer(previewExperienceBlock,workContainerBlock);
        
        
        //  unique id  
        // let currentId = generateRandomID();
        // previewBlock.setAttribute('id',currentId);
        // workContainerBlock.setAttribute('id', currentId+suffixID);
         
        console.log(previewExperienceBlock);
        console.log(workContainerBlock);
       
        previewExperienceFormContainer.appendChild(previewExperienceBlock);
        
        workDetails.appendChild(workContainerBlock);
        }

        emptyFormData(jobData);
    //    jobPosition.value="";
    //    jobLocation.value= "";
    //    jobDescription.value="";
    //    jobStart.value = "";
    //     jobEnd.value = "";     
        // make objects   and for loop 
    
previewExperienceBlock.addEventListener("click", (e)=> {
       ExperiencePreviewEditRemoveFeatures(e,jobData);
})
}

function skillPreviewEditRemoveFeatures (e) {

    e.preventDefault();
    let currentEvent = e.target.innerHTML;
    let currentEventId = e.target.parentNode.id;
    console.log(currentEventId);
    // console.log(e.target);
    switch(currentEvent) {

    case buttonType.remove:
         removecontainer(e);
         break;
    case buttonType.edit:
        console.log(e.target.parentNode.getElementsByTagName("p")[0]);
        let currentBlock = e.target.parentNode.firstChild;
        console.log(currentBlock);
        skillData.skillField.value = currentBlock.innerHTML; 
        skillData.skillField.setAttribute('class', currentEventId);
        break;   
    }
}

// create skill list

// let createSkillOrderList= function (){
//         let orderList;

//         function createInstance (skillDetailsContainer){
//             let orderList = createTag('ol');
//             orderList.setAttribute('class', 'parent-small-item');
//             orderList.setAttribute('id','skills-details');
//             skillDetailsContainer.appendChild(orderList);

//             return orderList;
//         }
//         return {
//              getInstance: function (skillDetailsContainer){
              
//                    if(!orderList) {
//                     orderList = createInstance(skillDetailsContainer);
//                    }
//                    return orderList;
//             }
//         } 

// }

function onSkillsSubmit () {
    

let skillsDetailsBlock = document.getElementById("skills-details");
let skillsSubmit = document.getElementById("skills-submit");
// let previewSkillFormContainer = document.getElementsByClassName("skills")[0];

let previewSkillBlock = createTag("div");




    let currentPreviewBlock = document.getElementById(skillData.skillField.classList[0]);
    let currentBlock = document.getElementById(skillData.skillField.classList[0]+suffixID);
    console.log(currentPreviewBlock);
    console.log("hello",currentBlock);
    
    if(currentPreviewBlock){
           currentPreviewBlock.firstChild.innerHTML = skillData.skillField.value;
            currentBlock.innerHTML = skillData.skillField.value;
            skillData.skillField.removeAttribute('class');
    }
    else {

    // let previewBlock = createTag("div");
  
    // let btn = createRemoveButton();
    // let edt_btn = createEditButton();
    let skillItem = document.createElement("li");
    skillItem.setAttribute('class','small-item');

    skillItem.innerHTML = skillData.skillField.value;

    
    
//    let clone_skill_item = skillItem.cloneNode(true);
   createPreviewContainer(previewSkillBlock,skillItem);
//    previewBlock.setAttribute('class','small-item');

    // previewBlock.appendChild(btn);
    // previewBlock.appendChild(edt_btn);

    // let currentId = generateRandomID();
    // previewBlock.setAttribute('id',currentId);
    // skillItem.setAttribute('id', currentId+suffixID);

    // previewSkillBlock.appendChild(previewBlock);
    skillsDetailsBlock.appendChild(skillItem);
    previewSkillFormContainer.appendChild(previewSkillBlock);
    }
     emptyFormData(skillData);



previewSkillBlock.addEventListener("click", (e)=> {
        skillPreviewEditRemoveFeatures(e);
     // removecontainer(e);
})

}

function onAchievementsSubmit() {

   

// let achievement_submit = document.getElementById("achievements-submit");

let achievementsDetails = document.getElementById("achievements-details");

let previewAchievementsBlock = createTag("div");
// let previewAchievementsFormContainer = document.getElementsByClassName("achievements")[0];


// achievement_submit.addEventListener("click", (e)=> {
   
    let currentPreviewBlock = document.getElementById(achievementData.achievementDetails.classList[0]);
    let currentBlock = document.getElementById(achievementData.achievementDetails.classList[0]+suffixID);
    console.log(currentPreviewBlock);
    console.log("hello",currentBlock);
    
    if(currentPreviewBlock){
           currentPreviewBlock.firstChild.innerHTML = achievementData.achievementDetails.value;
            currentBlock.innerHTML = achievementData.achievementDetails.value;
            achievementData.achievementDetails.removeAttribute('class');
    }
    else {
   

        // let btn = createRemoveButton();
        // let edt_btn = createEditButton();
    let achievementsBlock = createTag("p");
    achievementsBlock.setAttribute('class','paragraph');
    // let previewBlock = createTag("div");
    
    achievementsBlock.innerHTML = achievementData.achievementDetails.value;
    

    // let clone_achiv_block = achievementsBlock.cloneNode(true);
    createPreviewContainer(previewAchievementsBlock,achievementsBlock);

    // previewBlock.appendChild(btn);
    // previewBlock.appendChild(edt_btn);
    // previewAchievementsBlock.appendChild(previewBlock);
    let currentId = generateRandomID();
    // previewBlock.setAttribute('id',currentId);
    // achievementsBlock.setAttribute('id', currentId+suffixID);


    
    previewAchievementsFormContainer.appendChild(previewAchievementsBlock);

    achievementsDetails.appendChild(achievementsBlock);
   
   
    }
    emptyFormData(achievementData);

// })

 
previewAchievementsBlock.addEventListener( "click", (e)=>{
     achievementsPreviewEditRemoveFeatures(e);
})


}
 function achievementsPreviewEditRemoveFeatures (e) {
    e.preventDefault();
    let currentEvent = e.target.innerHTML;
    let currentEventId = e.target.parentNode.id;
    console.log(currentEventId);
    // console.log(e.target);
    switch (currentEvent) {
        case buttonType.remove:
            removecontainer(e);
            break;
        case buttonType.edit:
            console.log(e.target.parentNode.getElementsByTagName("p")[0]);
            let currentBlock = e.target.parentNode.getElementsByTagName("p")[0];
            achievementData.achievementDetails.value = currentBlock.innerHTML; 
            achievementData.achievementDetails.setAttribute('class', currentEventId);
            break;
    }
 }


let introBlock =  `
<form  class="intro  form-layout">
<div class="firstLastName">
   <div class="formMargin smallChild">
    <label class="profileLabel" for="profile-img">Upload Profile Picture </label> 
    
    <img id="previewProfilePicture" class="pic" alt="Profile Pics" src="lucifer.jpeg" />
    <input type="file" id="profile-img" name="profile-img   accept="image/* ">
    <button onclick="event.preventDefault(); document.getElementById('profile-img').click();" class="buttonImage" >Choose File</button>
  </div >

<div class="bigChild">
    <div class="firstLastName">
        <div class="halfChild formMargin">
        <label for="fname">First Name:</label>
        <input type="text" id="fname" placeHolder="e.g. Mitul" name="fname">
        </div>
        <div class="halfChild formMargin">
        <label for="fname">Last Name:</label>
        <input type="text" id="lname" placeHolder="e.g. Vaghela" name="lname">
        </div>
    </div>
        <div class="formMargin">
        <label for="roleName">Type of Role:</label>
        <input type="text" id="roleName" placeHolder="e.g. Software Engineer" name="roleName">
        </div>
        <div class="formMargin">
        <label for="introduction">Introduce Yourself </label>
        <input type="textarea" id="introduction" placeHolder="e.g. I have good knowledge regarding data-structures,..."name="introduction">
        </div>
    
        <div class="buttonParent formMargin">
        <button type="reset" class="buttonStyle resetButton">Reset</button>
        <button type="button"  id="intro-submit" class="buttonStyle submitButton"  value="submit" onClick="onSubmit(event)">Submit</button>
        </div>
</div>        
</div>

    </form>
`;

let personalInfoBlock = `
<form  class="personal-info  form-layout">
<div class="firstLastName">
<div class="formMargin halfChild" >
<label for="tnumber">Telephone number</label>
<input type="tel" placeHolder="e.g. +91 9662833396" id="tnumber" name="tnumber">
</div>
<div class="formMargin halfChild" >
<label for="emailid">Email ID</label>
<input type="email" placeHolder="e.g. vmdipakbhai@tekion.com "id="emailid" name="emailid">
</div>
</div>
<div class="firstLastName">
<div class="formMargin halfChild" >
<label for="linkedinid">Linkedin Profile URL</label>
<input type="text" placeHolder="e.g. https://linkedin/com/mitul-vaghela" id="linkedinid" name="linkedinid">
</div>
<div class="formMargin halfChild" >
<label for="address">Address </label>
<input type="text" placeHolder="e.g. Katargam, Surat, Gujarat" id="address" name="address">
</div>
</div>
<div class="buttonParent formMargin">
<button type="reset" class="resetButton buttonStyle">Reset</button>
<button type="button"  class="submitButton buttonStyle" id="ps-submit"   value="submit" onClick="onPersonalInformationSubmit()">Submit</button>
</div>
</form>
`;


let educationBlock =` 
<form  class="education  form-layout">
    <div class="firstLastName">
        <div class="formMargin halfChild">
            <label for="uname">University Name:</label>
            <input type="text" id="uname" placeHolder="e.g. Nirma " name="uname">
        </div>
        <div class="formMargin halfChild">
            <label for="qname">Qualification:</label>
            <input type="text" id="qname" placeHolder="e.g. Bachelor Degree " name="qname">
        </div> 
    </div>
    <div class="formMargin">
        <label for="cname">Course Name:</label>
        <input type="text" id="cname"  placeholder="e.g. Computer Science " name="cname">
    </div>
    <div class="firstLastName">
        <div class="formMargin halfChild">
            <label for="syear">Starting Year</label>
            <input type="text" placeholder="Date" onfocus="(this.type='month')" onblur="(this.type='text')" id="syear" name="syear">
        </div>
        <div class="formMargin halfChild">
            <label for="eyear">Ending Year</label>
            <input type="text" placeholder="Date" onfocus="(this.type='month')" onblur="(this.type='text')" id="eyear" name="eyear">
        </div>
    </div>

    <div class="buttonParent formMargin">
        <button type="reset" class="buttonStyle resetButton">Reset</button>
        <button type="button"  id="edu-submit"   class="buttonStyle submitButton" value="submit" onClick='onEducationSubmit()'>Submit</button>
    </div>

</form>
`
;

let experienceBlock  = `
<form  class="experience  form-layout">
    <div class="firstLastName">
        <div class="formMargin halfChild">
            <label for="jposition">Job Position:</label>
            <input type="text" id="jposition" placeholder="e.g. Software Engineer" name="jposition">
        </div>
        <div class="formMargin halfChild">
            <label for="jlocation">Job Location:</label>
            <input type="text" id="jlocation" placeholder="e.g. Surat " name="jlocation">
        </div>
    </div>
    <div class="firstLastName">
    <div class="formMargin halfChild">
        <label for="jstart">Job Start</label>
        <input type="text" placeholder="Date" onfocus="(this.type='month')" onblur="(this.type='text')"   id="jstart" name="jstart">
    </div>
    
    <div class="formMargin halfChild">
        <label for="jend"> Job End</label>
        <input type="text" placeholder="Date" onfocus="(this.type='month')" onblur="(this.type='text')" id="jend" name="jend">
    </div>
    </div>
    <div class="formMargin">
        <label for="jdescription">Description</label>
        <input type="text" id="jdescription" placeholder="I have worked on many techonologies,..." name="jdescription">
    </div>

    <div class="buttonParent formMargin">
        <button type="reset" class="buttonStyle resetButton" >Reset</button>
        <button type="button"  class="buttonStyle submitButton" id="exp-submit"   value="submit" onClick="onExperienceSubmit()">Submit</button>
    </div>
</form>
`;

let skillsBlock = `
<form  class="skills form-layout">
<div class="formMargin">
<label for="skill-field">Skill</label>
<input type="text" placeHolder="e.g. Java, MATLAB,... " id="skill-field" name="skill-field">
</div>
<div class="buttonParent formMargin">
<button type="reset" class="resetButton buttonStyle">Reset</button>
<button type="button"  class="submitButton buttonStyle " id="skills-submit"   value="add" onClick="onSkillsSubmit()">Submit</button>
</div>
</form> `;

let achievementsBlock  =`
<form  class="achievements  form-layout">
<div class="formMargin">
<label for="achievements-field">Achievements</label>
<textarea type="text" placeHolder="e.g. I have secured 4th Rank in Regional Board Exam " id="achievements-field" name="achievements-field"></textarea>
</div>
<div class="buttonParent formMargin">
<button type="reset" class="resetButton buttonStyle " >Reset</button>
<button type="button" class="submitButton buttonStyle " id="achievements-submit"   value="add" onClick="onAchievementsSubmit()">Submit</button>
</div>
</form>`;

let formBlock = {
          ["intro"]: introBlock,  
          ["personal-info"]: personalInfoBlock,
          ["education"]: educationBlock,
          ["experience"]:experienceBlock,
          ["skills"] : skillsBlock,
          ["achievements"]: achievementsBlock,
        };

let fetchObjects = {
    ["intro"]: introFetch,  
    ["personal-info"]: personalInfoFetch,
    ["education"]: educationFetch,
    ["experience"]:experienceFetch,
    ["skills"] : skillsFetch,
    ["achievements"]: achievementsFetch,
}

function introFetch(currentBlockValue){
     IntroductionData.firstName = document.getElementById("fname");
     IntroductionData.lastName = document.getElementById("lname");
     IntroductionData.roleName = document.getElementById("roleName");
     IntroductionData.introductionName = document.getElementById("introduction");
     IntroductionData.ProfileImageLink = document.getElementById("profile-img");
     submitButton[currentBlockValue] = document.getElementById("intro-submit");
     console.log("fetched dom of introduction part",submitButton.introSubmitButton );
     

}
function personalInfoFetch (currentBlockValue) {
    personalData.telephoneNumber = document.getElementById("tnumber");
    personalData.EmailId = document.getElementById("emailid");
    personalData.linkedinId = document.getElementById("linkedinid");
    personalData.addressDetails = document.getElementById("address");
    submitButton[currentBlockValue] = document.getElementById("ps-submit");
}

function educationFetch (currentBlockValue) {
    educationData.universityName  = document.getElementById("uname");
    educationData.qualificationName = document.getElementById("qname");
    educationData.courseName = document.getElementById("cname");
    educationData.startYear = document.getElementById("syear");
    educationData.endYear = document.getElementById("eyear");
    submitButton[currentBlockValue] = document.getElementById("edu-submit");

    console.log("fetch is compeleted");
}

function experienceFetch (currentBlockValue) {
    jobData.jobPosition = document.getElementById("jposition");
    jobData.jobLocation = document.getElementById("jlocation");
    jobData.jobStart = document.getElementById("jstart");
    jobData.jobEnd = document.getElementById("jend");
    jobData.jobDescription = document.getElementById("jdescription");
    submitButton[currentBlockValue] = document.getElementById("exp-submit");

}
function skillsFetch (currentBlockValue) {
     skillData.skillField = document.getElementById("skill-field");
     submitButton[currentBlockValue] = document.getElementById("skills-submit");
}
function achievementsFetch (currentBlockValue) {
     achievementData.achievementDetails =  document.getElementById("achievements-field");
     submitButton[currentBlockValue] = document.getElementById("achievements-submit");
     console.log("achievments",submitButton[currentBlockValue]);
}
let formParent = document.getElementsByClassName('formOptions')[0];

const submitButton = {
    ["intro"]: introSubmitButton,  
    ["personal-info"]: personalInfoSubmitButton,
    ["education"]: educationSubmitButton,
    ["experience"]:experienceSubmitButton,
    ["skills"] : skillsSubmitButton,
    ["achievements"]: achievementsSubmitButton,
}


function createPrevNextButton () {
    
    let block = createTag("div");
    block.classList.add("buttonParent","formMargin");
    let prevButton = createTag("button");
    prevButton.innerHTML="Previous";
    prevButton.setAttribute("id","prevButtonForChange");
    prevButton.classList.add("resetButton","prevButton");
    
    let nextButton = createTag("button");
    nextButton.innerHTML="Next";
    nextButton.classList.add("menuBarButton","nextButton");
    nextButton.setAttribute("id","nextButtonForChange");
    block.appendChild(prevButton);
    block.appendChild(nextButton);
    

      return block;
}
let previousMenuBarButton= null;

const sectionName = new Map([
    
    [1,"intro"],
    [6 ,"personal-info"],
   [ 2 , "education"],
   [ 3 , "experience"],
   [ 4 ,"skills"],
    [5 , "achievements"],
    ["intro", 1],
    ["personal-info", 6],
    ["education", 2] ,
    ["experience", 3],
    ["skills", 4],
    [ "achievements", 5],
]);
let sectionCounter = 0;
let previousNextButton = createPrevNextButton();
let previousButton, nextButton ;

console.log(previousButton);



document.addEventListener("click", function(e){
    const target = e.target.id; // Or any other selector.
  
    if(target=="prevButtonForChange"){
        console.log(sectionCounter,"prev button");
        
        if(sectionCounter == 1)
        {
            return;
        }
        sectionCounter--;
        // let currentSection = sectionName.get(sectionCounter);
      
        let currentButton = document.getElementsByClassName("menuBar")[0];
        
        let currentSection = currentButton.getElementsByTagName("button")[sectionCounter-1];
        console.log(currentSection);
        formReload(currentSection);

      // Do something with `target`.
    }
     if (target == "nextButtonForChange"){
        console.log(sectionCounter,"next button");
    
        if(sectionCounter == 6)
        {
            return;
        }
        sectionCounter++;
        // let currentSection = sectionName.get(sectionCounter);
      
        let currentButton = document.getElementsByClassName("menuBar")[0];
        
        let currentSection = currentButton.getElementsByTagName("button")[sectionCounter-1];
        console.log(currentSection);
        formReload(currentSection);
     }
  });


function formReload(block) {
      console.log(block.value);
      let currentBlockValue = block.value;
     sectionCounter = sectionName.get(block.value);
        if(previousMenuBarButton)
        previousMenuBarButton.classList.remove("changeColor");
        previousMenuBarButton = block;
        block.classList.add("changeColor");
      
       console.log("form is opened");
       formParent.innerHTML = formBlock[block.value] ;
       formParent.appendChild(previousNextButton);
       formParent.appendChild(previewBlockDOM[block.value]);
       fetchObjects[block.value](currentBlockValue);
       

     console.log(sectionCounter,"in formReload");
       previousButton = document.getElementsByClassName("prevButton")[0];
       nextButton = document.getElementsByClassName("nextButton")[0];

       console.log(submitButton,currentBlockValue,submitButton[currentBlockValue]);
       submitButton[currentBlockValue].setAttribute("disabled",true);
      const currentBlockSection = dataModel[currentBlockValue];
  for (let item in currentBlockSection) {

    const selectedElement = currentBlockSection[item];
    console.log(selectedElement);
    selectedElement.addEventListener('change', handleSubmitState(currentBlockSection, selectedElement,submitButton[currentBlockValue]));
   
}



}
