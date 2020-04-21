import React from 'react'

export const UserInput = (props) => {
    //inline style
    const style={
        border:' 2 px',
        backgroundColor:'pink'
    }
    return (
        <div>
            <input style={style} type="text" onChange={props.changed} value={props.currentName} />
        </div>
    )
}
export default UserInput;
