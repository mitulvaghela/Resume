import { createTag, emptyFormData, previewEditRemove,achievementStoreData,createPreviewContainer,previewBlockParentSuffixId,resumeBlockSuffixId ,removeButtonSuffixId,editButtonSuffixId,buttonType,removeContainer, getData } from "./interactive.js";
import { previewBlockDOM } from "./interactive.js";

export function onAchievementsSubmit(currentData,currentSection) {

    let achievementStoreData = getData(`${currentSection}`);
    if(!achievementStoreData)
    achievementStoreData={};
    // const achievementSubmitButton = document.getElementById("achievements-submit");
    // achievementSubmitButton.addEventListener("click", (event)=> {
        console.log(currentData);
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        achievementStoreData[currentId] = currentData;
        console.log(achievementStoreData);
        localStorage.setItem(`${currentSection}`,JSON.stringify(achievementStoreData));
        addAchievementPart(currentData,currentId,currentSection);
        emptyFormData(`${currentSection}`);
    // })
}

export function addAchievementPart(currentData,currentId,currentSection) {
    const achievementsDetailsBlock = document.getElementById("achievements-details");
    
    const previewAchievementsBlock = createTag("div");
    
    
        
        // console.log(achievementData.achievementDetails.classList[0]);
       
        // console.log(currentPreviewBlock);
        // console.log("hello",currentBlock);
        
     
    
        const achievementsBlock = createTag("p");
        achievementsBlock.setAttribute('class','paragraph');
        achievementsBlock.innerHTML = currentData.achievementsField;
        
        createPreviewContainer(previewAchievementsBlock,achievementsBlock,currentId);
    
        
        previewBlockDOM[`${currentSection}`].appendChild(previewAchievementsBlock);
        achievementsDetailsBlock.appendChild(achievementsBlock);
    
        
      
    
    previewAchievementsBlock.addEventListener( "click", (event)=>{
        //  achievementsPreviewEditRemoveFeatures(event);
        previewEditRemove(event,currentSection);
    })
    
    // ValidationCheckerEachTime();
    
}

    
    
// function achievementsPreviewEditRemoveFeatures (event) {
//         // event.preventDefault();
//         const currentEvent = event.target.innerHTML;
//         const currentEventId = (event.target.id).slice(0,-1);
//         // const parentEvent = document.getElementById(currentEventId+previewBlockParentSuffixId);
//         // console.log(currentEventId);
//         // console.log(event.target);
//         const achievementStoreData = getData('achievementData');
//         const currentData = achievementStoreData[currentEventId];
//         // console.log( currentData);
//         switch (currentEvent) {
//             case buttonType.remove:
//                 removeContainer(event);
//                 break;
//             case buttonType.edit:
            
//                 document.getElementById("achievementsField").value = currentData.achievementsField; 
//                 removeContainer(event);
//                 break;
//         }
//         delete achievementStoreData[currentEventId];
//         localStorage.setItem("achievementData",JSON.stringify(achievementStoreData));

//      }
    
    