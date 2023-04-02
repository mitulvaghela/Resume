// import { COUNTER_ } from "./countersTypes"
import { SECTION_TYPES } from "./datamodelTypes"
// export function COUNTER() {
//     return {
//         type:COUNTER_,
//     }
// }


export function datamodelAction(props,type) {
    return {

        type:type,
        payload:props,
    }
}

