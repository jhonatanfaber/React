import React from "react"
import './userInput.css';

const UserInput = (props) => {
    return (
        <div className="inputUsername">
            <input type="text" onChange={props.inputField} value={props.name} />
        </div>
    )
}

export default UserInput