import { formBlock, introBlock,personalInfoBlock, educationBlock,experienceBlock,skillsBlock,achievementsBlock } from "./form.js ";
import { openModal } from "./previewModal.js";

class Model {
    constructor () {
        this.sectionList = {
        //    education:new Array(),
        };
        this.CHECKSTATIC = ["intro","personal-info","image"];
        // console.log(this);
    }
    bindSectionListChanged (handler){
        
        this.onSectionListChanged = handler;
    }
    bindStaticListChanged (handler){
        this.onStaticListChanged = handler;
    }
    addItem (sectionName,sectionData){
       console.log(sectionName);
        const currentId = Date.now() + Math.random().toString(16).slice(2);
        console.log(this.sectionList[sectionName]);
        console.log(sectionData);    
        if(!this.sectionList[sectionName])
          this.sectionList[sectionName]=new Array();

        if(sectionName == "image") 
             this.sectionList[sectionName]={...sectionData};
        if(this.CHECKSTATIC.filter( item => item == sectionName ).length != 0)
            this.sectionList[sectionName]={...sectionData};
        else
            this.sectionList[sectionName].push({[currentId]:{...sectionData}});
            
        this.commitSectionList(sectionName);
    }
    getItem (sectionName,currentId){
        console.log(this.sectionList[sectionName]);
        const currentItem = this.sectionList[sectionName].filter( item => currentId in item );
        // console.log(this.sectionList[sectionName],currentItem);
        return currentItem[0][currentId];
    }
    deleteItem(sectionName,currentId){
            let currentSection = this.sectionList[sectionName];
            this.sectionList[sectionName] = currentSection.filter( item => !(currentId in item));
            // console.log(this.sectionList[sectionName],currentSection);
            this.commitSectionList(sectionName);
    }
    editItem(sectionName,newData,currentId){
        this.sectionList[sectionName] =  this.sectionList[sectionName].map( item=> {
            console.log(item);
            if(item[currentId]) item[currentId]={...newData};
            return item;
        })
        // console.log(this.sectionList);
        this.commitSectionList(sectionName);
    }
    commitSectionList(sectionName) {
        localStorage.setItem(`${sectionName}`,JSON.stringify(this.sectionList[sectionName]));
        if(this.CHECKSTATIC.filter( item => item == sectionName).length != 0)
           this.onStaticListChanged(this.sectionList,sectionName);
        else
           this.onSectionListChanged(this.sectionList,sectionName);
    }


}

class View {
     constructor(){
        // console.log();
        this.sectionCounter = 0;
        this.currentEditItem = false;
        this.previousMenuBarButton = null;
        this.CHECKSTATIC = ["intro","personal-info","img"];
        this.temporarySectionList = {
            ["intro"]:{ "fname":"",
                        "lname":"",
                        "roleName":"",
                        "introduction":"",
                      },
            ["education"]:{ "uname":"",
                            "qname":"",
                            "cname":"",
                            "syear":"",
                            "eyear":"",
                          },

            ["experience"]:{ "jposition":"",
                             "jlocation":"",
                             "jstart":"",
                             "jend":"", 
                             "jdescription":"",
                            },

            ["personal-info"]:{ "tnumber":"",
                                "emailid":"",
                                "linkedinid":"",
                                "addressForm":""
                              },

            ["skills"]:{ "skillField":""
                       },

            ["achievements"]:{ "achievementsField":"",
                             },

            ["image"]:{"src":""
                      },

        };
        this.PREVIEWBLOCKPARENTSUFFIXID = "parent";
        this.REMOVEBUTTONSUFFIXID = "r";
        this.EDITBUTTONSUFFIXID = "e";
        this.RESUMEBLOCKSUFFIXID = "-";
        this.sectionName = new Map([
    
            [1,"intro"],
            [ 2 , "education"],
            [ 3 , "experience"],
            [ 4 ,"skills"],
            [ 5 , "achievements"],
            [ 6 ,"personal-info"],
            [ "intro", 1],
            [ "education", 2] ,
            [ "experience", 3],
            [ "skills", 4],
            [ "achievements", 5],
            [ "personal-info", 6],
        ]);
    }

    emptyFormField(currentBlock) {
        document.getElementsByClassName(currentBlock)[0]?.reset();

        const currentSection = this.temporarySectionList[currentBlock];

        for(let properties in currentSection){
            currentSection[properties]="";
        }
        const currentSubmitButton = document.querySelector('[value="submit"]');
        this.toggleHideButton(currentSubmitButton);
    }
    fillIntroductionList (data){
        console.log("changing introductiondata");
        document.querySelector('.name').innerHTML =  `${data.fname}
        <br/> ${data.lname}`;
        document.querySelector('.sub-heading').innerHTML = data.roleName;
        document.querySelector('#personal-intro').innerHTML = data.introduction;
    }
    fillPersonalList (data){
        document.querySelector('#telephone').innerHTML =  `Tel: ${data.tnumber}`;
        document.querySelector('#telephone').href = `Tel:+91${data.tnumber}`
        document.querySelector('#email').innerHTML =  ` ${data.emailid}`;
        document.querySelector('#email').href = `mailto:${data.emailid}?
        subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you`;
        document.querySelector('#linkedin').innerHTML =  ` ${data.linkedinid}`;
        document.querySelector('#linkedin').href = `${data.linkedinid}`;
        document.querySelector('#address').innerHTML =  `${data.addressForm}`;
    }

 appendSectionList = {
    ["intro"]: this.fillIntroductionList.bind(this),
    ["personal-info"]:this.fillPersonalList.bind(this),
    ["education"]:this.addEducationPart.bind(this),
    ["experience"]:this.addExperiencePart.bind(this),
    ["skills"]:this.addSkillsPart.bind(this),
    ["achievements"]:this.addAchievementPart.bind(this),
    ["image"]:this.addImage.bind(this),
}

    addImage(data) {
        // console.log("image has been showed in resume");
        document.getElementById("profilePicture").setAttribute("src",data["src"]);   
     }
   
    loadImage(handler) {
        window.loadImage = (currentBlock) =>{
            const sectionName=currentBlock.getAttribute("section");
            console.log("image button clicked");
            const image = document.querySelector('#profile-img');
            const resumeImage = document.querySelector("#profilePicture");

            image.addEventListener("change", ()=> {
                let reader = new FileReader();   
                reader.onload = (e) => {
                    this.temporarySectionList[sectionName]={src:e.target.result};
                    handler(sectionName,this.temporarySectionList[sectionName])
                    console.log(this.temporarySectionList[sectionName]);
                }
            
                if(image.files[0])
                    reader.readAsDataURL(image.files[0]);
                    // console.log(imageObject);  
            })
        } 
}
    sectionBar() {   
        window.formLoader = () => {
            console.log("bdsdbd",this);
            const menuBar = document.getElementsByClassName("menuBarButton"); 
            for(let i=0; i< menuBar.length; i++){
               menuBar[i].addEventListener("click", (event)=>{
                   console.log(event.target.value);
                   this.showFormPreview(event.target);
                   this.sectionCounter=this.sectionName.get(event.target.value);
               })
            }
        }
    }
    showModal(){
        window.modal = () => {
            openModal();
        }
        
    }
    inputFieldFilled(){
        window.fetchValue  = (currentBlock) => {
            const currentSection = currentBlock.getAttribute("section");
            this.temporarySectionList[currentSection][currentBlock.id] = currentBlock.value;
            console.log(this.temporarySectionList);
            this.checkValidation(this.temporarySectionList[currentSection]);
        }

    }
     checkValidation (currentdata)  {
        let isSubmitActive = true;
        const currentSubmitButton = document.querySelector('[value="submit"]');
         console.log("checkValidation has been called",currentdata);
          for (let properties in currentdata) {
    
            if(currentdata[properties] == "")
            {  console.log("field is empty");
             isSubmitActive = false;
            }
          }
         console.log(isSubmitActive,currentSubmitButton);
          if(isSubmitActive && currentSubmitButton){
            console.log("all fields has been filled")
            this.toggleHideButton(currentSubmitButton);
          }
    }
    toggleHideButton(currentSubmitButton){
        currentSubmitButton.toggleAttribute("disabled");
     }
    bindAddSection(handlerAdd,handlerDelete,handlerEdit,handlerEditShow){
        
        // console.log(window,this);
        window.formSubmit = (currentBlock) => {
           const currentSection = currentBlock.getAttribute("section");
           console.log("submit button clicked");
           if(this.currentEditItem){
                this.editSectionList(handlerEdit,currentSection);
                this.currentEditItem = 0;
           }
           else
                handlerAdd(currentSection,this.temporarySectionList[currentSection]);

           this.emptyFormField(`${currentSection}`);
           
          

           if(!this.CHECKSTATIC.reduce( item => item == currentSection).length){
                this.deleteSectionList(handlerDelete);
                this.showEditSectionList(handlerEditShow);
           }   
        }  
     }
    
    showFormPreview (block){
        // console.log(this.sectionName);
        // console.log(block.value);
        const formParent = document.getElementsByClassName('formOptions')[0];
        const currentBlockValue = block.value;
        this.sectionCounter = this.sectionName.get(block.value);
    
        if(this.previousMenuBarButton)
              this.previousMenuBarButton.classList.remove("changeColor");
        this.previousMenuBarButton = block;
        block.classList.add("changeColor");
        
        formParent.innerHTML = formBlock[block.value] ;
        formParent.appendChild(this.createPrevNextButton());
        const previewBlockDOM = this.createTag("div");
        previewBlockDOM.setAttribute("section",currentBlockValue);
        previewBlockDOM.setAttribute("class",`${currentBlockValue}Preview`);
        previewBlockDOM.classList.add("previewSection");
        console.log(previewBlockDOM);
        formParent.appendChild(previewBlockDOM);
        document.querySelector('[value="submit"]').setAttribute("disabled",true);
          
        //  inputValidation(currentBlockValue,this.temporarySectionList);
    
    
    }
    editSectionList(handler,sectionName){
        // console.log(handler);
        handler(sectionName,this.temporarySectionList[sectionName],this.currentEditItem);
    }
    deleteSectionList(handler){
        // console.log("remove button clicked",this.sectionCounter);
       
        //  console.log("remove button clicked",document.querySelector(".previewSection"));
        document.querySelector(".previewSection").addEventListener("click", (e)=>{
            e.preventDefault();
            console.log("delete icon clicked",e.target);
            if(e.target.innerHTML == this.buttonType.remove){
                console.log("remove is clicked");
                let currentId = e.target.id;
                currentId = currentId.slice(0,-1);
                const sectionName = e.target.getAttribute("section");
                handler(sectionName,currentId);
            }
        })
    }
    showEditSectionList(handler){
        document.querySelector(".previewSection").addEventListener("click", (e)=>{
            e.preventDefault();
            console.log("delete icon clicked",e.target);
            if(e.target.innerHTML == this.buttonType.edit){
                console.log("edit is clicked");
                let currentId = e.target.id;
                currentId = currentId.slice(0,-1);
                const sectionName = e.target.getAttribute("section");
                this.currentEditItem = currentId;
                const currentEditedItem = handler(sectionName,currentId);
                console.log(currentEditedItem);
                this.fillForm(currentEditedItem);
            }
        })
    }
    fillForm(currentEditedItem){
        console.log(currentEditedItem);
        for( let item in currentEditedItem){
            document.querySelector(`#${item}`).value = currentEditedItem[item];
        }
    }
    createTag (tagType) {
        return document.createElement(tagType);
    }
    buttonType = {
        remove: "x",
        edit:"Edit",
    };
    createButton (buttonType) {
        let btn = document.createElement("button");
        btn.innerHTML = buttonType;
        return btn;
    }
    createPrevNextButton () {
    
        let block = this.createTag("div");
        block.classList.add("buttonParent","formMargin");
        let prevButton = this.createTag("button");
        prevButton.innerHTML="Previous";
        prevButton.setAttribute("id","prevButtonForChange");
        prevButton.classList.add("resetButton","prevButton");
        prevButton.addEventListener ("click", ()=> this.jumpOnPrevSection());
    
        let nextButton = this.createTag("button");
        nextButton.innerHTML="Next";
        nextButton.classList.add("menuBarButton","nextButton");
        nextButton.setAttribute("id","nextButtonForChange");
        block.appendChild(prevButton);
        block.appendChild(nextButton);
        nextButton.addEventListener ("click", ()=> this.jumpOnNextSection());
        
        return block;
    }
     jumpOnNextSection = () => {
        // console.log(sectionCounter,"next button");
        
        if(this.sectionCounter == 6) return;
        this.sectionCounter++;
      
        const currentButton = document.getElementsByClassName("menuBar")[0];
        const currentSection = currentButton.getElementsByTagName("button")[this.sectionCounter-1];
        // console.log(currentSection);
        
        this.showFormPreview(currentSection);
    }
     jumpOnPrevSection = () => {
        // console.log(sectionCounter,"prev button");
            
        if(this.sectionCounter == 1)  return;
        this.sectionCounter--;
    
        const currentButton = document.getElementsByClassName("menuBar")[0];
        const currentSection = currentButton.getElementsByTagName("button")[this.sectionCounter-1];
        // console.log(currentSection);
    
        this.showFormPreview(currentSection);
    }
    displayStaticResume (datamodel,sectionName){
        this.appendSectionList[sectionName](datamodel[sectionName]);
    }
    displayResume(datamodel,sectionName){
        const ResumeBlockId = `${sectionName}` +"-details";
        const previewBlockId = `${sectionName}` + "Preview";
        //   console.log(ResumeBlockId,previewBlockId);

        const ResumeBlock = document.querySelector(`#${ResumeBlockId}`);
        const previewBlock  = document.querySelector(`.${previewBlockId}`);
        //   console.log(previewBlock);
        //   console.log(ResumeBlock);
        while(ResumeBlock.firstChild)
        ResumeBlock.removeChild(ResumeBlock.firstChild);
        while(previewBlock.firstChild)
        previewBlock.removeChild(previewBlock.firstChild);

          
        datamodel[sectionName].forEach((item) =>{
            const currentItem = Object.entries(item)[0];
                    // console.log(currentItem);
            this.appendSectionList[sectionName](currentItem[1],currentItem[0],sectionName);
        })
        

    }
    addEducationPart(currentData,currentId,currentSection) {
       
        let educationDetails = document.getElementById("education-details");
        const previewBlockDOM = document.querySelector(".educationPreview");
       
        const universityNameBlock = this.createTag("h4");
        const yearOfEducationBlock = this.createTag("span");  
        const courseNameBlock = this.createTag("p");
        const currentEducationBlock = this.createTag("div");

        currentEducationBlock.classList.add("content-title");
        universityNameBlock.classList.add("content-item");
        yearOfEducationBlock.classList.add("content-item");
        yearOfEducationBlock.classList.add("extreme-right-item");
        courseNameBlock.classList.add("content-item");


        universityNameBlock.innerHTML = currentData.qname + " - " + currentData.uname;
        yearOfEducationBlock.innerHTML = currentData.syear+ " - " + currentData.eyear;
        courseNameBlock.innerHTML = currentData.cname;

        currentEducationBlock.appendChild(universityNameBlock);
        currentEducationBlock.appendChild(yearOfEducationBlock);
        currentEducationBlock.appendChild(courseNameBlock);
        educationDetails.appendChild(currentEducationBlock);

        this.createPreviewContainer(previewBlockDOM,currentEducationBlock,currentId,currentSection);
        
    }
    addExperiencePart (currentData,currentId,currentSection) {
        const workDetails = document.getElementById("experience-details");
        const previewBlockDOM = document.querySelector(".experiencePreview");
        if(!currentData)
        return;

        // const previewExperienceBlock = createTag("div");
        const workContainerBlock = this.createTag("div");
        const workHeaderBlock = this.createTag("div");
        workHeaderBlock.setAttribute('class','content-title');
        
        const jobPositionBlock = this.createTag("h4");
        jobPositionBlock.setAttribute('class','content-item');

        const jobEndYearBlock = this.createTag("span");
        jobEndYearBlock.setAttribute('class',' small-content-item extreme-right-item');
        const jobStartYearBlock  = this.createTag("span");
        jobStartYearBlock.setAttribute('class','small-content-item extreme-right-item');
        const jobLocationBlock = this.createTag("p");
        jobLocationBlock.setAttribute('class','content-item');

        workHeaderBlock.appendChild(jobPositionBlock);
        workHeaderBlock.appendChild(jobStartYearBlock);
        
        workHeaderBlock.appendChild(jobEndYearBlock);
        workHeaderBlock.appendChild(jobLocationBlock);

        const jobDescriptionBlock = this.createTag("p");
        jobDescriptionBlock.setAttribute('class','paragraph');


        workContainerBlock.appendChild(workHeaderBlock);
        workContainerBlock.appendChild(jobDescriptionBlock);

    
     
       
        jobPositionBlock.innerHTML = currentData.jposition;
        jobLocationBlock.innerHTML = currentData.jlocation;
        jobDescriptionBlock.innerHTML = currentData.jdescription;
        jobStartYearBlock.innerHTML = currentData.jstart;
        jobEndYearBlock.innerHTML = currentData.jend;
        console.log(workDetails);
        workDetails.appendChild(workContainerBlock);
        this.createPreviewContainer(previewBlockDOM,workContainerBlock,currentId,currentSection);
}
    addSkillsPart(currentData,currentId,currentSection){
        const skillsDetailsBlock = document.getElementById("skills-details");
        const previewBlockDOM = document.querySelector(".skillsPreview");
        
    // console.log("inside addskillspart",currentData);

        const skillItem = document.createElement("li");
        skillItem.setAttribute('class','small-item');

        skillItem.innerHTML = currentData.skillField;
        this.createPreviewContainer(previewBlockDOM,skillItem,currentId,currentSection);
        skillsDetailsBlock.appendChild(skillItem);

    }
    addAchievementPart(currentData,currentId,currentSection) {
        const achievementsDetailsBlock = document.getElementById("achievements-details");
        const previewBlockDOM = document.querySelector(".achievementsPreview");
        const achievementsBlock = this.createTag("p");
        achievementsBlock.setAttribute('class','paragraph');
        achievementsBlock.innerHTML = currentData.achievementsField;
        
        this.createPreviewContainer(previewBlockDOM,achievementsBlock,currentId,currentSection); 

        achievementsDetailsBlock.appendChild(achievementsBlock);  

        
    }
    
    createPreviewContainer (previewContainer,currentContainer,currentId,currentSection) {
        // console.log(previewContainer);
        const removeButton = this.createButton(this.buttonType.remove);
        const editButton = this.createButton(this.buttonType.edit);
        
        const cloneContainer = currentContainer.cloneNode(true);
        previewContainer.appendChild(cloneContainer);
        const buttonParent = this.createTag("div");
        buttonParent.classList.add("buttonParent");
        removeButton.classList.add("buttonStyle","submitButton");
        console.log(currentSection);
        removeButton.setAttribute("section",currentSection);
        editButton.classList.add("buttonStyle","resetButton");
        editButton.setAttribute("section",currentSection);
        buttonParent.appendChild(removeButton);
        buttonParent.appendChild(editButton);
        previewContainer.appendChild(buttonParent);
        //  previewContainer.appendChild(previewBlock);
        previewContainer.classList.add("formMargin");
        
        removeButton.setAttribute('id',currentId+this.REMOVEBUTTONSUFFIXID);
        editButton.setAttribute('id',currentId+this.EDITBUTTONSUFFIXID);
        previewContainer.setAttribute('id',currentId+this.PREVIEWBLOCKPARENTSUFFIXID);
        currentContainer.setAttribute('id', currentId+this.RESUMEBLOCKSUFFIXID);
             
    }

}

class Controller {
    constructor(model,view){
        this.model = model;
        this.view = view;
        this.view.bindAddSection(this.handleAddItem,this.handleDeleteItem,this.handleEditItem,this.handleGetItem);
        // this.view.deleteSectionList(this.handleDeleteItem);
        this.view.inputFieldFilled();
        this.view.sectionBar();
        this.view.showModal();
        this.view.loadImage(this.handleAddItem);
        this.model.bindSectionListChanged(this.onSectionListChanged);
        this.model.bindStaticListChanged(this.onStaticListChanged);
        // this.onResumeChanged(this.model.sectionList)
    }
    onSectionListChanged = (datamodel,sectionName) => {
        this.view.displayResume(datamodel,sectionName);
    }
    onStaticListChanged = (datamodel,sectionName) => {
        this.view.displayStaticResume(datamodel,sectionName);
    }
    handleAddItem = (sectionName,sectionData) => {
        // console.log("inside add item handle",sectionData);
            this.model.addItem(sectionName,sectionData);
            // this.view.deleteSectionList
    }
    handleDeleteItem = (sectionName,currentId) => {
        console.log("handleDeleteItem");
         this.model.deleteItem(sectionName,currentId);
    }
    handleEditItem = (sectionName,newData,currentId) => {
        console.log("handleDeleteItem");
        this.model.editItem(sectionName,newData,currentId);
    }
    handleGetItem = (sectionName,currentId) => {
        return this.model.getItem(sectionName,currentId);
    }
    

}
let tempApp = new Controller(new Model(),new View());

// let vw= new View();
// vw.sectionBar();
// vw.inputFieldFilled();
// vw.bindAddSection(window);
// const tempdata = {
//     education:[],
// }
// tempdata["education"].push({mitul: {uname:"DAIICT",qname:"Bachelor Degree",cname:"ICT"}});
// tempdata["education"].push({mitul: {uname:"DAIICT",qname:"Bachelor Degree",cname:"ICT"}});
// vw.displayResume(tempdata,"education");
// console.log(this);
// let app=new Model();
// app.addItem("education",{firstname:"mitul",lastname:"param",address:"surat"});
// app.editItem("education",{firstname:"vaghela"},"mitul");
// app.addItem("education",{firstname:"mitul",lastname:"param",address:"surat"});
// app.addItem("intro",{lastname:"vaghela"});
// console.log(app.getItem("education","mitul"));
// let id="1678349062116b0a042b00ca73";
// app.deleteItem("education","mitul");