
import React,{useState} from 'react';
import './css/App.css';
import Menubar from './molecules/MenuBar/Menubar';
import Resume from './resume/Resume';
import Form from './form/Form';
import { Provider, useSelector } from 'react-redux';
import datamodel from './redux/dataModel';
import { store } from './redux/store';
import {Route, Switch} from 'react-router-dom';
import { STORE_TYPES } from './redux/storeTypes';
// import { store } from './reduce/store';
export const FormContext = React.createContext("Mitul");

const initialModel = {
   ["intro"]:{},
   ["education"]:new Array(),
   ["experience"]:new Array (),
   ["personal-info"]:{},
   ["skills"]:new Array(),
   ["achievements"]:new Array(),
   ["image"]:{src:""},
}

function App() {
  
  const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
 
  return (
    <>
    <Menubar/>

    <div className='main'>

      <Route path={`/${formSection}`} >
            <Form/>
      </Route> 

      <Resume/>
    </div>
    
    </>
  );
}



export default App;
