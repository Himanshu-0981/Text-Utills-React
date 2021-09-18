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

    const onChange = (event) =>{
        setText(event.target.value)
    }
    
    const [text , setText] = useState("Enter Text here");


    return (
        <div>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text}  onChange={onChange} id="myBox"rows="6"></textarea>
            </div>
            <div className="container d-flex justify-content-between">
            <button className="btn-primary" onClick={onClickUp} >Convert To UpperCase</button>
            <button className="btn-primary" onClick={clear} >Clear All</button>
            <button className="btn-primary" onClick={onClickLow} >Convert To LowerCase</button>
            </div>
        </div>
    );
}
