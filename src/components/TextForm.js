import React, { useEffect, useState } from 'react'


export default function TextForm(props) {

    // Text= "to change the text in the given String" // wrong way to change the text
    // setText("To change the text") // right way to change the given text..

    const [Text, setText] = useState("Enter the text here")
    const HandleUpperCaseClick = () => {
        // console.log("Upper case executed")


        let newText = Text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("handle onchanged function exectued")
        setText(event.target.value) // we have to use this event.target.value to change the value in the given text Box feild etc.
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <form>
                <div className="form-group">
                    <textarea className="form-control" value={Text} id="mytextForm" onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button type='button' className="btn btn-primary" onClick={HandleUpperCaseClick}>Convert to UpperCase</button>
            </form>
        </>
    )
}
