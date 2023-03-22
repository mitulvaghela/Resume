import { emptyFormData,ValidationCheckerEachTime } from "./interactive.js";

export function fillIntroductionData (data){
        console.log("changing introductiondata");
        document.querySelector('.name').innerHTML =  `${data.fname}
        <br/> ${data.lname}`;
    document.querySelector('.sub-heading').innerHTML = data.roleName;
    document.querySelector('#personal-intro').innerHTML = data.introduction;
    }
    
export const onSubmit =(sectionData,currentSection)=> {
   
        // e.preventDefault();
        console.log("clicked on submit");
        // saveData();
        localStorage.setItem(`${currentSection}`,JSON.stringify(sectionData));
        fillIntroductionData(sectionData);
        // const introductionSection = document.getElementsByClassName("introduction-section")[0];   
        
  
   
        // saveData();
        emptyFormData(`${sectionData}`);
          
        // ValidationCheckerEachTime("intro");

  
}
