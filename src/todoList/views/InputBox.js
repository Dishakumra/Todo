
import React from 'react';
function InputBox(props) {

    return (<div className="inputContainer"><input placeholder={props.placeholder} value={props.inputvalue} onChange={(e) => props.setInputValue(e.target.value)} onKeyPress={(e)=>{
        if(e.key==='Enter')
        props.handleInputDone();
    }} type='text' /></div>);

}
export default InputBox;