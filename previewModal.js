import { createButton,buttonType } from "./interactive.js";
export const openModal = (event) => {

    const currentModal = document.getElementById("modal");
    const resumeBlock = document.getElementsByClassName("previewResume")[0];
    const closeButton = createButton(buttonType.remove);
    closeButton.innerHTML="Close Preview";
    closeButton.classList.add("class","closeModalButton","prevButton");
    
    
         
        const cloneBlock = resumeBlock.cloneNode(true);
        currentModal.appendChild(closeButton);
        currentModal.appendChild (cloneBlock);
        currentModal.showModal();
        currentModal.style = "width: 90%";
        cloneBlock.style="width: 80% ;height: 1000px; margin: auto ; font-size: 16px; ";
        
        closeButton.addEventListener("click",(event)=>{
            
            currentModal.innerHTML="";
            currentModal.close();
        });
 
}


// export { openModal } 