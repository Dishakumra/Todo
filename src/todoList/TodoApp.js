import React,{useState,useEffect} from 'react';
import Input from './views/InputBox';
import Button from './views/Button';
import TodoList from './views/TodoList';
import {saveToLocalStorage,getFromLocalStorage} from '../utils';



function TodoApp(){
    const [todos,setTodos]=useState([]);
    const [inputvalue,setInput]=useState('');
    const setInputValue=(value)=>{
        setInput(value);
        
    }
    const addTodo=()=>{
        if(inputvalue==='')
        {
            return;
        }
        const updatedTodo=[inputvalue,...todos];
        setTodos(updatedTodo);
        setInput('');
        saveToLocalStorage('todos',updatedTodo);
        

    }
    const deleteTodo=(todoIndex)=>{
        const updatedTodo=todos.filter((todo,index)=>{
            return index!==todoIndex;
        })
        setTodos(updatedTodo);
        saveToLocalStorage('todos',updatedTodo);
    }
    const updateTodo=(index,updatedValue)=>{
        const updatedTodo=[...todos];
        updatedTodo[index]=updatedValue;
        setTodos(updatedTodo);
        saveToLocalStorage('todos',updatedTodo);
    }
    // useEffect(()=>{
    //     saveToLocalStorage('todos',todos);
    // },[todos])
    useEffect(()=>{
        const todo=getFromLocalStorage('todos');
        if(!(todo===null|| todo===undefined || todo===""))
         setTodos(todo.split(','));
    },[])
    return(
        
        <div >
           <h1> React TODO APP</h1>
           <div>
                <Input setInputValue={setInputValue} handleInputDone={addTodo} inputvalue={inputvalue}/>
                <Button addTodo={addTodo}/>
              
            </div>
            <div>
                <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
           </div>
        </div>
    )
}
export default TodoApp;