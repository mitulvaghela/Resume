
import React,{useState} from 'react';
import './css/App.css';
import Menubar from './molecules/MenuBar/Menubar';
import Resume from './resume/Resume';
import Form from './form/Form';
import { Provider } from 'react-redux';
import datamodel from './reduce/datamodel';
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
  // const [dataModel,setDataModel] = useState(initialModel);
  const [formSection,setFormSection] = useState("");
 
 
  return (
    <Provider store={datamodel}>
    <FormContext.Provider value={{formSection,setFormSection}}>
    <Menubar/>
    <div className='main'>
      <Form/>
      <Resume/>
    </div>
    </FormContext.Provider>
    </Provider>
  );
}



export default App;
