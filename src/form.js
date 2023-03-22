
const introBlock =  `
<form  class="intro  form-layout" section="intro">
<div class="firstLastName">
   <div class="smallChild formMargin">
    <label class="profileLabel" for="profile-img">Upload Profile Picture </label> 
    
    <img id="previewProfilePicture" class="pic" alt="Profile Pics" src="./Images/lucifer.jpeg" />
    <input type="file" section="image" id="profile-img" name="profile-img" onclick="loadImage(this)"   src="lucifer.jpeg" accept="image/* ">
    <button onclick="event.preventDefault(); document.getElementById('profile-img').click();" class="buttonImage" >Choose File</button>
  </div >

<div class="bigChild formMargin">
    <div class="firstLastName">
        <div class="halfChild formMargin">
        <label for="fname">First Name:</label>
        <input type="text" section="intro" id="fname" oninput=" fetchValue(this)" placeHolder="e.g. Mitul" name="fname">
        </div>
        <div class="halfChild formMargin">
        <label for="fname">Last Name:</label>
        <input type="text" section="intro" id="lname" oninput=" fetchValue(this)" placeHolder="e.g. Vaghela" name="lname">
        </div>
    </div>
        <div class="formMargin">
        <label for="roleName">Type of Role:</label>
        <input type="text" section="intro" id="roleName" oninput="fetchValue(this)" placeHolder="e.g. Software Engineer" name="roleName">
        </div>
        <div class="formMargin">
        <label for="introduction">Introduce Yourself </label>
        <input type="textarea" section="intro"  id="introduction" oninput="fetchValue(this)" placeHolder="e.g. I have good knowledge regarding data-structures,..."name="introduction">
        </div>
    
        <div class="buttonParent formMargin">
        <button type="reset" class="buttonStyle resetButton">Reset</button>
        <button type="button" section="intro" id="intro-submit"  class="buttonStyle submitButton"  onclick="formSubmit(this)" value="submit" ">Submit</button>
        </div>
</div>        
</div>

    </form>
`;

const personalInfoBlock = `
<form  class="personal-info  form-layout">
<div class="firstLastName">
<div class="formMargin halfChild" >
<label for="tnumber">Telephone number</label>
<input type="tel" section="personal-info" onchange="fetchValue(this)" placeHolder="e.g. +91 9662833396" id="tnumber" name="tnumber">
</div>
<div class="formMargin halfChild" >
<label for="emailid">Email ID</label>
<input type="email" section="personal-info" onchange="fetchValue(this)" placeHolder="e.g. vmdipakbhai@tekion.com " id="emailid" name="emailid">
</div>
</div>
<div class="firstLastName">
<div class="formMargin halfChild" >
<label for="linkedinid">Linkedin Profile URL</label>
<input type="text" section="personal-info" onchange="fetchValue(this)" placeHolder="e.g. https://linkedin/com/mitul-vaghela" id="linkedinid" name="linkedinid">
</div>
<div class="formMargin halfChild" >
<label for="addressForm">Address </label>
<input type="text" section="personal-info" onchange="fetchValue(this)" placeHolder="e.g. Katargam, Surat, Gujarat" id="addressForm" name="address">
</div>
</div>
<div class="buttonParent formMargin">
<button type="reset" class="resetButton buttonStyle">Reset</button>
<button type="button" section="personal-info" class="submitButton buttonStyle" id="personal-info-submit"  onclick="formSubmit(this)" value="submit" >Submit</button>
</div>
</form>
`;


const educationBlock =` 
<form  class="education  form-layout">
    <div class="firstLastName">
        <div class="formMargin halfChild">
            <label for="uname">University Name:</label>
            <input type="text" section="education" onchange="fetchValue(this)" id="uname" placeHolder="e.g. Nirma " name="uname">
        </div>
        <div class="formMargin halfChild">
            <label for="qname">Qualification:</label>
            <input type="text" section="education" onchange="fetchValue(this)" id="qname" placeHolder="e.g. Bachelor Degree " name="qname">
        </div> 
    </div>
    <div class="formMargin">
        <label for="cname">Course Name:</label>
        <input type="text" section="education" onchange="fetchValue(this)" id="cname"  placeholder="e.g. Computer Science " name="cname">
    </div>
    <div class="firstLastName">
        <div class="formMargin halfChild">
            <label for="syear">Starting Year</label>
            <input type="text" section="education"  placeholder="Date" onchange="(this.type='month');fetchValue(this); " onblur="(this.type='text')" id="syear" name="syear">
        </div>
        <div class="formMargin halfChild">
            <label for="eyear">Ending Year</label>
            <input type="text" section="education" placeholder="Date" onchange=" (this.type ='month'); fetchValue(this);" onblur="(this.type='text') " id="eyear" name="eyear">
        </div>
    </div>

    <div class="buttonParent formMargin">
        <button type="reset" class="buttonStyle resetButton">Reset</button>
        <button type="button" section="education"  id="education-submit"   class="buttonStyle submitButton" onclick="formSubmit(this)" value="submit" >Submit</button>
    </div>

</form>
`
;

const experienceBlock  = `
<form  class="experience  form-layout">
    <div class="firstLastName">
        <div class="formMargin halfChild">
            <label for="jposition">Job Position:</label>
            <input type="text" section="experience" onchange="fetchValue(this)" id="jposition" placeholder="e.g. Software Engineer" name="jposition">
        </div>
        <div class="formMargin halfChild">
            <label for="jlocation">Job Location:</label>
            <input type="text" section="experience" onchange="fetchValue(this)"  id="jlocation" placeholder="e.g. Surat " name="jlocation">
        </div>
    </div>
    <div class="firstLastName">
    <div class="formMargin halfChild">
        <label for="jstart">Job Start</label>
        <input type="text" section="experience"  placeholder="Date" onchange="(this.type='month');fetchValue(this);" onblur="(this.type='text')"   id="jstart" name="jstart">
    </div>
    
    <div class="formMargin halfChild">
        <label for="jend"> Job End</label>
        <input type="text" section="experience"   placeholder="Date" onchange="(this.type='month');fetchValue(this);" onblur="(this.type='text')" id="jend" name="jend">
    </div>
    </div>
    <div class="formMargin">
        <label for="jdescription">Description</label>
        <input type="text" section="experience" onchange="fetchValue(this)"  id="jdescription" placeholder="I have worked on many techonologies,..." name="jdescription">
    </div>

    <div class="buttonParent formMargin">
        <button type="reset" class="buttonStyle resetButton" >Reset</button>
        <button type="button" section="experience"  class="buttonStyle submitButton" id="experience-submit"  onclick="formSubmit(this)" value="submit" >Submit</button>
    </div>
</form>
`;

const skillsBlock = `
<form  class="skills form-layout">
<div class="formMargin">
<label for="skillField">Skill</label>
<input type="text" section="skills" onchange="fetchValue(this)"  placeHolder="e.g. Java, MATLAB,... " id="skillField" name="skill-field">
</div>
<div class="buttonParent formMargin">
<button type="reset" class="resetButton buttonStyle">Reset</button>
<button type="button" section="skills" class="submitButton buttonStyle " id="skills-submit" onclick="formSubmit(this)"  value="submit" >Submit</button>
</div>
</form> `;

const achievementsBlock  =`
<form  class="achievements  form-layout">
<div class="formMargin">
<label for="achievementsField">Achievements</label>
<textarea type="text" section="achievements" onchange="fetchValue(this)" placeHolder="e.g. I have secured 4th Rank in Regional Board Exam " id="achievementsField" name="achievements-field"></textarea>
</div>
<div class="buttonParent formMargin">
<button type="reset" class="resetButton buttonStyle " >Reset</button>
<button type="button" section="achievements" class="submitButton buttonStyle " id="achievements-submit" onclick="formSubmit(this)"  value="submit" >Submit</button>
</div>
</form>`;

const formBlock = {
          ["intro"]: introBlock,  
          ["personal-info"]: personalInfoBlock,
          ["education"]: educationBlock,
          ["experience"]:experienceBlock,
          ["skills"] : skillsBlock,
          ["achievements"]: achievementsBlock,
        };


export {formBlock, introBlock,personalInfoBlock, educationBlock,experienceBlock,skillsBlock,achievementsBlock}