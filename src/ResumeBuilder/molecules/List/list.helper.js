import { Fragment } from "react";

export const renderList = (List, WrapperComponent) => (
    List?.map( item => {
        const id = item.id;
        return (
            // key to fragment
        <Fragment key={id}>
        <WrapperComponent List={item} key={id} id={id}/> 
        </Fragment>
        )
       })
    
)
