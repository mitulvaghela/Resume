
const handleSubmitState = (currentdata = {},selectedElement,currentSubmitButton) => () => {
    let isSubmitActive = true;
     console.log("handleSubmitState has been called");
      for (let properties in currentdata) {

        if(currentdata[properties].value == "")
         isSubmitActive = false;
      }

      if(isSubmitActive && currentSubmitButton)
      currentSubmitButton.disabled = false;   //   currentSubmitButton.removeAttribute('disabled');
}


const inputValidation = (currentBlockValue)=> {
    
    //  console.log(submitButton[currentBlockValue]);
    submitButton[currentBlockValue].setAttribute("disabled",true);
    const currentBlockSection = dataModel[currentBlockValue];

    for (let item in currentBlockSection) {
        const selectedElement = currentBlockSection[item];
        // console.log(selectedElement,currentBlockSection,submitButton[currentBlockValue]);
        console.log(selectedElement,currentBlockSection);
        // if( selectedElement.tagName != "DIV")
        selectedElement.addEventListener('change', handleSubmitState(currentBlockSection, 
            selectedElement,submitButton[currentBlockValue]) , {once:true});
}
    //  for (let item in currentBlockSection) {
    //     const selectedElement = currentBlockSection[item];
    //     selectedElement.removeEventListener("change",handleSubmitState());
    //  }

}
export {inputValidation, handleSubmitState}