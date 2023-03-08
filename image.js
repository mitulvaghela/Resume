
export function imageOnLoad() {
    console.log("image changed");
    const image = document.querySelector('#profile-img');
    const resumeImage = document.querySelector("#profilePicture");
    // if(!image)
    // return;
    image.addEventListener("change", ()=> {
      let reader = new FileReader();

      reader.onload = function(e) {
          resumeImage.setAttribute('src', e.target.result);
          // console.log(e.target.result);
          localStorage.setItem('img',e.target.result);
    }

    if(image.files[0])
        reader.readAsDataURL(image.files[0]);
      
    })

}
