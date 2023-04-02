
export const renderListObject = (List,WrapperComponent) => (
    Object.values(List)?.map( listItem => {
        
     //    console.log(currentItem[1]);
        return (
        
                <WrapperComponent key={listItem} name={listItem}/> 
      
       
        )
       })
)