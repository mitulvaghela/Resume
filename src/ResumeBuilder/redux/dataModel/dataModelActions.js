// import { COUNTER_ } from "./countersTypes"
import { SECTION_TYPES } from "./dataModelTypes"
// export function COUNTER() {
//     return {
//         type:COUNTER_,
//     }
// }


export function datamodelAction(type,props) {
     switch(type){
        case "SUBMIT": 
        const id=Date.now().toString(16);
        return {
            
            type:type,
            payload:{...props.formData,id:id},
            section:props.formSection,
        }
        case "DELETE": return {
            payload: props.currentId,
            type: type,
            section:props.formSection,
        }
        case "EDIT": return {
            type:type,
            id:props.currentId,
            payload:props.formData,  
            section:props.formSection,
        }
        default: return {
            type:type,
            payload:props,
        }

     }
}

