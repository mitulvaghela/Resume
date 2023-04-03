const CHECKSTATIC = ['intro','personal-info'];
export const handleSubmit = (payload,section,state) => {
       
    const sectionDetails = state[section];
    let updatedSectionDetails;
    console.log(section,sectionDetails);
    if(CHECKSTATIC.filter( item => item == section ).length != 0)
    {
        console.log("button is clicked for static data");
        updatedSectionDetails = {...sectionDetails,...payload};
        console.log(updatedSectionDetails);
    }
    else {
        updatedSectionDetails = sectionDetails.slice();
        updatedSectionDetails?.push({...payload});
    }
   console.log("dispatch method has been called for particular submit button ");

   return {
       ...state,
       [section]:updatedSectionDetails,
   }

}
