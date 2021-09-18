import React, { useState } from 'react'
// import PropTypes from 'prop-types'




export default function TextForm(props) {

    const handleUpClick = () => {

        console.log("Uppercase was click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleUpClick1 = () => {

        console.log("Uppercase was click");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("click");
        setText(event.target.value);
    }

    const handleClearText = () => {
        console.log("clear");
        setText(" ");
    }

    const [text, setText] = useState("Enter the text");

    return (
        <>
            <h1 className="textType" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
            <div className="mb-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label forName="exampleFormControlTextarea1" className="form-label textType"><h3> <center>   Example textarea </center>  </h3></label>
                <textarea className="form-control create " value={text} style={{ backgroundColor: props.mode === 'dark' ? '#574ba2' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div>
                <button disabled={text.length === 0} className="btn btn-primary textform" onClick={handleUpClick}>ConvertUppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick1}>ConvertLowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleClearText}>ClearText</button>
            </div>

            <div className="container my-2 textType" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => {
                    return element.length !== 0
                }).length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").length)}Minutes Read</p>
                <h2>Preview</h2>
                <div className="imp">
                    {text.length > 0 ? text : "Nothing to preview!"}
                </div>

            </div>
        </>
    );

}