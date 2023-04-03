import { createStore } from "redux"
const initialState = {
    formSection:"",
}
export const sectionActions = (props,type) => {
    return {
        type:type,
        payload:props,
    }
}
export const  sectionReducer = (state=initialState,{type,payload}) => {
     
       switch(type){
        case "SECTIONNAME": return {
            ...state,
            formSection:payload,
        };
        default: return state;
       }
}
export const sectionName = createStore(sectionReducer);