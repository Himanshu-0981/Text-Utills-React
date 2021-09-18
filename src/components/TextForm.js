import React , {useState} from "react";

export default function TextForm(props) {

    const onClickUp = () => {
        let upCase = text.toUpperCase();
        setText(upCase);
    }

    const onClickLow = () => {
        let lowCase = text.toLowerCase();
        setText(lowCase)
    }

    const clear = () => {
        let clear = "";
        setText (clear);
    }

    const onChange = (event) => {
        setText (event.target.value)
    }

    const alertFun = () =>{
        alert("Hello there")
    }

    const [text , setText] = useState("");
    
    return (
        <>
        <div className="container">
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text}  onChange={onChange} id="myBox"rows="6"></textarea>
            </div>
            <div className="container d-flex justify-content-between">
            <button className="btn-primary" onClick={onClickUp} >Convert To UpperCase</button>
            <button className="btn-primary" onClick={clear} >Clear All</button>
            <button className="btn-primary" onClick={onClickLow} >Convert To LowerCase</button>
            <button className="btn-primary" onClick={alertFun} >Click here to get a notification</button>
            </div>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
