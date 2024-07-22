import './App.css';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");


  const handleAssTodo = ()=>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription,
    };
    let updateToDoArr=[...allTodos];
    updateToDoArr.push(newTodoItem);
    setTodos (updateToDoArr);
    localStorage.setItem('todolist',JSON.stringify(updateToDoArr))
  };
   

  useEffect(()=>
  {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo)
    {
      setTodos(savedTodo);

    }
  },[])
  return (
    
    <div className="App">
      <h1>My to do </h1>
      <div className='todo-wrapper'>

        <div className='todo-input'>
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's your task title ?"></input>
          </div>


          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="your task detail"></input>
          </div>


          <div className="todo-input-item">
            <button type="button" onClick={handleAssTodo} className="primaryBtn">Add</button>
          </div>
          </div>


        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>
            To Do
          </button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)} >
            Completed
          </button>
        </div>


        <div className="todo-list">
          {allTodos.map((item,index)=>{
            return(
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <MdDelete  className='icon' title='Delete?'/>
                <BsCheckLg className='check-icon' title='Complete?'/>
              </div>
            </div>
            )
          })}
          
        </div>


      </div>
    </div>
  );
}

export default App;
