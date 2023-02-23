
let options = document.getElementById("resume-form");
let oldOptionValue = options.value;
let currentOptionValue;
let suffixID = "-";
let previewButton = document.getElementById("preview");
let flagPreview = false;
let form = document.getElementsByClassName("form-main")[0];
let resumeBlock = document.getElementsByClassName("resume-main")[0];

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
let personalInfoSubmit;
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
    IntroductionData,
    personalData,
    educationData,
    jobData,
    skillData,
    achievementData,
}

function emptyFormData ( currentData) {
    for ( let properties in currentData){
        currentData[properties].value = "";
    }
}
previewButton.addEventListener ("click", (e)=> {
   
    
    if(flagPreview == false) {
   

    resumeBlock.style="width: 80% ;height: 1000px; margin: auto ; ";
    form.style.display = "none";
    flagPreview = true;
    }
    else{
        
        resumeBlock.style="";
        // resumeBlock.classList.remove("fullwidth");
        form.style.display = "block";
        flagPreview = false;
          
    }

})
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
    let parentId = e.target.parentNode.id;
    // console.log(e.target.parentNode);

    //delete that block
    console.log(document.getElementById(parentId+suffixID));   // use var for hyphen (-)
    console.log(document.getElementById(parentId));
    document.getElementById(parentId+suffixID).remove();
    document.getElementById(parentId).remove();
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
function createPreviewContainer (previewContainer,currentContainer) {
    let removeButton = createButton(buttonType.remove);
    let editButton = createButton(buttonType.edit);
    let previewBlock = createTag("div");
    let cloneContainer = currentContainer.cloneNode(true);
    previewBlock.appendChild(cloneContainer);
    
     previewBlock.appendChild(removeButton);
     previewBlock.appendChild(editButton);
     previewContainer.appendChild(previewBlock);

     let currentId = generateRandomID();
     previewBlock.setAttribute('id',currentId);
     currentContainer.setAttribute('id', currentId+suffixID);
         
}

let previewIntroductionFormContainer = createTag("div");
let previewPersonalInfoFormContainer = createTag("div");
let previewEducationFormContainer = createTag("div");
let previewExperienceFormContainer = createTag("div");
let previewSkillFormContainer = createTag("div");
let previewAchievementsFormContainer = createTag("div");

let previewBlockDOM = {
          ["intro"]: previewIntroductionFormContainer,
          ["personal-info"]: previewPersonalInfoFormContainer,
          ["education"]: previewEducationFormContainer,
          ["experience"]:previewExperienceFormContainer,
          ["skills"] : previewSkillFormContainer,
          ["achievements"]: previewAchievementsFormContainer,
       
}
function onSubmit() {
   
  
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
        let filterIndex = education.universityQualification.innerHTML.indexOf("-");
        education.Qualification = education.universityQualification.innerHTML.substring(0,filterIndex-1);
        education.universityName = education.universityQualification.innerHTML.substring(filterIndex+2);
        let filterIndexForDuration = education.duration.innerHTML.indexOf("-");
        education.startYear = education.duration.innerHTML.substring(0,filterIndexForDuration-1);
        education.endYear = education.duration.innerHTML.substring(filterIndexForDuration+2);
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
    let parentEvent = e.target.parentNode;
    let currentEventId = parentEvent.id;

    console.log(currentEventId);
    // console.log(e.target);
    // console.log(e.target.parentNode);
    // for many buttons : do it without condition
    switch (currentEvent) {
        case buttonType.remove:
            alert('if block');
            removecontainer(e);
            break;
        case buttonType.edit:
            // console.log("parentnode of preview");
            // console.log(e.target.parentNode);
            let currentEducation = getEducationInformation(parentEvent);
               
               educationData.universityName.value = currentEducation.universityName;
               educationData.qualificationName.value = currentEducation.Qualification;
               educationData.courseName.value = currentEducation.courseName.innerHTML;
               educationData.startYear.value = currentEducation.startYear;
               educationData.endYear.value = currentEducation.endYear;
          
               educationData.universityName.setAttribute('class', currentEventId);
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
               let currentPreviewBlock = getEducationInformation(document.getElementById(currBlockFilled));
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
    let personalBlock = createTag("div");
    personalBlock.setAttribute('class','icon-layout content-layout');

     personalBlock.innerHTML = `
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

</div>`;
  contactSection.appendChild(personalBlock);

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
    e.preventDefault();
    console.log(e.target);
    let currentEvent = e.target.innerHTML;
    let currentEventId = e.target.parentNode.id;
    console.log(currentEventId);
    // console.log(e.target);
    console.log(e.target.parentNode);
    switch (currentEvent) {
        case buttonType.remove:
             removecontainer(e);
             break;
        case buttonType.edit:
            console.log("parentnode of preview");
            console.log(e.target.parentNode);
            let currentJob = getJobInformation(e.target.parentNode);
            
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
               let currentPreviewBlock = getJobInformation(document.getElementById(currBlockFilled));
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
previewSkillBlock.setAttribute('class','parent-small-item');




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
<div  class="intro  form-layout">
<label for="fname">First Name:</label><br>
<input type="text" id="fname" name="fname"><br>

<label for="fname">Last Name:</label><br>
<input type="text" id="lname" name="lname"><br>

<label for="roleName">Type of Role:</label><br>
<input type="text" id="roleName" name="roleName"><br>

<label for="introduction">Introduce Yourself </label><br>
<input type="textarea" id="introduction" name="introduction"><br>
<label for="profile-img">Upload Profile Pic </label> <br>
<input type="file" id="profile-img" name="profile-img  accept="image/* "><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="intro-submit"   value="submit" onClick="onSubmit()">Submit</button>
</div>
</div>
`;

let personalInfoBlock = `
<div  class="personal-info  form-layout">
<label for="tnumber">Telephone number</label><br>
<input type="tel" id="tnumber" name="tnumber"><br>
<label for="emailid">Email ID</label><br>
<input type="email" id="emailid" name="emailid"><br>

<label for="linkedinid">Linkedin Profile URL</label><br>
<input type="text" id="linkedinid" name="linkedinid"><br>
<label for="address">Address </label><br>
<input type="text" id="address" name="address"><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="ps-submit"   value="submit" onClick="onPersonalInformationSubmit()">Submit</button>
</div>
</div>
`;


let educationBlock =` 
<div  class="education  form-layout">
<label for="uname">University Name:</label><br>
<input type="text" id="uname" name="uname"><br>
<label for="qname">Qualification:</label><br>
<input type="text" id="qname" name="qname"><br>
<label for="cname">Course Name:</label><br>
<input type="text" id="cname" name="cname"><br>
<label for="syear">Starting Year</label><br>
<input type="number" placeholder="YYYY" id="syear" name="syear"><br>
<label for="eyear">Ending Year</label><br>
<input type="number" placeholder="YYYY" id="eyear" name="eyear"><br>

<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="edu-submit"   value="submit" onClick='onEducationSubmit()'>Submit</button>
</div>
<br>
</div>`
;

let experienceBlock  = `<div  class="experience  form-layout">
<label for="jposition">Job Position:</label><br>
<input type="text" id="jposition" name="jposition"><br>
<label for="jlocation">Job Location:</label><br>
<input type="text" id="jlocation" name="jlocation"><br>
<label for="jstart">Job Start</label><br>
<input type="month" placeholder="MM-YYYY"  id="jstart" name="jstart"><br>
<label for="jend"> Job End</label><br>
<input type="month" placeholder="MM-YYYY" id="jend" name="jend"><br>
<label for="jdescription">Description</label><br>
<input type="text" id="jdescription" name="jdescription"><br>

<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="exp-submit"   value="submit" onClick="onExperienceSubmit()">Submit</button>
</div>
</div>
`;

let skillsBlock = `
<div  class="skills form-layout">
<label for="skill-field">Skill</label><br>
<input type="text" id="skill-field" name="skill-field"><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="skills-submit"   value="add" onClick="onSkillsSubmit()">Submit</button>
</div>
</div> `;

let achievementsBlock  =`
<div  class="achievements  form-layout">
<label for="achievements-field">Achievements</label><br>
<textarea type="text" id="achievements-field" name="achievements-field"></textarea><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="achievements-submit"   value="add" onClick="onAchievementsSubmit()">Submit</button>
</div>
</div>`;

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

function introFetch(){
     IntroductionData.firstName = document.getElementById("fname");
     IntroductionData.lastName = document.getElementById("lname");
     IntroductionData.roleName = document.getElementById("roleName");
     IntroductionData.introductionName = document.getElementById("introduction");
     IntroductionData.ProfileImageLink = document.getElementById("profile-img");
    
}
function personalInfoFetch () {
    personalData.telephoneNumber = document.getElementById("tnumber");
    personalData.EmailId = document.getElementById("emailid");
    personalData.linkedinId = document.getElementById("linkedinid");
    personalData.addressDetails = document.getElementById("address");
    personalData.personalInfoSubmit = document.getElementById("ps-submit");
}

function educationFetch () {
    educationData.universityName  = document.getElementById("uname");
    educationData.qualificationName = document.getElementById("qname");
    educationData.courseName = document.getElementById("cname");
    educationData.startYear = document.getElementById("syear");
    educationData.endYear = document.getElementById("eyear");
    console.log("fetch is compeleted");
}

function experienceFetch () {
    jobData.jobPosition = document.getElementById("jposition");
    jobData.jobLocation = document.getElementById("jlocation");
    jobData.jobStart = document.getElementById("jstart");
    jobData.jobEnd = document.getElementById("jend");
    jobData.jobDescription = document.getElementById("jdescription");
}
function skillsFetch () {
     skillData.skillField = document.getElementById("skill-field");
}
function achievementsFetch () {
     achievementData.achievementDetails =  document.getElementById("achievements-field");
}
let formParent = document.getElementsByClassName('formOptions')[0];



options.addEventListener( "change", ()=> {
        // e.preventDefault();
    let currentOptionValue = options.value;
    // console.log(formBlock[currentOptionValue]);
    formParent.innerHTML = formBlock[currentOptionValue] ;
    formParent.appendChild(previewBlockDOM[currentOptionValue]); 
    fetchObjects[currentOptionValue]();

    // document.getElementsByClassName(currentOptionValue)[0].classList.remove("hidden-form");
    // if(oldOptionValue!= "none")
    // document.getElementsByClassName(oldOptionValue)[0].classList.add("hidden-form");
   

    // console.log(firstName.value);    
    // console.log(lastName.value);
    // console.log(introductionName.value);
//  console.log(document.getElementsByClassName("name")[0].innerHTML)  ;
//  document.getElementsByClassName("name")[0].innerHTML= firstName.value + "<br>"+ lastName.value;
//  document.getElementsByClassName("sub-heading")[0].innerHTML = roleName.value;
//  console.log(document.getElementById("personal-intro"));
//  document.getElementById("personal-intro").innerHTML = introductionName.value;
 
})


 


// let   submit = document.getElementById("intro-submit");
// let firstName = document.getElementById("fname");
// let lastName = document.getElementById("lname");
// let roleName = document.getElementById("roleName");
// let introductionName = document.getElementById("introduction");
// let ProfileImageLink = document.getElementById("profile-img");
// let introductionSection = document.getElementsByClassName("introduction-section")[0];   //id
// let picUrl;

// ProfileImageLink.addEventListener( "change", (e)=> {
//     picUrl = URL.createObjectURL(e.target.files[0]);

// })
// submit.addEventListener( "click", (e)=> {
//     e.preventDefault();
// introductionSection.innerHTML= `
//      <div class="content-layout">
//         <h1 class="name">${firstName.value} <br> ${lastName.value}</h1>
//         <h2 class="sub-heading">${roleName.value}</h2>
//      </div>
//      <img class="pic" src="$_{picUrl}" alt="Profile Pics" />
//      <div class="content-layout  "> 
//         <h3 style="border-bottom:1px solid rgb(216,204,190)">Profile</h3> 
//         <p class="paragraph" id="personal-intro">${introductionName.value} </p>
//      </div>`;
// });
   
//   console.log(ProfileImageLink);
    
  
//      submit.addEventListener( "click", (e)=> {
//         e.preventDefault();
//     introductionSection.innerHTML= `
//          <div class="content-layout">
//             <h1 class="name">${firstName.value} <br> ${lastName.value}</h1>
//             <h2 class="sub-heading">${roleName.value}</h2>
//          </div>
//          <img class="pic" src="lucifer.jpeg" alt="Profile Pics" />
//          <div class="content-layout  "> 
//             <h3 style="border-bottom:1px solid rgb(216,204,190)">Profile</h3> 
//             <p class="paragraph" id="personal-intro">${introductionName.value} </p>
//          </div>`;

//     console.log(firstName.value);    
//     console.log(lastName.value);
//     console.log(introductionName.value);
// //  console.log(document.getElementsByClassName("name")[0].innerHTML)  ;
// //  document.getElementsByClassName("name")[0].innerHTML= firstName.value + "<br>"+ lastName.value;
// //  document.getElementsByClassName("sub-heading")[0].innerHTML = roleName.value;
// //  console.log(document.getElementById("personal-intro"));
// //  document.getElementById("personal-intro").innerHTML = introductionName.value;
 
// })




// let universityName = document.getElementById("uname");
// let qualificationName = document.getElementById("qname");
// let courseName = document.getElementById("cname");
// let startYear = document.getElementById("syear");
// let endYear = document.getElementById("eyear");


// let educationSubmit = document.getElementById("edu-submit");
// let educationDetails = document.getElementById("edu-details");
// let previewEducationBlock = createTag("div");
// // previewEducationBlock.setAttribute('id','preview-edu');
// let previewEducationFormContainer = document.getElementsByClassName('education')[0];
// console.log(previewEducationFormContainer);
// let educationData = {
//     universityName,
//     qualificationName,
//     courseName,
//     startYear,
//     endYear,
// };

// function getEducationInformation ( currentData ) {
     

//     let education = {
//        universityQualification : currentData.getElementsByTagName('h4')[0],
//        courseName : currentData.getElementsByTagName('p')[0],
//         duration : currentData.getElementsByTagName('span')[0],
        
//     };
//     let filterIndex = education.universityQualification.innerHTML.indexOf("-");
//     education.Qualification = education.universityQualification.innerHTML.substring(0,filterIndex-1);
//     education.universityName = education.universityQualification.innerHTML.substring(filterIndex+2);
//     let filterIndexForDuration = education.duration.innerHTML.indexOf("-");
//     education.startYear = education.duration.innerHTML.substring(0,filterIndexForDuration-1);
//     education.endYear = education.duration.innerHTML.substring(filterIndexForDuration+2);
//     return education;
// }
// function setEducationInformation(  setData, data ){

//     console.log(data.universityName,data.qualificationName,setData.universityQualification);

//     setData.universityQualification.innerHTML = data.universityName.value + " - " + data.qualificationName.value;
//     setData.courseName.innerHTML = data.courseName.value;
//     setData.duration.innerHTML = data.startYear.value + " - " + data.endYear.value;
// }

// educationSubmit.addEventListener("click", () => {
//     // to make container  

//      let currBlockFilled = universityName.classList[0];
//      if(currBlockFilled){
//                let currentPreviewBlock = getEducationInformation(document.getElementById(currBlockFilled));
//                let currentBlock = getEducationInformation(document.getElementById(currBlockFilled+suffixID));
//                 setEducationInformation(currentPreviewBlock,educationData);
//                 setEducationInformation(currentBlock,educationData);

                
//                universityName.removeAttribute('class');
//      }
//      else
//      {
//     let currentEducationBlock = createTag("div");
//     let previewBlock = createTag("div");
//     let universityNameBlock = createTag("h4");
//     let yearOfEducationBlock = createTag("span");  
//     let courseNameBlock = createTag("p");
//     //  button element  -> btn redundancy has been removed
//     let btn = createRemoveButton();
//     let edt_btn = createEditButton();
  
    
//     // add classes
//     currentEducationBlock.classList.add("content-title");
//     universityNameBlock.classList.add("content-item");
//     yearOfEducationBlock.classList.add("content-item");
//     yearOfEducationBlock.classList.add("extreme-right-item");
//     courseNameBlock.classList.add("content-item");

//     // console.log(universityName.value);
//     // change value of html
//     universityNameBlock.innerHTML = qualificationName.value + " - " + universityName.value;
//     yearOfEducationBlock.innerHTML = startYear.value + " - " + endYear.value;
//     courseNameBlock.innerHTML = courseName.value;

    
//     currentEducationBlock.appendChild(universityNameBlock);
//     currentEducationBlock.appendChild(yearOfEducationBlock);
//     currentEducationBlock.appendChild(courseNameBlock);
//     educationDetails.appendChild(currentEducationBlock);

//     let clone_current_edu = currentEducationBlock.cloneNode(true);
//     previewBlock.appendChild(clone_current_edu);

//     previewBlock.appendChild(btn);
//     previewBlock.appendChild(edt_btn);
//     previewEducationBlock.appendChild(previewBlock);
    
//     //  unique id 
//     let currentId = Date.now() + Math.random().toString(16).slice(2);
//     previewBlock.setAttribute('id',currentId);
//     currentEducationBlock.setAttribute('id', currentId+suffixID);
     
//     console.log(previewEducationBlock);
//     console.log(previewEducationFormContainer);
//     previewEducationFormContainer.appendChild(previewEducationBlock);
   
//     console.log(document.getElementsByClassName(currentOptionValue)[0]);
//      }
//     startYear.value ="";
//     endYear.value ="";
//     courseName.value = "";
//     universityName.value="";
//     qualificationName.value = "";
   
// })



// previewEducationBlock.addEventListener("click", (e)=> {
   
//     e.preventDefault();
//     alert('edit');
//     console.log(e.target);
//     let currentEvent = e.target.innerHTML;
//     let currentEventId = e.target.parentNode.id;
//     console.log(currentEventId);
//     // console.log(e.target);
//     console.log(e.target.parentNode);
//     if(currentEvent === "x"){
//         alert('if block');
//         removecontainer(e);
//     }
//     else {
//         alert('else block');
//         console.log("parentnode of preview");
//          console.log(e.target.parentNode);
//          let currentJob = getEducationInformation(e.target.parentNode);
      
//            universityName.value = currentJob.universityName;
//            qualificationName.value = currentJob.Qualification;
//            courseName.value = currentJob.courseName.innerHTML;
//            startYear.value = currentJob.startYear;
//            endYear.value = currentJob.endYear;
      
//         universityName.setAttribute('class', currentEventId);
//     }

// //    removecontainer(e);


// })


// personal information

// let telephoneNumber = document.getElementById("tnumber");
// let EmailId = document.getElementById("emailid");
// let linkedinId = document.getElementById("linkedinid");
// let addressDetails = document.getElementById("address");
// let personalInfoSubmit = document.getElementById("ps-submit");


// let telephoneNumber = document.getElementById("telephone-div");
// let email_div = document.getElementById("email-div");
// let linkedin_div = document.getElementById("linkedin-div");
// let add_div = document.getElementById("add-div");
// let ps_container = document.getElementsByClassName('personal-info')[0];
// let preview_ps = createTag("div");

//create container 

// let parent_ps = createTag("div");
// parent_ps.classList.add("icon-layout content-layout");

// parent_ps.innerHTML =<h3 style="border-bottom:1px solid rgb(216,204,190)">CONTACT</h3>;
 
// let ps_block = document.createAttribute("div");


// let contactSection = document.getElementsByClassName("contact-section")[0];

// personalInfoSubmit.addEventListener("click", (e)=> {
    
//    console.log("DSFffdbb");
//     let personalBlock = createTag("div");
//     personalBlock.setAttribute('class','icon-layout content-layout');

//      personalBlock.innerHTML = `
//     <h3 style="border-bottom:1px solid rgb(216,204,190)">CONTACT</h3>

//     <div class="section-layout">
//         <i  class="fa-solid fa-phone icon-color"></i>   
//         <a class="icon-info" id="telephone-div" href="tel+919662833396"> Tel: ${telephoneNumber.value}</a>
//     </div>

//     <div class="section-layout">
//         <i class="fa-solid fa-inbox icon-color"></i>
//         <a class="icon-info" id="email-div"href="mailto:${EmailId.value}?
//         subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you"
//          target="_blank" >${EmailId.value}</a>
//     </div> 

//     <div class="section-layout">
//         <i class="fa-brands fa-linkedin icon-color"></i>
//         <a class="icon-info " id="linkedin-div" href="${linkedinId.value}" target="_blank">linkedin.com/${firstName.value}${lastName.value}</a>
//     </div>

//     <div class="section-layout">
//         <i class="fa-solid fa-location-dot icon-color"></i>
//         <p class="icon-info" id="add-div">${addressDetails.value}</p>
//     </div> 

// </div>`;
//   contactSection.appendChild(personalBlock);

  // unimportant code
    //    telephoneNumber.innerHTML = "Tel: +" + telephoneNumber.value;
    //    email_div.innerHTML = EmailId.value;
       
    //    linkedin_div.innerHTML = linkedinId.value;
    //    add_div.innerHTML = addressDetails.value;
    //    email_div.href = "mailto:${EmailId.value}?subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you" ;
    //    email_div.setAttribute('target','_blank');
    //    console.log(linkedinId.value);
    //    linkedin_div.href = linkedinId.value;
       
// })




// work experience 



// let workDetails = document.getElementById("work-details");
// let experienceSubmit =document.getElementById("exp-submit");

// let jobPosition = document.getElementById("jposition");
// let jobLocation = document.getElementById("jlocation");
// let jobStart = document.getElementById("jstart");
// let jobEnd = document.getElementById("jend");
// let jobDescription = document.getElementById("jdescription");
// let jobData = {
//     jobDescription,
//     jobPosition,
//     jobStart,
//     jobEnd,
//     jobLocation,
// };
// let previewExperienceBlock = createTag("div");
// let previewExperienceFormContainer = document.getElementsByClassName("experience")[0];


// function setJobInformation ( setData, data) {
//     setData.location.innerHTML = data.jobLocation.value;
//     setData.start.innerHTML = data.jobStart.value;
//     setData.end.innerHTML = data.jobEnd.value;
//     setData.description.innerHTML = data.jobDescription.value;
//     setData.position.innerHTML = data.jobPosition.value;
//     // setData.timeline.innerHTML = data.jobStart + " - " + data.jobEnd;
// }
// function getJobInformationPreview ( currentData ) {
  
//     let job = {

//         position: jobPosition,
//         timeline: currentData.getElementsByTagName('span')[0].innerText,
//         location: currentData.getElementsByTagName('p')[0],
//         description: currentData.getElementsByTagName('p')[1],
        
//    }  
//    let start;
//    let filterIndex = 8;
//    job.start= job.timeline.substring(0,filterIndex);
//    job.end = job.timeline.substring(filterIndex);
//    return job;
// }
// experienceSubmit.addEventListener( "click", (e) => {
        
//     let currBlockFilled = jobLocation.classList[0];
   
//         if(currBlockFilled)
//         {
//             console.log(document.getElementById(currBlockFilled+suffixID));
//                let currentPreviewBlock = getJobInformation(document.getElementById(currBlockFilled));
//                let currentBlock = getJobInformation(document.getElementById(currBlockFilled+suffixID));
                 
//                setJobInformation(currentPreviewBlock,jobData);
//                setJobInformation(currentBlock,jobData);
//             //    currBlockFilled.removeAttribute("class");
//                jobLocation.removeAttribute("class");

//         }
//         else 
//         {
//         let workContainerBlock = createTag("div");
//         // workContainerBlock.classList.add("content-layout");
//         let workHeaderBlock = createTag("div");
//         workHeaderBlock.setAttribute('class','content-title');
        
//         let jobPositionBlock = createTag("h4");
//         jobPositionBlock.setAttribute('class','content-item');

//         let jobEndYearBlock = createTag("span");
//         jobEndYearBlock.setAttribute('class',' small-content-item extreme-right-item');
//         let jobStartYearBlock  = createTag("span");
//         jobStartYearBlock.setAttribute('class','small-content-item extreme-right-item');
//         let jobLocationBlock = createTag("p");
//         jobLocationBlock.setAttribute('class','content-item');

//         workHeaderBlock.appendChild(jobPositionBlock);
//         workHeaderBlock.appendChild(jobStartYearBlock);
        
//         workHeaderBlock.appendChild(jobEndYearBlock);
//         workHeaderBlock.appendChild(jobLocationBlock);

//         let jobDescriptionBlock =createTag("p");
//         jobDescriptionBlock.setAttribute('class','paragraph');


//         workContainerBlock.appendChild(workHeaderBlock);
//         workContainerBlock.appendChild(jobDescriptionBlock);

//      //  button element     //  reuse btn each time using function
//      let btn = createRemoveButton();
//      let edt_btn = createEditButton();
//      let previewBlock = createTag("div");
       
//         jobPositionBlock.innerHTML = jobPosition.value;
//         jobLocationBlock.innerHTML = jobLocation.value;
//         jobDescriptionBlock.innerHTML = jobDescription.value;
//         jobStartYearBlock.innerHTML = jobStart.value;
//         jobEndYearBlock.innerHTML = jobEnd.value;


//         let clone_current_exp = workContainerBlock.cloneNode(true);
//         previewBlock.appendChild(clone_current_exp);
//        // re use 
//         previewBlock.appendChild(btn);
//         previewBlock.appendChild(edt_btn);
//         previewExperienceBlock.appendChild(previewBlock);
        
//         //  unique id  
//         let currentId = Date.now() + Math.random().toString(16).slice(2);
//         previewBlock.setAttribute('id',currentId);
//         workContainerBlock.setAttribute('id', currentId+suffixID);
         
//         console.log(previewExperienceBlock);
//         console.log(workContainerBlock);
       
//         previewExperienceFormContainer.appendChild(previewExperienceBlock);
        
//         workDetails.appendChild(workContainerBlock);
//         }
//        jobPosition.value="";
//        jobLocation.value= "";
//        jobDescription.value="";
//        jobStart.value = "";
//         jobEnd.value = "";     
//         // make objects   and for loop 
       
// });

// previewExperienceBlock.addEventListener("click", (e)=> {
//     e.preventDefault();
//     console.log(e.target);
//     let currentEvent = e.target.innerHTML;
//     let currentEventId = e.target.parentNode.id;
//     console.log(currentEventId);
//     // console.log(e.target);
//     console.log(e.target.parentNode);
//     if(currentEvent == "x")
//     removecontainer(e);
//     else {
//         console.log("parentnode of preview");
//          console.log(e.target.parentNode);
//          let currentJob = getJobInformation(e.target.parentNode);
      
//         jobLocation.value = currentJob.location.innerHTML; 
//         jobStart.value = currentJob.start.innerHTML;
//         jobEnd.value = currentJob.end.innerHTML;
//         jobDescription.value = currentJob.description.innerHTML;
//         jobPosition.value = currentJob.position.innerHTML;
//         // console.log(currentJob.start);
       
      
//         jobLocation.setAttribute('class', currentEventId);
//     }

// })




// skills 


// let skillsDetailsBlock = document.getElementById("skills-details");

// let skillsSubmit = document.getElementById("skills-submit");
// let previewSkillFormContainer = document.getElementsByClassName("skills")[0];
// let skillField = document.getElementById("skill-field");
// let previewSkillBlock = createTag("div");
// previewSkillBlock.setAttribute('class','parent-small-item');


// skillsSubmit.addEventListener("click", (e)=> {


//     let currentPreviewBlock = document.getElementById(skillField.classList[0]);
//     let currentBlock = document.getElementById(skillField.classList[0]+suffixID);
//     console.log(currentPreviewBlock);
//     console.log("hello",currentBlock);
    
//     if(currentPreviewBlock){
//            currentPreviewBlock.firstChild.innerHTML = skillField.value;
//             currentBlock.innerHTML = skillField.value;
//             skillField.removeAttribute('class');
//     }
//     else {

//     let previewBlock = createTag("div");
//     previewBlock.setAttribute('class','small-item');
//     let btn = createRemoveButton();
//     let edt_btn = createEditButton();
//     let skillItem = document.createElement("li");
//     skillItem.setAttribute('class','small-item');

//     skillItem.innerHTML = skillField.value;

    
    
//    let clone_skill_item = skillItem.cloneNode(true);
//     previewBlock.appendChild(clone_skill_item);

//     previewBlock.appendChild(btn);
//     previewBlock.appendChild(edt_btn);

//     let currentId = Date.now() +  Math.random().toString(16).slice(2);
//     previewBlock.setAttribute('id',currentId);
//     skillItem.setAttribute('id', currentId+suffixID);

//     previewSkillBlock.appendChild(previewBlock);
//     skillsDetailsBlock.appendChild(skillItem);
//     previewSkillFormContainer.appendChild(previewSkillBlock);
//     }
//      skillField.value ="";
// });


// previewSkillBlock.addEventListener("click", (e)=> {

//     e.preventDefault();
//     let currentEvent = e.target.innerHTML;
//     let currentEventId = e.target.parentNode.id;
//     console.log(currentEventId);
//     // console.log(e.target);
//     if(currentEvent == "x")
//     removecontainer(e);
//     else {

//         console.log(e.target.parentNode.getElementsByTagName("p")[0]);
//         let currentBlock = e.target.parentNode.firstChild;
//         console.log(currentBlock);
//         skillField.value = currentBlock.innerHTML; 
//         skillField.setAttribute('class', currentEventId);
   
//     }
    
//     // removecontainer(e);
// })


// Achievements 


// let achievementDetails =  document.getElementById("achievements-field");

// let achievement_submit = document.getElementById("achievements-submit");

// let achievementsDetails = document.getElementById("achievements-details");

// let previewAchievementsBlock = createTag("div");
// let previewAchievementsFormContainer = document.getElementsByClassName("achievements")[0];


// achievement_submit.addEventListener("click", (e)=> {
   
//     let currentPreviewBlock = document.getElementById(achievementDetails.classList[0]);
//     let currentBlock = document.getElementById(achievementDetails.classList[0]+suffixID);
//     console.log(currentPreviewBlock);
//     console.log("hello",currentBlock);
    
//     if(currentPreviewBlock){
//            currentPreviewBlock.firstChild.innerHTML = achievementDetails.value;
//             currentBlock.innerHTML = achievementDetails.value;
//             achievementDetails.removeAttribute('class');
//     }
//     else {
   

//         let btn = createRemoveButton();
//         let edt_btn = createEditButton();
//     let achievementsBlock = createTag("p");
//     achievementsBlock.setAttribute('class','paragraph');
//     let previewBlock = createTag("div");
    
//     achievementsBlock.innerHTML = achievementDetails.value;


//     let clone_achiv_block = achievementsBlock.cloneNode(true);
//     previewBlock.appendChild(clone_achiv_block);

//     previewBlock.appendChild(btn);
//     previewBlock.appendChild(edt_btn);
//     previewAchievementsBlock.appendChild(previewBlock);
//     let currentId = Date.now() +  Math.random().toString(16).slice(2);
//     previewBlock.setAttribute('id',currentId);
//     achievementsBlock.setAttribute('id', currentId+suffixID);


    
//     previewAchievementsFormContainer.appendChild(previewAchievementsBlock);

//     achievementsDetails.appendChild(achievementsBlock);
   
//     achievementDetails.value ="";
//     }

// })

 
// previewAchievementsBlock.addEventListener( "click", (e)=>{
//     // e.preventDefault();
//     let currentEvent = e.target.innerHTML;
//     let currentEventId = e.target.parentNode.id;
//     console.log(currentEventId);
//     // console.log(e.target);
//     if(currentEvent == "x")
//     removecontainer(e);
//     else {
 
//         console.log(e.target.parentNode.getElementsByTagName("p")[0]);
//         let currentBlock = e.target.parentNode.getElementsByTagName("p")[0];
//         achievementDetails.value = currentBlock.innerHTML; 
//         achievementDetails.setAttribute('class', currentEventId);
//        // reuse edit button
//     }
// })

