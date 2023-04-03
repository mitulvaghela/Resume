
import { useSelector } from "react-redux";
import { SECTION_TYPES } from "./dataModelTypes";
import { handleDelete } from "../helper/handleDelete";
import { handleEdit } from "../helper/handleEdit";
import { handleSubmit } from "../helper/handleSubmit";
const initialState = {
    ["intro"]:{},
   ["education"]:new Array(),
   ["experience"]:new Array (),
   ["personal-info"]:{},
   ["skills"]:new Array(),
   ["achievements"]:[],
   ["image"]:{src:""}, 
}


export const datamodelReducer = (state=initialState, action) => {
    switch(action.type){
        case "SUBMIT" : {
            const {payload,section} = action;
             return handleSubmit(payload,section,state);
        }
        case "DELETE" :  {
             const {payload,section} = action;
             return handleDelete(payload,section,state);
        }
        case "EDIT":{
            const {id,payload,section} = action;
            console.log(action);
            return handleEdit({payload,id,section,state});
        } 
        
        // case SECTION_TYPES.INTRODUCTION: return {
        //     ...state,
        //     [SECTION_TYPES["INTRODUCTION"]]:payload,
        // }
        // case SECTION_TYPES["PERSONALINFORMATION"] : return {
        //     ...state,
        //     [SECTION_TYPES["PERSONALINFORMATION"]]:payload,
        // }

        // case SECTION_TYPES["ACHIEVEMENTS"]: return {
        //     ...state,
        //     [SECTION_TYPES["ACHIEVEMENTS"]]: payload,
        // }
        // case SECTION_TYPES["EDUCATION"]: return {
        //     ...state,
        //     [SECTION_TYPES["EDUCATION"]]: payload,
        // }
        // case SECTION_TYPES["EXPERIENCE"]: return {
        //     ...state,
        //     [SECTION_TYPES["EXPERIENCE"]]:payload,
        // }
        // case SECTION_TYPES["SKILLS"]: return {
        //     ...state,
        //     [SECTION_TYPES["SKILLS"]]:payload,
        // }
        // case SECTION_TYPES["IMAGE"]: return {
        //     ...state,
        //     [SECTION_TYPES["IMAGE"]]:payload,
        // }
        default: return state
    }
}

export default datamodelReducer;