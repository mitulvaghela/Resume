


// import counterReducer from './counters/countersReducer';

import { createStore } from 'redux';
// import { COUNTER_ } from './counters/countersTypes';
import { datamodelReducer } from './datamodelReducer';
// const redux = require('redux');


const datamodel = createStore(datamodelReducer);
// const sectionName = createStore(sectionNameReducer);
// const store = createStore(counterReducer);
// const counterSlice = createSlice({
//     name:COUNTER_,
//     initialState
// })
// console.log(datamodel.getState());
// console.log(store.getState())

datamodel.subscribe( () => {console.log(datamodel.getState())});
export default datamodel
