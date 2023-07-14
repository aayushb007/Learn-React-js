import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
    //  console.log("on Change Clicked");
     setText(event.target.value)

    }
    const handleUpClick =() =>{
    //  console.log("on Handle Clicked");
     let newText = text.toUpperCase();
     setText(newText);
     
    }
    const [ text,setText] = useState("Enter Text here")

    return (
        <div className='container my-3 '>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text
                } onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
             <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
