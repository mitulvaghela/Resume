
import { SECTION_TYPES } from "./datamodelTypes";

const initialState = {
    ["intro"]:{},
   ["education"]:new Array(),
   ["experience"]:new Array (),
   ["personal-info"]:{},
   ["skills"]:new Array(),
   ["achievements"]:[],
   ["image"]:{src:""}, 
}


export const datamodelReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case SECTION_TYPES["INTRODUCTION"]: return {
            ...state,
            [SECTION_TYPES["INTRODUCTION"]]:payload,
        }
        case SECTION_TYPES["PERSONALINFORMATION"] : return {
            ...state,
            [SECTION_TYPES["PERSONALINFORMATION"]]:payload,
        }
        case SECTION_TYPES["ACHIEVEMENTS"]: return {
            ...state,
            [SECTION_TYPES["ACHIEVEMENTS"]]: payload,
        }
        case SECTION_TYPES["EDUCATION"]: return {
            ...state,
            [SECTION_TYPES["EDUCATION"]]: payload,
        }
        case SECTION_TYPES["EXPERIENCE"]: return {
            ...state,
            [SECTION_TYPES["EXPERIENCE"]]:payload,
        }
        case SECTION_TYPES["SKILLS"]: return {
            ...state,
            [SECTION_TYPES["SKILLS"]]:payload,
        }
        case SECTION_TYPES["IMAGE"]: return {
            ...state,
            [SECTION_TYPES["IMAGE"]]:payload,
        }
        default: return state
    }
}

export default datamodelReducer;