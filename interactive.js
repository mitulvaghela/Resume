
let options = document.getElementById("resume-form");
let old_value = options.value;
let current_value;
let suffixID = "-";
let previewButton = document.getElementById("preview");
let cnt=0;
let form = document.getElementsByClassName("form-main")[0];
let resumeBlock = document.getElementsByClassName("resume-main")[0];

let firstname ;
let lastname ;
let rolename;
let introname ;
let profile_link;
let IntroductionData = {
    firstname,
    lastname,
    rolename,
    introname,
    profile_link,
}
let uni_name  ;
let q_name;
let c_name ;
let s_year ;
let e_year;
let educationData = {
    uni_name,
    q_name,
    c_name,
    s_year,
    e_year,
};
let t_no;
let email_id;
let linkedin_id;
let add_ress ;
let ps_submit;
let personalData = {
    t_no,
    email_id,
    linkedin_id,
    add_ress,
};

let j_position ;
let j_location ;
let j_start ;
let j_end ;
let j_description;
let jobData = {
    j_description,
    j_position,
    j_start,
    j_end,
    j_location,
};

let skill_field;
let skillData = {
    skill_field,
};
let achievement_data;
let achievementData = {
    achievement_data,
};

let dataModel = {
    IntroductionData,
    personalData,
    educationData,
    jobData,
    skillData,
    achievementData,
}

function emptyFormData ( currentData) {
    for ( let prop in currentData){
        currentData[prop].value = "";
    }
}
previewButton.addEventListener ("click", (e)=> {
   
    cnt++;
    if(cnt%2) {
    // resumeBlock.setAttribute("class","fullwidth");
    // resumeBlock.style.margin = "auto" ;
    resumeBlock.style="width: 80% !important; margin: auto !important; height:3508px";
    form.style.display = "none";
    
    }
    else{
        
        resumeBlock.style="width: 60% !important";
        // resumeBlock.classList.remove("fullwidth");
        form.style.display = "block";
          
    }

})
let buttonType = {
    remove: "x",
    edit:"Edit",
};
function createButton (buttonType) {
    let btn = document.createElement("button");
    btn.innerHTML = buttonType;
    return btn;
}
// function createEditButton () {
//     let edt_btn = document.createElement("button");
//     edt_btn.innerHTML = "Edit";
//     return edt_btn;
// }
function generateRandomID (){
    return Date.now() + Math.random().toString(16).slice(2);
}

function removecontainer (e) {
    let parent_id = e.target.parentNode.id;
    console.log(e.target.parentNode);

    //delete that block
    console.log(document.getElementById(parent_id+suffixID));   // use var for hyphen (-)
    console.log(document.getElementById(parent_id));
    document.getElementById(parent_id+suffixID).remove();
  
    document.getElementById(parent_id).remove();
}
// duplicate  Tag  - removed it 😊.
function createTag (tagType) {
    return document.createElement(tagType);
}
// function createSpan (){
//     return document.createElement('span');
// }
// function createParagraph (){
//     return document.createElement('p');
// }
// function createH4 () {
//     return document.createElement('h4');
// }
function createPreviewContainer (previewContainer,currentContainer) {
    let btn = createButton(buttonType.remove);
    let edt_btn = createButton(buttonType.edit);
    let pre_view = createTag("div");
    let cloneContainer = currentContainer.cloneNode(true);
    pre_view.appendChild(cloneContainer);
    
     pre_view.appendChild(btn);
     pre_view.appendChild(edt_btn);
     previewContainer.appendChild(pre_view);

     let curr_id = generateRandomID();
     pre_view.setAttribute('id',curr_id);
     currentContainer.setAttribute('id', curr_id+suffixID);
         
}
function onSubmit() {
   
  
    let introduction_section = document.getElementsByClassName("introduction-section")[0];   //id
    let picUrl;
    introduction_section.innerHTML= `
         <div class="content-layout">
            <h1 class="name">${IntroductionData.firstname.value} <br> ${IntroductionData.lastname.value}</h1>
            <h2 class="sub-heading">${IntroductionData.rolename.value}</h2>
         </div>
         <img id="profilePicture" class="pic" alt="Profile Pics" />
         <div class="content-layout  "> 
            <h3 style="border-bottom:1px solid rgb(216,204,190)">Profile</h3> 
            <p class="paragraph" id="personal-intro">${IntroductionData.introname.value} </p>
         </div>`;

    let resume_pic = document.getElementById("profilePicture");
    // console.log(resume_pic);
    // console.log(profile_link.files[0]);
    let files = IntroductionData.profile_link.files[0];
    
    resume_pic.src = URL.createObjectURL(files);

       emptyFormData(IntroductionData);
      // duplicate loop 
  
}

 function getEducationInformation ( currentData ) {
     

        let education = {
           universityQualification : currentData.getElementsByTagName('h4')[0],
           courseName : currentData.getElementsByTagName('p')[0],
            duration : currentData.getElementsByTagName('span')[0],
            
        };
        let filterIndex = education.universityQualification.innerHTML.indexOf("-");
        education.Qualification = education.universityQualification.innerHTML.substring(0,filterIndex-1);
        education.universityName = education.universityQualification.innerHTML.substring(filterIndex+2);
        let filterIndexForDuration = education.duration.innerHTML.indexOf("-");
        education.startYear = education.duration.innerHTML.substring(0,filterIndexForDuration-1);
        education.endYear = education.duration.innerHTML.substring(filterIndexForDuration+2);
        return education;
    }
 function setEducationInformation(  setData, data ){
    
        console.log(data.uni_name,data.q_name,setData.universityQualification);
    
        setData.universityQualification.innerHTML = data.q_name.value + " - " + data.uni_name.value;
        setData.courseName.innerHTML = data.c_name.value;
        setData.duration.innerHTML = data.s_year.value + " - " + data.e_year.value;
    }

 function EducationPreviewEditRemoveFeatures (e, educationData) {
    e.preventDefault();
    console.log(e.target);
    let curr_event = e.target.innerHTML;
    let curr_event_id = e.target.parentNode.id;
    console.log(curr_event_id);
    // console.log(e.target);
    console.log(e.target.parentNode);
    // for many buttons : do it without condition
    switch (curr_event) {
        case buttonType.remove:
            alert('if block');
            removecontainer(e);
            break;
        case buttonType.edit:
            console.log("parentnode of preview");
            console.log(e.target.parentNode);
            let currentEducation = getEducationInformation(e.target.parentNode);
               
               educationData.uni_name.value = currentEducation.universityName;
               educationData.q_name.value = currentEducation.Qualification;
               educationData.c_name.value = currentEducation.courseName.innerHTML;
               educationData.s_year.value = currentEducation.startYear;
               educationData.e_year.value = currentEducation.endYear;
          
               educationData.uni_name.setAttribute('class', curr_event_id);
    }
   


 }
function onEducationSubmit() {


 


let edu_submit = document.getElementById("edu-submit");
let edu_details = document.getElementById("edu-details");
let preview_edu = createTag("div");
let preview_edu_form = document.getElementsByClassName('education')[0];



let currBlockFilled = educationData.uni_name.classList[0];
console.log(educationData);
     if(currBlockFilled && currBlockFilled[0]){
          console.log("event is edited");
               let currentPreviewBlock = getEducationInformation(document.getElementById(currBlockFilled));
               let currentBlock = getEducationInformation(document.getElementById(currBlockFilled+suffixID));
                setEducationInformation(currentPreviewBlock,educationData);
                setEducationInformation(currentBlock,educationData);

                
               educationData.uni_name.removeAttribute('class');
              
     }
     else {
// let pre_view = createTag("div");
let degree_uni_name = createTag("h4");
let year_of_education = createTag("span");  
let course_name = createTag("p");
let current_edu = createTag("div");

//  button element  -> btn redundancy has been removed
// let btn = createRemoveButton();
// let edt_btn = createEditButton();


// add classes
current_edu.classList.add("content-title");
degree_uni_name.classList.add("content-item");
year_of_education.classList.add("content-item");
year_of_education.classList.add("extreme-right-item");
course_name.classList.add("content-item");

// console.log(uni_name.value);
// change value of html
degree_uni_name.innerHTML = educationData.q_name.value + " - " + educationData.uni_name.value;
year_of_education.innerHTML = educationData.s_year.value + " - " + educationData.e_year.value;
course_name.innerHTML = educationData.c_name.value;


current_edu.appendChild(degree_uni_name);
current_edu.appendChild(year_of_education);
current_edu.appendChild(course_name);
edu_details.appendChild(current_edu);

// let clone_current_edu = current_edu.cloneNode(true);

createPreviewContainer(preview_edu,current_edu);

// pre_view.appendChild(btn);
// pre_view.appendChild(edt_btn);
// preview_edu.appendChild(pre_view);

//  unique id 
// let curr_id = generateRandomID();
// pre_view.setAttribute('id',curr_id);
// current_edu.setAttribute('id', curr_id+suffixID);
 
console.log(preview_edu);
console.log(preview_edu_form);
preview_edu_form.appendChild(preview_edu);

console.log(document.getElementsByClassName(current_value)[0]);

preview_edu.addEventListener("click", (e)=> { 
    EducationPreviewEditRemoveFeatures(e,educationData);
})
     }
    emptyFormData(educationData);

}

function onPersonalInformationSubmit () {

  
    
    let telephone_div = document.getElementById("telephone-div");
    let email_div = document.getElementById("email-div");
    let linkedin_div = document.getElementById("linkedin-div");
    let add_div = document.getElementById("add-div");

let contact_section = document.getElementsByClassName("contact-section")[0];

    
   console.log("DSFffdbb");
    let personal_block = createTag("div");
    personal_block.setAttribute('class','icon-layout content-layout');

     personal_block.innerHTML = `
    <h3 style="border-bottom:1px solid rgb(216,204,190)">CONTACT</h3>

    <div class="section-layout">
        <i  class="fa-solid fa-phone icon-color"></i>   
        <a class="icon-info" id="telephone-div" href="tel+919662833396"> Tel: ${personalData.t_no.value}</a>
    </div>

    <div class="section-layout">
        <i class="fa-solid fa-inbox icon-color"></i>
        <a class="icon-info" id="email-div"href="mailto:${personalData.email_id.value}?
        subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you"
         target="_blank" >${personalData.email_id.value}</a>
    </div> 

    <div class="section-layout">
        <i class="fa-brands fa-linkedin icon-color"></i>
        <a class="icon-info " id="linkedin-div" href="${personalData.linkedin_id.value}" target="_blank">${personalData.linkedin_id.value}</a>
    </div>

    <div class="section-layout">
        <i class="fa-solid fa-location-dot icon-color"></i>
        <p class="icon-info" id="add-div">${personalData.add_ress.value}</p>
    </div> 

</div>`;
  contact_section.appendChild(personal_block);

     for( let prop in personalData){
        personalData[prop].value = "";
     }
 

}

function setJobInformation ( setData, data) {
    setData.location.innerHTML = data.j_location.value;
    setData.start.innerHTML = data.j_start.value;
    setData.end.innerHTML = data.j_end.value;
    setData.description.innerHTML = data.j_description.value;
    setData.position.innerHTML = data.j_position.value;
    // setData.timeline.innerHTML = data.j_start + " - " + data.j_end;
}
function getJobInformation (currentData) {
    console.log("currentData" + currentData.innerHTML);
    let job = {

         position: currentData.getElementsByTagName('h4')[0],
        //  timeline: currentData.getElementsByTagName('span')[0].innerText,
         location: currentData.getElementsByTagName('p')[0],
         start: currentData.getElementsByTagName('span')[0],
         end: currentData.getElementsByTagName('span')[1],
         description: currentData.getElementsByTagName('p')[1],
         
    }  
  
  
    return job;
}

function  ExperiencePreviewEditRemoveFeatures (e,jobData) {
    e.preventDefault();
    console.log(e.target);
    let curr_event = e.target.innerHTML;
    let curr_event_id = e.target.parentNode.id;
    console.log(curr_event_id);
    // console.log(e.target);
    console.log(e.target.parentNode);
    switch (curr_event) {
        case buttonType.remove:
             removecontainer(e);
             break;
        case buttonType.edit:
            console.log("parentnode of preview");
            console.log(e.target.parentNode);
            let currentJob = getJobInformation(e.target.parentNode);
            
            jobData.j_location.value = currentJob.location.innerHTML; 
            jobData.j_start.value = currentJob.start.innerHTML;
            jobData.j_end.value = currentJob.end.innerHTML;
            jobData.j_description.value = currentJob.description.innerHTML;
            jobData.j_position.value = currentJob.position.innerHTML;
            jobData.j_location.setAttribute('class', curr_event_id);
    }

}
function onExperienceSubmit(){

let work_details = document.getElementById("work-details");
let exp_submit =document.getElementById("exp-submit");


let preview_exp = createTag("div");
let preview_exp_form = document.getElementsByClassName("experience")[0];



        
    let currBlockFilled = jobData.j_location.classList[0];
   
        if(currBlockFilled)
        {
            console.log(document.getElementById(currBlockFilled+suffixID));
               let currentPreviewBlock = getJobInformation(document.getElementById(currBlockFilled));
               let currentBlock = getJobInformation(document.getElementById(currBlockFilled+suffixID));
                 
               setJobInformation(currentPreviewBlock,jobData);
               setJobInformation(currentBlock,jobData);
            //    currBlockFilled.removeAttribute("class");
               jobData.j_location.removeAttribute("class");

        }
        else 
        {
        let work_container = createTag("div");
        // work_container.classList.add("content-layout");
        let work_header = createTag("div");
        work_header.setAttribute('class','content-title');
        
        let job_position = createTag("h4");
        job_position.setAttribute('class','content-item');

        let job_end = createTag("span");
        job_end.setAttribute('class',' small-content-item extreme-right-item');
        let job_start  = createTag("span");
        job_start.setAttribute('class','small-content-item extreme-right-item');
        let job_location = createTag("p");
        job_location.setAttribute('class','content-item');

        work_header.appendChild(job_position);
        work_header.appendChild(job_start);
        
        work_header.appendChild(job_end);
        work_header.appendChild(job_location);

        let job_description =createTag("p");
        job_description.setAttribute('class','paragraph');


        work_container.appendChild(work_header);
        work_container.appendChild(job_description);

     //  button element     //  reuse btn each time using function
     
       
        job_position.innerHTML = jobData.j_position.value;
        job_location.innerHTML = jobData.j_location.value;
        job_description.innerHTML = jobData.j_description.value;
        job_start.innerHTML = jobData.j_start.value;
        job_end.innerHTML = jobData.j_end.value;


        // let clone_current_exp = work_container.cloneNode(true);
         createPreviewContainer(preview_exp,work_container);
        
        
        //  unique id  
        // let curr_id = generateRandomID();
        // pre_view.setAttribute('id',curr_id);
        // work_container.setAttribute('id', curr_id+suffixID);
         
        console.log(preview_exp);
        console.log(work_container);
       
        preview_exp_form.appendChild(preview_exp);
        
        work_details.appendChild(work_container);
        }

        emptyFormData(jobData);
    //    j_position.value="";
    //    j_location.value= "";
    //    j_description.value="";
    //    j_start.value = "";
    //     j_end.value = "";     
        // make objects   and for loop 
    
preview_exp.addEventListener("click", (e)=> {
       ExperiencePreviewEditRemoveFeatures(e,jobData);
})
}

function skillPreviewEditRemoveFeatures (e) {

    e.preventDefault();
    let curr_event = e.target.innerHTML;
    let curr_event_id = e.target.parentNode.id;
    console.log(curr_event_id);
    // console.log(e.target);
    switch(curr_event) {

    case buttonType.remove:
         removecontainer(e);
         break;
    case buttonType.edit:
        console.log(e.target.parentNode.getElementsByTagName("p")[0]);
        let curr_block = e.target.parentNode.firstChild;
        console.log(curr_block);
        skillData.skill_field.value = curr_block.innerHTML; 
        skillData.skill_field.setAttribute('class', curr_event_id);
        break;   
    }
}
function onSkillsSubmit () {
    
let skills_details = document.getElementById("skills-details");

let skills_submit = document.getElementById("skills-submit");
let preview_skill_form = document.getElementsByClassName("skills")[0];

let preview_skill = createTag("div");
preview_skill.setAttribute('class','parent-small-item');




    let curr_preview_block = document.getElementById(skillData.skill_field.classList[0]);
    let curr_block = document.getElementById(skillData.skill_field.classList[0]+suffixID);
    console.log(curr_preview_block);
    console.log("hello",curr_block);
    
    if(curr_preview_block){
           curr_preview_block.firstChild.innerHTML = skillData.skill_field.value;
            curr_block.innerHTML = skillData.skill_field.value;
            skillData.skill_field.removeAttribute('class');
    }
    else {

    // let pre_view = createTag("div");
  
    // let btn = createRemoveButton();
    // let edt_btn = createEditButton();
    let skill_item = document.createElement("li");
    skill_item.setAttribute('class','small-item');

    skill_item.innerHTML = skillData.skill_field.value;

    
    
//    let clone_skill_item = skill_item.cloneNode(true);
   createPreviewContainer(preview_skill,skill_item);
//    pre_view.setAttribute('class','small-item');

    // pre_view.appendChild(btn);
    // pre_view.appendChild(edt_btn);

    // let curr_id = generateRandomID();
    // pre_view.setAttribute('id',curr_id);
    // skill_item.setAttribute('id', curr_id+suffixID);

    // preview_skill.appendChild(pre_view);
    skills_details.appendChild(skill_item);
    preview_skill_form.appendChild(preview_skill);
    }
     emptyFormData(skillData);



preview_skill.addEventListener("click", (e)=> {
        skillPreviewEditRemoveFeatures(e);
     // removecontainer(e);
})

}

function onAchievementsSubmit() {

   

// let achievement_submit = document.getElementById("achievements-submit");

let achievements_details = document.getElementById("achievements-details");

let preview_achiv = createTag("div");
let preview_achiv_form = document.getElementsByClassName("achievements")[0];


// achievement_submit.addEventListener("click", (e)=> {
   
    let curr_preview_block = document.getElementById(achievementData.achievement_data.classList[0]);
    let curr_block = document.getElementById(achievementData.achievement_data.classList[0]+suffixID);
    console.log(curr_preview_block);
    console.log("hello",curr_block);
    
    if(curr_preview_block){
           curr_preview_block.firstChild.innerHTML = achievementData.achievement_data.value;
            curr_block.innerHTML = achievementData.achievement_data.value;
            achievementData.achievement_data.removeAttribute('class');
    }
    else {
   

        // let btn = createRemoveButton();
        // let edt_btn = createEditButton();
    let achiv_block = createTag("p");
    achiv_block.setAttribute('class','paragraph');
    // let pre_view = createTag("div");
    
    achiv_block.innerHTML = achievementData.achievement_data.value;
    

    // let clone_achiv_block = achiv_block.cloneNode(true);
    createPreviewContainer(preview_achiv,achiv_block);

    // pre_view.appendChild(btn);
    // pre_view.appendChild(edt_btn);
    // preview_achiv.appendChild(pre_view);
    let curr_id = generateRandomID();
    // pre_view.setAttribute('id',curr_id);
    // achiv_block.setAttribute('id', curr_id+suffixID);


    
    preview_achiv_form.appendChild(preview_achiv);

    achievements_details.appendChild(achiv_block);
   
   
    }
    emptyFormData(achievementData);

// })

 
preview_achiv.addEventListener( "click", (e)=>{
     achievementsPreviewEditRemoveFeatures
})


}
 function achievementsPreviewEditRemoveFeatures (e) {
    e.preventDefault();
    let curr_event = e.target.innerHTML;
    let curr_event_id = e.target.parentNode.id;
    console.log(curr_event_id);
    // console.log(e.target);
    switch (curr_event) {
        case buttonType.remove:
            removecontainer(e);
            break;
        case buttonType.edit:
            console.log(e.target.parentNode.getElementsByTagName("p")[0]);
            let curr_block = e.target.parentNode.getElementsByTagName("p")[0];
            achievementData.achievement_data.value = curr_block.innerHTML; 
            achievementData.achievement_data.setAttribute('class', curr_event_id);
            break;
    }
 }


let introBlock =  `
<div  class="intro  form-layout">
<label for="fname">First Name:</label><br>
<input type="text" id="fname" name="fname"><br>

<label for="fname">Last Name:</label><br>
<input type="text" id="lname" name="lname"><br>

<label for="rolename">Type of Role:</label><br>
<input type="text" id="rolename" name="rolename"><br>

<label for="introduction">Introduce Yourself </label><br>
<input type="textarea" id="introduction" name="introduction"><br>
<label for="profile-img">Upload Profile Pic </label> <br>
<input type="file" id="profile-img" name="profile-img  accept="image/* "><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="intro-submit"   value="submit" onClick="onSubmit()">Submit</button>
</div>
</div>
`;

let personalInfoBlock = `
<div  class="personal-info  form-layout">
<label for="tnumber">Telephone number</label><br>
<input type="tel" id="tnumber" name="tnumber"><br>
<label for="emailid">Email ID</label><br>
<input type="email" id="emailid" name="emailid"><br>

<label for="linkedinid">Linkedin Profile URL</label><br>
<input type="text" id="linkedinid" name="linkedinid"><br>
<label for="address">Address </label><br>
<input type="text" id="address" name="address"><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="ps-submit"   value="submit" onClick="onPersonalInformationSubmit()">Submit</button>
</div>
</div>
`;


let educationBlock =` 
<div  class="education  form-layout">
<label for="uname">University Name:</label><br>
<input type="text" id="uname" name="uname"><br>
<label for="qname">Qualification:</label><br>
<input type="text" id="qname" name="qname"><br>
<label for="cname">Course Name:</label><br>
<input type="text" id="cname" name="cname"><br>
<label for="syear">Starting Year</label><br>
<input type="number" placeholder="YYYY" id="syear" name="syear"><br>
<label for="eyear">Ending Year</label><br>
<input type="number" id="eyear" name="eyear"><br>

<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="edu-submit"   value="submit" onClick='onEducationSubmit()'>Submit</button>
</div>
<br>
</div>`
;

let experienceBlock  = `<div  class="experience  form-layout">
<label for="jposition">Job Position:</label><br>
<input type="text" id="jposition" name="jposition"><br>
<label for="jlocation">Job Location:</label><br>
<input type="text" id="jlocation" name="jlocation"><br>
<label for="jstart">Job Start</label><br>
<input type="month" placeholder="MM-YYYY"  id="jstart" name="jstart"><br>
<label for="jend"> Job End</label><br>
<input type="month" placeholder="MM-YYYY" id="jend" name="jend"><br>
<label for="jdescription">Description</label><br>
<input type="text" id="jdescription" name="jdescription"><br>

<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="exp-submit"   value="submit" onClick="onExperienceSubmit()">Submit</button>
</div>
</div>
`;

let skillsBlock = `
<div  class="skills form-layout">
<label for="skill-field">Skill</label><br>
<input type="text" id="skill-field" name="skill-field"><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="skills-submit"   value="add" onClick="onSkillsSubmit()">Submit</button>
</div>
</div> `;

let achievementsBlock  =`
<div  class="achievements  form-layout">
<label for="achievements-field">Achievements</label><br>
<textarea type="text" id="achievements-field" name="achievements-field"></textarea><br>
<div class="button-style">
<button type="reset">Reset</button>
<button type="button"  id="achievements-submit"   value="add" onClick="onAchievementsSubmit()">Submit</button>
</div>
</div>`;

let formBlock = {
          ["intro"]: introBlock,  
          ["personal-info"]: personalInfoBlock,
          ["education"]: educationBlock,
          ["experience"]:experienceBlock,
          ["skills"] : skillsBlock,
          ["achievements"]: achievementsBlock,
        };

let fetchObjects = {
    ["intro"]: introFetch,  
    ["personal-info"]: personalInfoFetch,
    ["education"]: educationFetch,
    ["experience"]:experienceFetch,
    ["skills"] : skillsFetch,
    ["achievements"]: achievementsFetch,
}

function introFetch(){
     IntroductionData.firstname = document.getElementById("fname");
     IntroductionData.lastname = document.getElementById("lname");
     IntroductionData.rolename = document.getElementById("rolename");
     IntroductionData.introname = document.getElementById("introduction");
     IntroductionData.profile_link = document.getElementById("profile-img");
    
}
function personalInfoFetch () {
    personalData.t_no = document.getElementById("tnumber");
    personalData.email_id = document.getElementById("emailid");
    personalData.linkedin_id = document.getElementById("linkedinid");
    personalData.add_ress = document.getElementById("address");
    personalData.ps_submit = document.getElementById("ps-submit");
}

function educationFetch () {
    educationData.uni_name  = document.getElementById("uname");
    educationData.q_name = document.getElementById("qname");
    educationData.c_name = document.getElementById("cname");
    educationData.s_year = document.getElementById("syear");
    educationData.e_year = document.getElementById("eyear");
    console.log("fetch is compeleted");
}

function experienceFetch () {
    jobData.j_position = document.getElementById("jposition");
    jobData.j_location = document.getElementById("jlocation");
    jobData.j_start = document.getElementById("jstart");
    jobData.j_end = document.getElementById("jend");
    jobData.j_description = document.getElementById("jdescription");
}
function skillsFetch () {
     skillData.skill_field = document.getElementById("skill-field");
}
function achievementsFetch () {
     achievementData.achievement_data =  document.getElementById("achievements-field");
}
let formParent = document.getElementsByClassName('formOptions')[0];


options.addEventListener( "change", ()=> {
        // e.preventDefault();
    let current_value = options.value;
    // console.log(formBlock[current_value]);
    formParent.innerHTML = formBlock[current_value]; 
    fetchObjects[current_value]();

    // document.getElementsByClassName(current_value)[0].classList.remove("hidden-form");
    // if(old_value!= "none")
    // document.getElementsByClassName(old_value)[0].classList.add("hidden-form");
   

    // console.log(firstname.value);    
    // console.log(lastname.value);
    // console.log(introname.value);
//  console.log(document.getElementsByClassName("name")[0].innerHTML)  ;
//  document.getElementsByClassName("name")[0].innerHTML= firstname.value + "<br>"+ lastname.value;
//  document.getElementsByClassName("sub-heading")[0].innerHTML = rolename.value;
//  console.log(document.getElementById("personal-intro"));
//  document.getElementById("personal-intro").innerHTML = introname.value;
 
})


 

console.log('=> outside =>');

// let   submit = document.getElementById("intro-submit");
// let firstname = document.getElementById("fname");
// let lastname = document.getElementById("lname");
// let rolename = document.getElementById("rolename");
// let introname = document.getElementById("introduction");
// let profile_link = document.getElementById("profile-img");
// let introduction_section = document.getElementsByClassName("introduction-section")[0];   //id
// let picUrl;

// profile_link.addEventListener( "change", (e)=> {
//     picUrl = URL.createObjectURL(e.target.files[0]);

// })
// submit.addEventListener( "click", (e)=> {
//     e.preventDefault();
// introduction_section.innerHTML= `
//      <div class="content-layout">
//         <h1 class="name">${firstname.value} <br> ${lastname.value}</h1>
//         <h2 class="sub-heading">${rolename.value}</h2>
//      </div>
//      <img class="pic" src="$_{picUrl}" alt="Profile Pics" />
//      <div class="content-layout  "> 
//         <h3 style="border-bottom:1px solid rgb(216,204,190)">Profile</h3> 
//         <p class="paragraph" id="personal-intro">${introname.value} </p>
//      </div>`;
// });
   
//   console.log(profile_link);
    
  
//      submit.addEventListener( "click", (e)=> {
//         e.preventDefault();
//     introduction_section.innerHTML= `
//          <div class="content-layout">
//             <h1 class="name">${firstname.value} <br> ${lastname.value}</h1>
//             <h2 class="sub-heading">${rolename.value}</h2>
//          </div>
//          <img class="pic" src="lucifer.jpeg" alt="Profile Pics" />
//          <div class="content-layout  "> 
//             <h3 style="border-bottom:1px solid rgb(216,204,190)">Profile</h3> 
//             <p class="paragraph" id="personal-intro">${introname.value} </p>
//          </div>`;

//     console.log(firstname.value);    
//     console.log(lastname.value);
//     console.log(introname.value);
// //  console.log(document.getElementsByClassName("name")[0].innerHTML)  ;
// //  document.getElementsByClassName("name")[0].innerHTML= firstname.value + "<br>"+ lastname.value;
// //  document.getElementsByClassName("sub-heading")[0].innerHTML = rolename.value;
// //  console.log(document.getElementById("personal-intro"));
// //  document.getElementById("personal-intro").innerHTML = introname.value;
 
// })




// let uni_name = document.getElementById("uname");
// let q_name = document.getElementById("qname");
// let c_name = document.getElementById("cname");
// let s_year = document.getElementById("syear");
// let e_year = document.getElementById("eyear");


// let edu_submit = document.getElementById("edu-submit");
// let edu_details = document.getElementById("edu-details");
// let preview_edu = createTag("div");
// // preview_edu.setAttribute('id','preview-edu');
// let preview_edu_form = document.getElementsByClassName('education')[0];
// console.log(preview_edu_form);
// let educationData = {
//     uni_name,
//     q_name,
//     c_name,
//     s_year,
//     e_year,
// };

// function getEducationInformation ( currentData ) {
     

//     let education = {
//        universityQualification : currentData.getElementsByTagName('h4')[0],
//        courseName : currentData.getElementsByTagName('p')[0],
//         duration : currentData.getElementsByTagName('span')[0],
        
//     };
//     let filterIndex = education.universityQualification.innerHTML.indexOf("-");
//     education.Qualification = education.universityQualification.innerHTML.substring(0,filterIndex-1);
//     education.universityName = education.universityQualification.innerHTML.substring(filterIndex+2);
//     let filterIndexForDuration = education.duration.innerHTML.indexOf("-");
//     education.startYear = education.duration.innerHTML.substring(0,filterIndexForDuration-1);
//     education.endYear = education.duration.innerHTML.substring(filterIndexForDuration+2);
//     return education;
// }
// function setEducationInformation(  setData, data ){

//     console.log(data.uni_name,data.q_name,setData.universityQualification);

//     setData.universityQualification.innerHTML = data.uni_name.value + " - " + data.q_name.value;
//     setData.courseName.innerHTML = data.c_name.value;
//     setData.duration.innerHTML = data.s_year.value + " - " + data.e_year.value;
// }

// edu_submit.addEventListener("click", () => {
//     // to make container  

//      let currBlockFilled = uni_name.classList[0];
//      if(currBlockFilled){
//                let currentPreviewBlock = getEducationInformation(document.getElementById(currBlockFilled));
//                let currentBlock = getEducationInformation(document.getElementById(currBlockFilled+suffixID));
//                 setEducationInformation(currentPreviewBlock,educationData);
//                 setEducationInformation(currentBlock,educationData);

                
//                uni_name.removeAttribute('class');
//      }
//      else
//      {
//     let current_edu = createTag("div");
//     let pre_view = createTag("div");
//     let degree_uni_name = createTag("h4");
//     let year_of_education = createTag("span");  
//     let course_name = createTag("p");
//     //  button element  -> btn redundancy has been removed
//     let btn = createRemoveButton();
//     let edt_btn = createEditButton();
  
    
//     // add classes
//     current_edu.classList.add("content-title");
//     degree_uni_name.classList.add("content-item");
//     year_of_education.classList.add("content-item");
//     year_of_education.classList.add("extreme-right-item");
//     course_name.classList.add("content-item");

//     // console.log(uni_name.value);
//     // change value of html
//     degree_uni_name.innerHTML = q_name.value + " - " + uni_name.value;
//     year_of_education.innerHTML = s_year.value + " - " + e_year.value;
//     course_name.innerHTML = c_name.value;

    
//     current_edu.appendChild(degree_uni_name);
//     current_edu.appendChild(year_of_education);
//     current_edu.appendChild(course_name);
//     edu_details.appendChild(current_edu);

//     let clone_current_edu = current_edu.cloneNode(true);
//     pre_view.appendChild(clone_current_edu);

//     pre_view.appendChild(btn);
//     pre_view.appendChild(edt_btn);
//     preview_edu.appendChild(pre_view);
    
//     //  unique id 
//     let curr_id = Date.now() + Math.random().toString(16).slice(2);
//     pre_view.setAttribute('id',curr_id);
//     current_edu.setAttribute('id', curr_id+suffixID);
     
//     console.log(preview_edu);
//     console.log(preview_edu_form);
//     preview_edu_form.appendChild(preview_edu);
   
//     console.log(document.getElementsByClassName(current_value)[0]);
//      }
//     s_year.value ="";
//     e_year.value ="";
//     c_name.value = "";
//     uni_name.value="";
//     q_name.value = "";
   
// })



// preview_edu.addEventListener("click", (e)=> {
   
//     e.preventDefault();
//     alert('edit');
//     console.log(e.target);
//     let curr_event = e.target.innerHTML;
//     let curr_event_id = e.target.parentNode.id;
//     console.log(curr_event_id);
//     // console.log(e.target);
//     console.log(e.target.parentNode);
//     if(curr_event === "x"){
//         alert('if block');
//         removecontainer(e);
//     }
//     else {
//         alert('else block');
//         console.log("parentnode of preview");
//          console.log(e.target.parentNode);
//          let currentJob = getEducationInformation(e.target.parentNode);
      
//            uni_name.value = currentJob.universityName;
//            q_name.value = currentJob.Qualification;
//            c_name.value = currentJob.courseName.innerHTML;
//            s_year.value = currentJob.startYear;
//            e_year.value = currentJob.endYear;
      
//         uni_name.setAttribute('class', curr_event_id);
//     }

// //    removecontainer(e);


// })


// personal information

// let t_no = document.getElementById("tnumber");
// let email_id = document.getElementById("emailid");
// let linkedin_id = document.getElementById("linkedinid");
// let add_ress = document.getElementById("address");
// let ps_submit = document.getElementById("ps-submit");


// let telephone_div = document.getElementById("telephone-div");
// let email_div = document.getElementById("email-div");
// let linkedin_div = document.getElementById("linkedin-div");
// let add_div = document.getElementById("add-div");
// let ps_container = document.getElementsByClassName('personal-info')[0];
// let preview_ps = createTag("div");

//create container 

// let parent_ps = createTag("div");
// parent_ps.classList.add("icon-layout content-layout");

// parent_ps.innerHTML =<h3 style="border-bottom:1px solid rgb(216,204,190)">CONTACT</h3>;
 
// let ps_block = document.createAttribute("div");


// let contact_section = document.getElementsByClassName("contact-section")[0];

// ps_submit.addEventListener("click", (e)=> {
    
//    console.log("DSFffdbb");
//     let personal_block = createTag("div");
//     personal_block.setAttribute('class','icon-layout content-layout');

//      personal_block.innerHTML = `
//     <h3 style="border-bottom:1px solid rgb(216,204,190)">CONTACT</h3>

//     <div class="section-layout">
//         <i  class="fa-solid fa-phone icon-color"></i>   
//         <a class="icon-info" id="telephone-div" href="tel+919662833396"> Tel: ${t_no.value}</a>
//     </div>

//     <div class="section-layout">
//         <i class="fa-solid fa-inbox icon-color"></i>
//         <a class="icon-info" id="email-div"href="mailto:${email_id.value}?
//         subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you"
//          target="_blank" >${email_id.value}</a>
//     </div> 

//     <div class="section-layout">
//         <i class="fa-brands fa-linkedin icon-color"></i>
//         <a class="icon-info " id="linkedin-div" href="${linkedin_id.value}" target="_blank">linkedin.com/${firstname.value}${lastname.value}</a>
//     </div>

//     <div class="section-layout">
//         <i class="fa-solid fa-location-dot icon-color"></i>
//         <p class="icon-info" id="add-div">${add_ress.value}</p>
//     </div> 

// </div>`;
//   contact_section.appendChild(personal_block);

  // unimportant code
    //    telephone_div.innerHTML = "Tel: +" + t_no.value;
    //    email_div.innerHTML = email_id.value;
       
    //    linkedin_div.innerHTML = linkedin_id.value;
    //    add_div.innerHTML = add_ress.value;
    //    email_div.href = "mailto:${email_id.value}?subject=How you doing!&body= Smelly cat smelly cat!, What are they feeding you" ;
    //    email_div.setAttribute('target','_blank');
    //    console.log(linkedin_id.value);
    //    linkedin_div.href = linkedin_id.value;
       
// })




// work experience 



// let work_details = document.getElementById("work-details");
// let exp_submit =document.getElementById("exp-submit");

// let j_position = document.getElementById("jposition");
// let j_location = document.getElementById("jlocation");
// let j_start = document.getElementById("jstart");
// let j_end = document.getElementById("jend");
// let j_description = document.getElementById("jdescription");
// let jobData = {
//     j_description,
//     j_position,
//     j_start,
//     j_end,
//     j_location,
// };
// let preview_exp = createTag("div");
// let preview_exp_form = document.getElementsByClassName("experience")[0];


// function setJobInformation ( setData, data) {
//     setData.location.innerHTML = data.j_location.value;
//     setData.start.innerHTML = data.j_start.value;
//     setData.end.innerHTML = data.j_end.value;
//     setData.description.innerHTML = data.j_description.value;
//     setData.position.innerHTML = data.j_position.value;
//     // setData.timeline.innerHTML = data.j_start + " - " + data.j_end;
// }
// function getJobInformationPreview ( currentData ) {
  
//     let job = {

//         position: j_position,
//         timeline: currentData.getElementsByTagName('span')[0].innerText,
//         location: currentData.getElementsByTagName('p')[0],
//         description: currentData.getElementsByTagName('p')[1],
        
//    }  
//    let start;
//    let filterIndex = 8;
//    job.start= job.timeline.substring(0,filterIndex);
//    job.end = job.timeline.substring(filterIndex);
//    return job;
// }
// exp_submit.addEventListener( "click", (e) => {
        
//     let currBlockFilled = j_location.classList[0];
   
//         if(currBlockFilled)
//         {
//             console.log(document.getElementById(currBlockFilled+suffixID));
//                let currentPreviewBlock = getJobInformation(document.getElementById(currBlockFilled));
//                let currentBlock = getJobInformation(document.getElementById(currBlockFilled+suffixID));
                 
//                setJobInformation(currentPreviewBlock,jobData);
//                setJobInformation(currentBlock,jobData);
//             //    currBlockFilled.removeAttribute("class");
//                j_location.removeAttribute("class");

//         }
//         else 
//         {
//         let work_container = createTag("div");
//         // work_container.classList.add("content-layout");
//         let work_header = createTag("div");
//         work_header.setAttribute('class','content-title');
        
//         let job_position = createTag("h4");
//         job_position.setAttribute('class','content-item');

//         let job_end = createTag("span");
//         job_end.setAttribute('class',' small-content-item extreme-right-item');
//         let job_start  = createTag("span");
//         job_start.setAttribute('class','small-content-item extreme-right-item');
//         let job_location = createTag("p");
//         job_location.setAttribute('class','content-item');

//         work_header.appendChild(job_position);
//         work_header.appendChild(job_start);
        
//         work_header.appendChild(job_end);
//         work_header.appendChild(job_location);

//         let job_description =createTag("p");
//         job_description.setAttribute('class','paragraph');


//         work_container.appendChild(work_header);
//         work_container.appendChild(job_description);

//      //  button element     //  reuse btn each time using function
//      let btn = createRemoveButton();
//      let edt_btn = createEditButton();
//      let pre_view = createTag("div");
       
//         job_position.innerHTML = j_position.value;
//         job_location.innerHTML = j_location.value;
//         job_description.innerHTML = j_description.value;
//         job_start.innerHTML = j_start.value;
//         job_end.innerHTML = j_end.value;


//         let clone_current_exp = work_container.cloneNode(true);
//         pre_view.appendChild(clone_current_exp);
//        // re use 
//         pre_view.appendChild(btn);
//         pre_view.appendChild(edt_btn);
//         preview_exp.appendChild(pre_view);
        
//         //  unique id  
//         let curr_id = Date.now() + Math.random().toString(16).slice(2);
//         pre_view.setAttribute('id',curr_id);
//         work_container.setAttribute('id', curr_id+suffixID);
         
//         console.log(preview_exp);
//         console.log(work_container);
       
//         preview_exp_form.appendChild(preview_exp);
        
//         work_details.appendChild(work_container);
//         }
//        j_position.value="";
//        j_location.value= "";
//        j_description.value="";
//        j_start.value = "";
//         j_end.value = "";     
//         // make objects   and for loop 
       
// });

// preview_exp.addEventListener("click", (e)=> {
//     e.preventDefault();
//     console.log(e.target);
//     let curr_event = e.target.innerHTML;
//     let curr_event_id = e.target.parentNode.id;
//     console.log(curr_event_id);
//     // console.log(e.target);
//     console.log(e.target.parentNode);
//     if(curr_event == "x")
//     removecontainer(e);
//     else {
//         console.log("parentnode of preview");
//          console.log(e.target.parentNode);
//          let currentJob = getJobInformation(e.target.parentNode);
      
//         j_location.value = currentJob.location.innerHTML; 
//         j_start.value = currentJob.start.innerHTML;
//         j_end.value = currentJob.end.innerHTML;
//         j_description.value = currentJob.description.innerHTML;
//         j_position.value = currentJob.position.innerHTML;
//         // console.log(currentJob.start);
       
      
//         j_location.setAttribute('class', curr_event_id);
//     }

// })




// skills 


// let skills_details = document.getElementById("skills-details");

// let skills_submit = document.getElementById("skills-submit");
// let preview_skill_form = document.getElementsByClassName("skills")[0];
// let skill_field = document.getElementById("skill-field");
// let preview_skill = createTag("div");
// preview_skill.setAttribute('class','parent-small-item');


// skills_submit.addEventListener("click", (e)=> {


//     let curr_preview_block = document.getElementById(skill_field.classList[0]);
//     let curr_block = document.getElementById(skill_field.classList[0]+suffixID);
//     console.log(curr_preview_block);
//     console.log("hello",curr_block);
    
//     if(curr_preview_block){
//            curr_preview_block.firstChild.innerHTML = skill_field.value;
//             curr_block.innerHTML = skill_field.value;
//             skill_field.removeAttribute('class');
//     }
//     else {

//     let pre_view = createTag("div");
//     pre_view.setAttribute('class','small-item');
//     let btn = createRemoveButton();
//     let edt_btn = createEditButton();
//     let skill_item = document.createElement("li");
//     skill_item.setAttribute('class','small-item');

//     skill_item.innerHTML = skill_field.value;

    
    
//    let clone_skill_item = skill_item.cloneNode(true);
//     pre_view.appendChild(clone_skill_item);

//     pre_view.appendChild(btn);
//     pre_view.appendChild(edt_btn);

//     let curr_id = Date.now() +  Math.random().toString(16).slice(2);
//     pre_view.setAttribute('id',curr_id);
//     skill_item.setAttribute('id', curr_id+suffixID);

//     preview_skill.appendChild(pre_view);
//     skills_details.appendChild(skill_item);
//     preview_skill_form.appendChild(preview_skill);
//     }
//      skill_field.value ="";
// });


// preview_skill.addEventListener("click", (e)=> {

//     e.preventDefault();
//     let curr_event = e.target.innerHTML;
//     let curr_event_id = e.target.parentNode.id;
//     console.log(curr_event_id);
//     // console.log(e.target);
//     if(curr_event == "x")
//     removecontainer(e);
//     else {

//         console.log(e.target.parentNode.getElementsByTagName("p")[0]);
//         let curr_block = e.target.parentNode.firstChild;
//         console.log(curr_block);
//         skill_field.value = curr_block.innerHTML; 
//         skill_field.setAttribute('class', curr_event_id);
   
//     }
    
//     // removecontainer(e);
// })


// Achievements 


// let achievement_data =  document.getElementById("achievements-field");

// let achievement_submit = document.getElementById("achievements-submit");

// let achievements_details = document.getElementById("achievements-details");

// let preview_achiv = createTag("div");
// let preview_achiv_form = document.getElementsByClassName("achievements")[0];


// achievement_submit.addEventListener("click", (e)=> {
   
//     let curr_preview_block = document.getElementById(achievement_data.classList[0]);
//     let curr_block = document.getElementById(achievement_data.classList[0]+suffixID);
//     console.log(curr_preview_block);
//     console.log("hello",curr_block);
    
//     if(curr_preview_block){
//            curr_preview_block.firstChild.innerHTML = achievement_data.value;
//             curr_block.innerHTML = achievement_data.value;
//             achievement_data.removeAttribute('class');
//     }
//     else {
   

//         let btn = createRemoveButton();
//         let edt_btn = createEditButton();
//     let achiv_block = createTag("p");
//     achiv_block.setAttribute('class','paragraph');
//     let pre_view = createTag("div");
    
//     achiv_block.innerHTML = achievement_data.value;


//     let clone_achiv_block = achiv_block.cloneNode(true);
//     pre_view.appendChild(clone_achiv_block);

//     pre_view.appendChild(btn);
//     pre_view.appendChild(edt_btn);
//     preview_achiv.appendChild(pre_view);
//     let curr_id = Date.now() +  Math.random().toString(16).slice(2);
//     pre_view.setAttribute('id',curr_id);
//     achiv_block.setAttribute('id', curr_id+suffixID);


    
//     preview_achiv_form.appendChild(preview_achiv);

//     achievements_details.appendChild(achiv_block);
   
//     achievement_data.value ="";
//     }

// })

 
// preview_achiv.addEventListener( "click", (e)=>{
//     // e.preventDefault();
//     let curr_event = e.target.innerHTML;
//     let curr_event_id = e.target.parentNode.id;
//     console.log(curr_event_id);
//     // console.log(e.target);
//     if(curr_event == "x")
//     removecontainer(e);
//     else {
 
//         console.log(e.target.parentNode.getElementsByTagName("p")[0]);
//         let curr_block = e.target.parentNode.getElementsByTagName("p")[0];
//         achievement_data.value = curr_block.innerHTML; 
//         achievement_data.setAttribute('class', curr_event_id);
//        // reuse edit button
//     }
// })

