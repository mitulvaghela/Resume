import { createTag,emptyFormData, previewEditRemove, getData,createPreviewContainer,previewBlockParentSuffixId,resumeBlockSuffixId ,removeButtonSuffixId,editButtonSuffixId,buttonType,removeContainer } from "./interactive.js";
import { previewBlockDOM } from "./interactive.js";

//  function  ExperiencePreviewEditRemoveFeatures (event) {

//     const currentEvent = event.target.innerHTML;
//     const currentEventId = (event.target.id).slice(0,-1);
//     const parentEvent = document.getElementById(currentEventId+previewBlockParentSuffixId);
//     const jobStoreData = getData("jobData");
//     const currentData = jobStoreData[currentEventId];
//     switch (currentEvent) {
//         case buttonType.remove:
//             //  alert("removing container");
//              removeContainer(event);
//              break;
//         case buttonType.edit:

//             for( let key in currentData){
//                 document.getElementById(`${key}`).value = currentData[key];
//             }
//             // document.getElementById("jlocation").value = currentData.jlocation; 
//             // document.getElementById("jstart").value = currentData.jstart;
//             // document.getElementById("jend").value = currentData.jend;
//             // document.getElementById("jdescription").value = currentData.jdescription;
//             // document.getElementById("jposition").value = currentData.jposition;
//     }
//     delete jobStoreData[currentEventId];
//     localStorage.setItem('jobData',JSON.stringify(jobStoreData));

// }
export function addExperiencePart (currentData,currentId,currentSection) {
        const workDetails = document.getElementById("experience-details");
       
        if(!currentData)
        return;

        const previewExperienceBlock = createTag("div");
        const workContainerBlock = createTag("div");
        const workHeaderBlock = createTag("div");
        workHeaderBlock.setAttribute('class','content-title');
        
        const jobPositionBlock = createTag("h4");
        jobPositionBlock.setAttribute('class','content-item');

        const jobEndYearBlock = createTag("span");
        jobEndYearBlock.setAttribute('class',' small-content-item extreme-right-item');
        const jobStartYearBlock  = createTag("span");
        jobStartYearBlock.setAttribute('class','small-content-item extreme-right-item');
        const jobLocationBlock = createTag("p");
        jobLocationBlock.setAttribute('class','content-item');

        workHeaderBlock.appendChild(jobPositionBlock);
        workHeaderBlock.appendChild(jobStartYearBlock);
        
        workHeaderBlock.appendChild(jobEndYearBlock);
        workHeaderBlock.appendChild(jobLocationBlock);

        const jobDescriptionBlock =createTag("p");
        jobDescriptionBlock.setAttribute('class','paragraph');


        workContainerBlock.appendChild(workHeaderBlock);
        workContainerBlock.appendChild(jobDescriptionBlock);

    
     
       
        jobPositionBlock.innerHTML = currentData.jposition;
        jobLocationBlock.innerHTML = currentData.jlocation;
        jobDescriptionBlock.innerHTML = currentData.jdescription;
        jobStartYearBlock.innerHTML = currentData.jstart;
        jobEndYearBlock.innerHTML = currentData.jend;

        createPreviewContainer(previewExperienceBlock,workContainerBlock,currentId,currentSection);

        previewBlockDOM[`${currentSection}`].appendChild(previewExperienceBlock);
        workDetails.appendChild(workContainerBlock);

       
    
        previewExperienceBlock.addEventListener("click", (event)=> {
            // ExperiencePreviewEditRemoveFeatures(event);
            previewEditRemove(event,currentSection);
        })
        // ValidationCheckerEachTime();
}
export function onExperienceSubmit(currentJobItem,currentSection){
    console.log(currentJobItem);
   
     let jobStoreData = getData(`${currentSection}`);
     if(!jobStoreData)
     jobStoreData={};
    // const experienceSubmitButton = document.getElementById("experience-submit");
    // experienceSubmitButton.addEventListener("click", (event)=> {
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        jobStoreData[currentId] = currentJobItem;
        localStorage.setItem(`${currentSection}`,JSON.stringify(jobStoreData));
        addExperiencePart(currentJobItem,currentId,currentSection);
        emptyFormData(`${currentSection}`);
    // })

}
