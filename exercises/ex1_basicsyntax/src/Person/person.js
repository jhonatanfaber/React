import React from "react"
import './person.css';

const person = (props) => {
    return (
        <div className="person" >
            <p onClick={props.delete}> Im {props.name} and Im {props.age} old </p>
            <p> {props.children ? props.children: "No additional info"}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person