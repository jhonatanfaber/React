import React from "react"
import './person.css';

const person = (props) => {
    return (
        <div className="person">
            <p> Im {props.name} and Im {props.age} old </p>
            <p> {props.children ? props.children: "No additional info"}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person