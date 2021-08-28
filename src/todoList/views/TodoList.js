import React from 'react';
import Todo from './Todo';
export default function TodoList(props){
  return (
      <ul>
          {props.todos.map((todo,index)=>{
              return <li key={index}><Todo todoText={todo} index={index} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo} /></li>
          })}
          
     </ul>
  )
}
