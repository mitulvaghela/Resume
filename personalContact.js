import { emptyFormData} from "./interactive.js";

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
export function onPersonalInformationSubmit (sectionData,currentSection) {
//    const personalSubmitButton = document.getElementById("personal-info-submit");
//    personalSubmitButton.addEventListener("click", (event) => {
      // personalSubmit(personalStoreData);
//    const contactSection = document.getElementsByClassName("contact-section")[0];
    localStorage.setItem(`${currentSection}`,JSON.stringify(sectionData));
    //  console.log("DSFffdbb");
     fillpersonalData(sectionData);


     emptyFormData(`${currentSection}`);
     //  ValidationCheckerEachTime();
//    })
    
}