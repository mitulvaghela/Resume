// take initialValues => pass to wrapped component

// const [initVal, setInitVal] = useState(initialValues);

/*
    return (
        <Modal>

        <WrappedComponent
            initialValues={initVal}
            setInitialValues={setInitVal}
        />
        </Modal>
    )


*/

import React, { useContext, useState} from 'react';
import { FormContext } from '../ResumeBuilder';
import { connect, useDispatch, useSelector } from "react-redux"
import { SECTION_TYPES } from '../reduce/datamodelTypes';
import { datamodelAction } from '../reduce/datamodelActions';
const CHECKSTATIC = ['intro','personal-info'];
const withForm = ({initialList}) => {

    function NewComponent (WrappedComponent){

        const RefComponent = () => {

            // console.log("useform",initialList);
         
            const [formData, setFormData] = useState(initialList); // formData, setFormData
            // console.log('testing......', formData);
            const {formSection} = useContext(FormContext);
            const sectionDetails = useSelector( state => {
                // console.log(state,state[formSection]);
                return state[formSection]
            }
                )
            const dispatch = useDispatch();
            const [isEditing,setIsEditing] = useState("");
            console.log(sectionDetails);
            function fetchValue (text,type) {
                
                    setFormData( (prevState) => { 
                        return ({...prevState, [type]:  text }) 
                    })            
                }
            
                
            function formSubmit(e){
                
                if(isEditing !=="")
                {
                        editItem(formSection,formData,isEditing);
                        setIsEditing("");
                        resetForm();
                        return;
                }
                
                const sectionName = e.target.getAttribute("section");
                
                if(CHECKSTATIC.filter( item => item == sectionName ).length != 0)
                {
                    console.log("button is clicked");
                    dispatch(datamodelAction({...formData},formSection));
                    // setDataModel({...dataModel, [sectionName]:{...formData}})
                }
                else {

                    const updatedSectionDetails = sectionDetails.slice();
                    const id = Date.now().toString(16);
                    console.log(updatedSectionDetails);
                    // setFormData( (state) => ({...state,id:id}));
                    updatedSectionDetails?.push({...formData,id:id});
                    dispatch(datamodelAction(updatedSectionDetails,formSection));
                    // setDataModel(updatedSectionDetails);
                
                }

                // localStorage.setItem(`${sectionName}`,JSON.stringify(sectionDetails[sectionName]));
                resetForm();
            }
                
                
            function resetForm(){
                // console.log("----------------------Mitul");
                    setFormData(initialList);
            }
        
            function deleteItem(sectionName,currentId){
                
                // const updatedSectionDetails = sectionDetails.slice();
                const updatedSectionDetails = sectionDetails.filter( item => !(item.id == currentId ));
                // const updatedSectionDetails = [...currentSection];
                // setDataModel({...dataModel , [sectionName]: currentSection});
                dispatch(datamodelAction(updatedSectionDetails,formSection));
                        
            }  
               
            function  getItem (sectionName,currentId) { 
                
                const currentItem = sectionDetails.filter( item =>  item.id == currentId ); 
                return currentItem[0];
            }
                
                    
            function editItem(sectionName,newData,currentId){

                const updatedSectionDetails =  sectionDetails.map( item=> {
                    if(item.id== currentId) item={...newData};
                    return item;
                })
                // setDataModel( {...dataModel,sectionName:dataModel[sectionName]});
                // const updatedSectionDetails = sectionDetails.slice();;
                dispatch(datamodelAction(updatedSectionDetails,formSection));
                resetForm();
            }

            function editItemPhase(e) {
                const id = e.target.id;
                const currentItem = getItem(formSection,id);    
                setFormData(currentItem);
                setIsEditing(id);
            } 
                
            

                return (
                    <WrappedComponent  initialList={initialList}
                                        formData={formData} 
                                        setFormData={setFormData} 
                                        formSubmit={formSubmit} 
                                        fetchValue={fetchValue}
                                        resetForm={resetForm}
                                        editItemPhase={editItemPhase}
                                        editItem={editItem}
                                        deleteItem={deleteItem}
                                        getItem={getItem}
                                        />
                    )
        }

        return  RefComponent;

    }

   return NewComponent;
}

export default withForm
