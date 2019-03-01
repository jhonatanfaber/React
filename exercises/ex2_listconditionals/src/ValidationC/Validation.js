import React from "react"


const Validation = (props) => {
    return (
        <div className="validation-wrapper">
        <p> {props.inputString > 5 ? "Text too long" : "Text too short"}</p>
        </div>
    )
}

export default Validation