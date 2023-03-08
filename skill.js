import { createTag,emptyFormData, skillStoreData,createPreviewContainer,previewBlockParentSuffixId,resumeBlockSuffixId ,removeButtonSuffixId,editButtonSuffixId,buttonType,removeContainer, getData } from "./interactive.js";
import { previewBlockDOM } from "./interactive.js";


function skillPreviewEditRemoveFeatures (event) {

    event.preventDefault();
   const currentEvent = event.target.innerHTML;
    let currentEventId = (event.target.id).slice(0,-1);
    const currentData = skillStoreData[currentEventId];
    // let parentEvent = document.getElementById(currentEventId+previewBlockParentSuffixId);
    // console.log(currentEventId);
    switch(currentEvent) {

    case buttonType.remove:
         removeContainer(event);
         break;
    case buttonType.edit:
      
     
        // console.log(currentBlock);
        document.getElementById("skillField").value = currentData.skillField; 
        removeContainer(event);
        break;   
    }
    delete skillStoreData[currentEventId];
    localStorage.setItem("skillData",JSON.stringify(skillStoreData));
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


export function addSkillsPart(currentData,currentId){
    const skillsDetailsBlock = document.getElementById("skills-details");
    const previewSkillBlock = createTag("div");
    
   console.log(currentData);

    const skillItem = document.createElement("li");
    skillItem.setAttribute('class','small-item');

    skillItem.innerHTML = currentData.skillField;

    
    
      createPreviewContainer(previewSkillBlock,skillItem,currentId);
    skillsDetailsBlock.appendChild(skillItem);
    previewBlockDOM["skills"].appendChild(previewSkillBlock);

    

     emptyFormData("skills");



    previewSkillBlock.addEventListener("click", (event)=> {
            skillPreviewEditRemoveFeatures(event);
        
    })
  
// ValidationCheckerEachTime();

}
export function onSkillsSubmit (currentData) {
    
    // const skillsSubmitButton = document.getElementById("skills-submit");
   
    const skillStoreData = getData("skillData");
    // skillsSubmitButton.addEventListener("click", (event)=> {
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        skillStoreData[currentId] = currentData;
        console.log(skillStoreData);
        localStorage.setItem('skillData',JSON.stringify(skillStoreData));
        addSkillsPart(currentData,currentId);
    // })

}
