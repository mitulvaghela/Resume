
import { formBlock, introBlock,personalInfoBlock, educationBlock,experienceBlock,skillsBlock,achievementsBlock } from "./form.js ";

import { openModal } from "./previewModal.js"; 
// const {openModal} = require('./previewModal');

import { onSubmit } from "./introduction.js";
import { onEducationSubmit } from "./education.js";
import { onPersonalInformationSubmit } from "./personalContact.js";
import { onExperienceSubmit } from "./experience.js";
import { onSkillsSubmit } from "./skill.js";
import { onAchievementsSubmit } from "./achievement.js";
import { inputValidation, handleSubmitState } from "./validation.js";
import { imageOnLoad } from "./image.js";
import {educationSubmit } from "./education.js";
import { experienceSubmit } from "./experience.js";
import { skillsSubmit } from "./skill.js";
import { achievementSubmit } from "./achievement.js";

const sectionName = new Map([
    
    [1,"intro"],
    [ 2 , "education"],
    [ 3 , "experience"],
    [ 4 ,"skills"],
    [ 5 , "achievements"],
    [ 6 ,"personal-info"],
    [ "intro", 1],
    [ "education", 2] ,
    [ "experience", 3],
    [ "skills", 4],
    [ "achievements", 5],
    [ "personal-info", 6],
]);


let sectionCounter = 0;
let previousMenuBarButton= null;

function createPrevNextButton () {
    
    let block = createTag("div");
    block.classList.add("buttonParent","formMargin");
    let prevButton = createTag("button");
    prevButton.innerHTML="Previous";
    prevButton.setAttribute("id","prevButtonForChange");
    prevButton.classList.add("resetButton","prevButton");
    prevButton.addEventListener ("click", ()=> jumpOnPrevSection());

    let nextButton = createTag("button");
    nextButton.innerHTML="Next";
    nextButton.classList.add("menuBarButton","nextButton");
    nextButton.setAttribute("id","nextButtonForChange");
    block.appendChild(prevButton);
    block.appendChild(nextButton);
    nextButton.addEventListener ("click", ()=> jumpOnNextSection());
    
      return block;
}

const previewIntroductionFormContainer = createTag("div");
const previewPersonalInfoFormContainer = createTag("div");
const previewEducationFormContainer = createTag("div");
const previewExperienceFormContainer = createTag("div");
const previewSkillFormContainer = createTag("div");
const previewAchievementsFormContainer = createTag("div");

export let previewBlockDOM = {
          ["intro"]: previewIntroductionFormContainer,
          ["personal-info"]: previewPersonalInfoFormContainer,
          ["education"]: previewEducationFormContainer,
          ["experience"]:previewExperienceFormContainer,
          ["skills"] : previewSkillFormContainer,
          ["achievements"]: previewAchievementsFormContainer,
       
}
function formReload(block) {

    // console.log(block.value);
    const formParent = document.getElementsByClassName('formOptions')[0];
    const currentBlockValue = block.value;
    sectionCounter = sectionName.get(block.value);

    if(previousMenuBarButton)
          previousMenuBarButton.classList.remove("changeColor");
    previousMenuBarButton = block;
    block.classList.add("changeColor");
    
    formParent.innerHTML = formBlock[block.value] ;
    formParent.appendChild(createPrevNextButton());
    formParent.appendChild(previewBlockDOM[block.value]);
    

  //    inputValidation(currentBlockValue);


}
window.formLoader = () => {
    console.log("bdsdbd");
    const menuBar = document.getElementsByClassName("menuBarButton");
 
    for(let i=0; i< menuBar.length; i++){
       menuBar[i].addEventListener("click", (event)=>{
           // console.log(event.target.value);
           formReload(event.target);
       })
    }
}


export const introductionStoreData = {
    fname : "",
    lname:"",
    roleName:"",
    introduction:"",
};
export const personalStoreData = {
    tnumber:"",
    emailid:"",
    linkedinid:"",
    addressForm:"",

};

export const currentEducationItem = {
    uname:"",
    qname:"",
    cname:"",
    syear:"",
    eyear:"",

};

const currentJobItem = {
    jposition:"",
    jlocation:"",
    jstart:"",
    jend:"",
    jdescription:"",
};
const skillItem ={
    skillField:"",
};
const achievementItem = {
    achievementsField:"",
};

export const achievementStoreData = {};
export const jobStoreData = {};
export const educationStoreData = {};
const dataModel = {
    
    ["intro"]:  introductionStoreData,  
    ["personal-info"]: personalStoreData,
    ["education"]:  currentEducationItem,
    ["experience"]:    currentJobItem,
    ["skills"] : skillItem,
    ["achievements"]: achievementItem,
}
const submit = {
    ["intro"]:onSubmit,
    ["education"]:onEducationSubmit,
    ["personal-info"]:onPersonalInformationSubmit,
    ["experience"]:onExperienceSubmit,
    ["skills"]:onSkillsSubmit,
    ["achievements"]:onAchievementsSubmit,
}



window.fetchValue  = (currentBlock) => {
    const currentSection = currentBlock.getAttribute("section");
            console.log(currentBlock,dataModel);
           
            // 
            // currentBlock.addEventListener ('change', (event)=> {
               dataModel[currentSection][currentBlock.id] = currentBlock.value;
            // })
            // console.log(currentBlock.value);

          

   }
    
window.formSubmit = (currentBlock) => {
    const currentSection = currentBlock.getAttribute("section");
   console.log("submit button clicked");
    //  currentBlock.addEventListener ('click', (event)=> {
        submit[currentSection](dataModel[currentSection]);
    //  })
    
   }

export const CUSTOMER_DATA = 'Mitul Vaghela'



export const resumeBlockSuffixId = "-";

export function createTag (tagType) {
    return document.createElement(tagType);
}

export function emptyFormData ( currentBlock) {
      document.getElementsByClassName(currentBlock)[0]?.reset();
}

 export let buttonType = {
    remove: "x",
    edit:"Edit",
};
export function createButton (buttonType) {
    let btn = document.createElement("button");
    btn.innerHTML = buttonType;
    return btn;
}

function generateRandomID (){
    return Date.now() + Math.random().toString(16).slice(2);
}

export function removeContainer (event) {
    const currentId = event.target.id;
    const parentId = currentId.slice(0,-1);
    

    //delete that block
    console.log(document.getElementById(parentId+resumeBlockSuffixId));   // use var for hyphen (-)
    console.log(document.getElementById(parentId+previewBlockParentSuffixId));
    document.getElementById(parentId+resumeBlockSuffixId)?.remove();
    document.getElementById(parentId+previewBlockParentSuffixId)?.remove();
}
// duplicate  Tag  - removed it 😊.
export function createPreviewContainer (previewContainer,currentContainer,currentId) {
    const removeButton = createButton(buttonType.remove);
    const editButton = createButton(buttonType.edit);
    const previewBlock = createTag("div");
    const cloneContainer = currentContainer.cloneNode(true);
    previewBlock.appendChild(cloneContainer);
    const buttonParent = createTag("div");
     buttonParent.classList.add("buttonParent");
     removeButton.classList.add("buttonStyle","submitButton");
     editButton.classList.add("buttonStyle","resetButton");
     buttonParent.appendChild(removeButton);
     buttonParent.appendChild(editButton);
     previewBlock.appendChild(buttonParent);
     previewContainer.appendChild(previewBlock);
     previewContainer.classList.add("formMargin");
     
     removeButton.setAttribute('id',currentId+removeButtonSuffixId);
     editButton.setAttribute('id',currentId+editButtonSuffixId);
     previewBlock.setAttribute('id',currentId+previewBlockParentSuffixId);
     currentContainer.setAttribute('id', currentId+resumeBlockSuffixId);
         
}


// const previewButton = document.getElementById("preview");



window.modal = () => {
    openModal();
}

window.onclick = function(event) {
     const currentModal = document.getElementById('modal');
    if (event.target == currentModal) {
        event.preventDefault();
        currentModal.close();
        currentModal.innerHTML="";
    }
}





export const previewBlockParentSuffixId = "parent";
export const removeButtonSuffixId = "r";
export const editButtonSuffixId = "e";




export function getData(string){
    return JSON.parse(localStorage.getItem(string));
}
function loadIntroductionData () {
    const data = getData('introductionData');
    const imgSrc = localStorage.getItem('img');
    if(!data)
    return;
    
    document.querySelector('.name').innerHTML =  `${data.fname}
                                                        <br/> ${data.lname}`;
    document.querySelector('.sub-heading').innerHTML = data.roleName;
    document.querySelector('#personal-intro').innerHTML = data.introduction;
     
    document.querySelector("#profilePicture").src = imgSrc;
    
}

// function introFetch(currentBlockValue){
    
//      let introductionData = {};
//      introductionData.firstName = document.getElementById("fname");
//      introductionData.lastName = document.getElementById("lname");
//      introductionData.roleName = document.getElementById("roleName");
//      introductionData.introductionName = document.getElementById("introduction");
     
//     //  submitButton[currentBlockValue] = document.getElementById("intro-submit");
    
//      let flag=false;
//     for(let key in introductionData){
//         introductionData[key].addEventListener('input',e => {
//             introductionStoreData[key] = e.target.value; 
//             ValidationCheckerEachTime(currentBlockValue);
          
//         })  
//     }
//     imageOnLoad();
//     console.log(introductionStoreData);
//       onSubmit();
      
//     //  console.log("fetched dom of introduction part",submitButton.introSubmitButton );
     

// }


export function fillpersonalData (data){
    document.querySelector('#telephone').innerHTML =  `Tel: ${data.tnumber}`;
    document.querySelector('#telephone').href = `Tel:+91${data.tnumber}`
    document.querySelector('#email').innerHTML =  ` ${data.emailid}`;
    document.querySelector('#email').href = `mailto:${data.emailid}?
    subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you`;
    document.querySelector('#linkedin').innerHTML =  ` ${data.linkedinid}`;
    document.querySelector('#linkedin').href = `${data.linkedinid}`;
    document.querySelector('#address').innerHTML =  `${data.addressForm}`;
}
function loadPersonalData() {
    const data = getData('personalData');
    if(!data)
    return;
   fillpersonalData(data);
}



function loadEducationData() {
    const data = getData('educationData');
    console.log(data);
    if(!data)
    return;
    for ( let id in data){
        console.log(data[id],id);
        educationSubmit(data[id],id);
    }
}


function loadJobData() {
    const data = getData('jobData');
    console.log(data);
    if(!data)
    return;
    for ( let id in data){
        console.log(data[id],id);
        experienceSubmit(data[id],id);
    }
}



export const skillStoreData = {};
function loadskillData() {
    const data = getData('skillData');
    console.log(data);
    if(!data)
    return;
    for ( let id in data){
        console.log(data[id],id);
        skillsSubmit(data[id],id);
    }
}


function loadAchievementData() {
    const data = getData('achievementData');
    console.log(data);
    if(!data)
    return;
    for ( let id in data){
        console.log(data[id],id);
        achievementSubmit(data[id],id);
    }
}


export const ValidationCheckerEachTime = (block)=> {
         
   const currentData = dataModel[block];
   let flag=true;
   if(!Object.entries(currentData).length)
   return;
   console.log(currentData);
   for( let properties in currentData){
    //    console.log(currentData[properties]);
      if(!currentData[properties])
      flag=false;

   }
   const  currentButtonId =  `${block}-submit`;
   const SubmitButton = document.getElementById(currentButtonId);
   if(!flag)
   SubmitButton.setAttribute("disabled",true);
   else
   SubmitButton.disabled = false;
   console.log(flag);
   
}
   
const jumpOnNextSection = () => {
    // console.log(sectionCounter,"next button");
    
    if(sectionCounter == 6) return;
    sectionCounter++;
  
    const currentButton = document.getElementsByClassName("menuBar")[0];
    const currentSection = currentButton.getElementsByTagName("button")[sectionCounter-1];
    // console.log(currentSection);
    
    formReload(currentSection);
}
const jumpOnPrevSection = () => {
    // console.log(sectionCounter,"prev button");
        
    if(sectionCounter == 1)  return;
    sectionCounter--;

    const currentButton = document.getElementsByClassName("menuBar")[0];
    const currentSection = currentButton.getElementsByTagName("button")[sectionCounter-1];
    // console.log(currentSection);

    formReload(currentSection);
}





window.loadImage = () => {
    imageOnLoad();
}


