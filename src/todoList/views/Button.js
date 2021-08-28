import React from 'react';
function Button(props){
    return(<button className="saveButton" onClick={props.addTodo}  type='submit'>ADD</button>);

}
export default Button;