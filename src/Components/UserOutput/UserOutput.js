import React from 'react'
import './UserOutput.css'

export const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> Hello UserOutput. My name is {props.name}</p>
            <p className="p"> I am learning React</p>
        </div>
    )
}
export default UserOutput 
