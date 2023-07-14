import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        //  console.log("on Change Clicked");
        setText(event.target.value)

    }
    const handleUpClick = () => {
        //  console.log("on Handle Clicked");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLoClick = () => {
        //  console.log("on Handle Clicked");
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleCpClick = () => {

        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }

    const handleClearClick = () => {
        //  console.log("on Handle Clicked");

        setText(" ");

    }
    const [text, setText] = useState("Enter Text here")

    return (
        <>
            <div className='container my-3 ' style ={{ color : props.mode==='dark'?'white':'black'  }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style ={{ backgroundColor : props.mode==='dark'?'#0C4160':"white" ,  color : props.mode==='dark'?'white':'black'    }}value={text
                    } onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-success mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-warning mx-1' onClick={handleCpClick}>Convert to Capitalize</button>

                <button className='btn btn-secondary mx-1' onClick={handleClearClick}>Clear Text</button>


            </div>
            <div className='container my-5' style ={{ color : props.mode==='dark'?'white':'black'  }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} time to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
