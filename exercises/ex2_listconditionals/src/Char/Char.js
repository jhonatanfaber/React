import React from "react"
import "./Char.css"

const Char = (props) => {
    return (
        <div className="char-wrapper">
            <span onClick={props.delete}> {props.inputString} </span>
        </div>
    )
}

export default Char