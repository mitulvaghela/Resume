export const handleDelete =(id,section,state) => {
    const sectionDetails = state[section];
    const updatedSectionDetails = sectionDetails.filter( item => !(item.id == id ));
    console.log("dispatch method has been called for particular delete button ");
    return {
        ...state,
        [section]:updatedSectionDetails,
    }
                
 }