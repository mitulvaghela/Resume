import { combineReducers, createStore } from "redux";
import datamodel from "./dataModel";
import datamodelReducer from "./dataModel/dataModelReducer";
import { sectionReducer } from "./sectionName";
import { STORE_TYPES } from "./storeTypes";

export const rootReducer = combineReducers({
    [STORE_TYPES.SECTIONNAME]: sectionReducer,
    [STORE_TYPES.DATAMODEL]:datamodelReducer,
})
export const store = createStore(rootReducer);


