import { emptyFormData,ValidationCheckerEachTime } from "./interactive.js";


export const onSubmit =(introductionStoreData)=> {
   
        // e.preventDefault();
        console.log("clicked on submit");
        // saveData();
        localStorage.setItem('introductionData',JSON.stringify(introductionStoreData));
        
        const introductionSection = document.getElementsByClassName("introduction-section")[0];   
        document.querySelector('.name').innerHTML =  `${introductionStoreData.fname}
                                                        <br/> ${introductionStoreData.lname}`;
         document.querySelector('.sub-heading').innerHTML = introductionStoreData.roleName;
         document.querySelector('#personal-intro').innerHTML = introductionStoreData.introduction;

   
        // saveData();
        emptyFormData("intro");
          
        // ValidationCheckerEachTime("intro");

  
}
