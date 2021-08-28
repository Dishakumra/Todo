import React, { useState } from 'react';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Input from './InputBox';
export default
    function Todo(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTodoValue,setUpdatedTodoValue]=useState(props.todoText);

    return (
        <div className="todoItem">
            {isEditing ?
                <div>
                    <Input placeholder='update todo' inputvalue={updatedTodoValue} handleInputDone={()=>{props.updateTodo(props.index,updatedTodoValue);setIsEditing(false)}} setInputValue={setUpdatedTodoValue} />
                </div>
                :
                <div className="todoTextContainer">
                    <div>{props.todoText}</div>
					<div className="iconContainer">
                    <EditFilled onClick={()=>{setIsEditing(true);
                    setUpdatedTodoValue(props.todoText)}}/>
                    <DeleteFilled onClick={() => props.deleteTodo(props.index)} />
					</div>
                </div>
            }
        </div>

    )
}