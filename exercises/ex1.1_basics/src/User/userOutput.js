import React from "react"
import './userOutput.css';

const UserOutput = (props) => {
    return (
        <div className="outputUsername">
            <p> {props.name} </p>
        </div>

    )
}

export default UserOutput