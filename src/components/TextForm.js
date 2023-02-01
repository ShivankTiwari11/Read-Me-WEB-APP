import React, { useState } from 'react'


export default function TextForm(props) {

    // Text= "to change the text in the given String" // wrong way to change the text
    // setText("To change the text") // right way to change the given text..

    const [Text, setText] = useState("")
    const HandleClearText = () => {
        setText("")
        props.showalert("Cleared Text !!", "success")
    }
    const HandleUpperCaseClick = () => {
        // console.log("Upper case executed")


        let newText = Text.toUpperCase()
        setText(newText)
        props.showalert("Text Converted to the UpperCase Successfully", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(Text)
        document.getSelection().removeAllRanges()
        props.showalert("Copied to Clipboard Successfully!!", "success")
    }
    const HandleLowerCaseClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showalert("Text Converted to Lower Case Successfully", "success")
    }
    const handleOnChange = (event) => {
        // console.log("handle onchanged function exectued")
        setText(event.target.value) // we have to use this event.target.value to change the value in the given text Box feild etc.
    }
    return (
        <>
            <div className="container">

                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'} mb-4 mt-2 textHeadingClass`}>{props.heading}</h1>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" value={Text} id="mytextForm" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e4f71', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} rows="8"></textarea>
                    </div>
                    <button disabled={Text.split(" ").filter((element)=>{
                        return element.length!==0;
                    }).length===0} type='button' className="btn btn-primary mt-3 me-3" onClick={HandleUpperCaseClick}><strong>Convert to UpperCase</strong></button>
                    <button disabled={Text.split(" ").filter((element)=>{
                        return element.length!==0;
                    }).length===0} type='button' className="btn btn-danger mt-3 me-3" onClick={HandleLowerCaseClick}><strong>Convert to LowerCase</strong></button>
                    <button disabled={Text.split(" ").filter((element)=>{
                        return element.length!==0;
                    }).length===0} type='button' className="btn btn-success me-3 mt-3" onClick={HandleClearText}><strong>Clear Text</strong></button>
                    <button disabled={Text.split(" ").filter((element)=>{
                        return element.length!==0;
                    }).length===0} type='button' className="btn btn-danger me-3 mt-3" onClick={handleCopy}><strong>Copy Text to the ClipBoard</strong></button>
                </form>
            </div>
            <div className="container my-5">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text Summary</h1>
                <p className={`wordCountClass text-${props.mode === 'light' ? 'dark' : 'light'}`}>{Text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                }).length} Words and {Text.length} characters</p>
                <p className={`wordCountClass text-${props.mode === 'light' ? 'dark' : 'light'}`}>{Text.split(" ").filter((element) => {
                    return element.length !== 0;
                }).length / 125} Minutes to read</p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview of the Above text</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{Text.length > 0 ? Text : 'Nothing To Preview'}</p>
            </div>
        </>
    )
}
