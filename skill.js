import { createTag,emptyFormData, skillStoreData,createPreviewContainer,previewBlockParentSuffixId,resumeBlockSuffixId ,removeButtonSuffixId,editButtonSuffixId,buttonType,removeContainer, getData, previewEditRemove } from "./interactive.js";
import { previewBlockDOM } from "./interactive.js";


// function skillPreviewEditRemoveFeatures (event) {

//     event.preventDefault();
//    const currentEvent = event.target.innerHTML;
//     let currentEventId = (event.target.id).slice(0,-1);
//     const currentData = skillStoreData[currentEventId];
//     // let parentEvent = document.getElementById(currentEventId+previewBlockParentSuffixId);
//     // console.log(currentEventId);
//     switch(currentEvent) {

//     case buttonType.remove:
//          removeContainer(event);
//          break;
//     case buttonType.edit:
      
     
//         // console.log(currentBlock);
//         document.getElementById("skillField").value = currentData.skillField; 
//         removeContainer(event);
//         break;   
//     }
//     delete skillStoreData[currentEventId];
//     localStorage.setItem("skillData",JSON.stringify(skillStoreData));
// }

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


export function addSkillsPart(currentData,currentId,currentSection){
    const skillsDetailsBlock = document.getElementById("skills-details");
    const previewSkillBlock = createTag("div");
    
   console.log(currentData);

    const skillItem = document.createElement("li");
    skillItem.setAttribute('class','small-item');

    skillItem.innerHTML = currentData.skillField;

    
    
      createPreviewContainer(previewSkillBlock,skillItem,currentId);
    skillsDetailsBlock.appendChild(skillItem);
    previewBlockDOM[`${currentSection}`].appendChild(previewSkillBlock);

    




    previewSkillBlock.addEventListener("click", (event)=> {
            // skillPreviewEditRemoveFeatures(event);
          previewEditRemove(event,currentSection);
    })
  
// ValidationCheckerEachTime();

}
export function onSkillsSubmit (currentData,currentSection) {
    
    // const skillsSubmitButton = document.getElementById("skills-submit");
   
        let skillStoreData = getData(`${currentSection}`);
        if(!skillStoreData)
        skillStoreData={};
    // skillsSubmitButton.addEventListener("click", (event)=> {
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        skillStoreData[currentId] = currentData;
        console.log(skillStoreData);
        localStorage.setItem(`${currentSection}`,JSON.stringify(skillStoreData));
        addSkillsPart(currentData,currentId,currentSection);

     emptyFormData(`${currentSection}`);
    // })

}
