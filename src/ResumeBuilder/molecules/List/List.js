
import React from 'react'
import { renderList } from './list.helper';
function List({List,WrapperComponent}) {
    console.log(List);
    return (
      <>
      {renderList(List,WrapperComponent)}
      {/* {List?.map( item => {
         const currentItem = Object.entries(item)[0];
      //    console.log(currentItem[1]);
         return (
         
         <WrapperComponent List={currentItem[1]} key={currentItem[0]} id={currentItem[0]}/> 
        
         )
        })} */}
      </>
    )
}

export default List

