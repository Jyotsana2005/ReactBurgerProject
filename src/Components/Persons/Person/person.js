
import React from 'react'

 const person = (props) => {
    return (
        <div>
           <p> My name is {props.name} i am learning {props.course}</p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
export default person;

