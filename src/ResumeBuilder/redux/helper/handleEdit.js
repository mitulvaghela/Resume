
 export const handleEdit = (props) => {
    const {id,payload,section,state} = props;
    console.log(props);
    const sectionDetails = state[section];
     const updatedSectionDetails =  sectionDetails.map( item=> {
                    if(item.id== id) item={...payload};
                    return item;
     });
     console.log("dispatch method has been called for particular edit button ")
     return {
        ...state,
        [section]:updatedSectionDetails,
     }
 
 }