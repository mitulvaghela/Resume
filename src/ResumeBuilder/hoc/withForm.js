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
import { SECTION_TYPES } from '../redux/dataModel/dataModelTypes';
import { datamodelAction } from '../redux/dataModel/dataModelActions';
import { STORE_TYPES } from '../redux/storeTypes';
const CHECKSTATIC = ['intro','personal-info','image'];
const withForm = ({initialList}) => {

    function NewComponent (WrappedComponent){

        const RefComponent = () => {

            console.log("useform",initialList);
         
            const [formData, setFormData] = useState(initialList); // formData, setFormData
            // console.log('testing......', formData);
            const {formSection} = useSelector( (state) => state[STORE_TYPES.SECTIONNAME]);
            const sectionDetails = useSelector( state => {
                return state[STORE_TYPES.DATAMODEL][formSection];
             }
            )
            const dispatch = useDispatch();
            const [isEditing,setIsEditing] = useState("");
            console.log(sectionDetails);
            function fetchValue (text,type) {
                     console.log(text);
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
                console.log("before submit",formData);
                 // logic in redux
                 dispatch(datamodelAction("SUBMIT",{formSection,formData}));
                // const sectionName = e.target.getAttribute("section");
                
                // if(CHECKSTATIC.filter( item => item == sectionName ).length != 0)
                // {
                //     console.log("button is clicked");
                //     dispatch(datamodelAction({...formData},formSection));
                //     // setDataModel({...dataModel, [sectionName]:{...formData}})
                // }
                // else {

                //      // without logic in redux
                //     // const updatedSectionDetails = sectionDetails.slice();
                //     // const id = Date.now().toString(16);
                //     // console.log(updatedSectionDetails);
                //     // // setFormData( (state) => ({...state,id:id}));
                //     // updatedSectionDetails?.push({...formData,id:id});
                //     // dispatch(datamodelAction)
                //     // dispatch(datamodelAction(updatedSectionDetails,formSection));

       
                //     // before redux 
                //     // setDataModel(updatedSectionDetails);
                
                // }

                // localStorage.setItem(`${sectionName}`,JSON.stringify(sectionDetails[sectionName]));
                resetForm();
            }
                
                
            function resetForm(){
                // console.log("----------------------Mitul");
                    setFormData(initialList);
            }
        
            function deleteItem(sectionName,currentId){
                
                // const updatedSectionDetails = sectionDetails.slice();
               // const updatedSectionDetails = [...currentSection];
                // setDataModel({...dataModel , [sectionName]: currentSection});
                 //  logic in redux
                dispatch(datamodelAction("DELETE",{formSection,currentId}));
                 // without logic in redux
                // const updatedSectionDetails = sectionDetails.filter( item => !(item.id == currentId ));
                
                // dispatch(datamodelAction(updatedSectionDetails,formSection));
                        
            }  
               
            function  getItem (sectionName,currentId) { 
                
                const currentItem = sectionDetails.filter( item =>  item.id == currentId ); 
                return currentItem[0];
            }
                
                    
            function editItem(sectionName,newData,currentId){

               
                   // before redux
                   // setDataModel( {...dataModel,sectionName:dataModel[sectionName]});
               

                 //  logic in redux
                dispatch(datamodelAction("EDIT",{currentId,formData,formSection}));

                 // without logic in redux
                  // const updatedSectionDetails = sectionDetails.slice();
                // const updatedSectionDetails =  sectionDetails.map( item=> {
                //     if(item.id== currentId) item={...newData};
                //     return item;
                // })
                // dispatch(datamodelAction(updatedSectionDetails,formSection));
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
