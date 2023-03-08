import { fillpersonalData,emptyFormData} from "./interactive.js";


export function onPersonalInformationSubmit (personalStoreData) {
//    const personalSubmitButton = document.getElementById("personal-info-submit");
//    personalSubmitButton.addEventListener("click", (event) => {
      // personalSubmit(personalStoreData);
   const contactSection = document.getElementsByClassName("contact-section")[0];
    localStorage.setItem('personalData',JSON.stringify(personalStoreData));
    //  console.log("DSFffdbb");
     fillpersonalData(personalStoreData);


     emptyFormData("personal-info");
     //  ValidationCheckerEachTime();
//    })
    
}