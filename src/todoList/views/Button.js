import React from 'react';
function Button(props){
    return(<button onClick={props.addTodo}  type='submit'>ADD</button>);

}
export default Button;