import React,{useState} from 'react'


let TextUtills = () => {
    const [text,setText] = useState("")
    const [print,setPrint] = useState(false);

    
    function getData(event){
       setText(event.target.value)
       console.log(event.target.value);
    }

    function printText (){
        setPrint(true)
    }

    function upperCase(){
        setText(text.toUpperCase())
    }

    function lowerCase(){
        setText(text.toLowerCase())
    }

    

    return(
        <div>
            <p>TextUtills</p>
            <textarea cols="60" rows="10" onChange={getData}></textarea> <br />
            {
                print?<p>{text}</p>:null
            }

                <p>{text.split(' ').length}char {text.length}char</p>
            
            


            <button onClick={printText}>Print Text</button>
            <button onClick={upperCase}>UpperCase</button>
            <button onClick={lowerCase}>LowerCase</button>

        </div>
    )
}

export default TextUtills