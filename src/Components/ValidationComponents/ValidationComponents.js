import React from 'react'

//First way to use tertary operation to validate
// const ValidationComponents = (props) => {
//     return (
//         <div>
//             {
//                 props.inputLength < 5 ?
//                     <p>Text too short</p> :
//                     <p>Text long enough</p>
//             }
//         </div>
//     )
// }

// Second way to use if statement
const ValidationComponents = (props) => {
    let validationMsg='Text long enough' 
    if (props.inputLength <=5 ){
        validationMsg ='Text too short'
    }
    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    )
}

export default ValidationComponents

