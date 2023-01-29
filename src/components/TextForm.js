import React, { useState } from 'react'


export default function TextForm(props) {

    // Text= "to change the text in the given String" // wrong way to change the text
    // setText("To change the text") // right way to change the given text..

    const [Text, setText] = useState("")
    const HandleClearText= ()=>{
        setText("")
    }
    const HandleUpperCaseClick = () => {
        // console.log("Upper case executed")


        let newText = Text.toUpperCase()
        setText(newText)
    }

    const handleCopy= ()=>{
        let text= document.getElementById('mytextForm')
        text.select()
        console.log(text);
        navigator.clipboard.writeText(text.value)
    }
    const HandleLowerCaseClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("handle onchanged function exectued")
        setText(event.target.value) // we have to use this event.target.value to change the value in the given text Box feild etc.
    }
    const colorModeofText= {
        color:`${props.mode==='white'?'dark':'white'}`
    }
    return (
        <>
            <div className="container">

                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" value={Text} id="mytextForm" style={{backgroundColor:props.mode==='light'?'white':'#01203f', color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
                    </div>
                    <button type='button' className="btn btn-primary mt-2 me-3" onClick={HandleUpperCaseClick}>Convert to UpperCase</button>
                    <button type='button' className="btn btn-danger mt-2 me-3" onClick={HandleLowerCaseClick}>Convert to LowerCase</button>
                    <button type='button' className="btn btn-success me-3 mt-2" onClick={HandleClearText}>Clear Text</button>
                    <button type='button' className="btn btn-danger me-3 mt-2" onClick={handleCopy}>Copy Text To the clip Board</button>
                </form>
            </div>
            <div className="container my-5">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text Summary</h1>
                <p className={`wordCountClass text-${props.mode==='light'?'dark':'light'}`}>{Text.split(" ").indexOf("") === 0 ? 0 : Text.split(" ").length} Words and {Text.length} characters</p>
                <p className={`wordCountClass text-${props.mode==='light'?'dark':'light'}`}>{Text.split(" ").indexOf("") === 0 ? 0 : Text.split(" ").length / 125} Minutes to read</p>
                <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview of the Above text</h2>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{Text.length>0?Text:'Enter Something To Preview'}</p>
            </div>
        </>
    )
}
