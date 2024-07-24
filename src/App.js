import './App.css';
import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");
  const [completedTodos,setCompletedTodos] = useState([]);


  const handleAssTodo = ()=>{
    if (!newTitle.trim()) {
      alert("Title can not be empty.");
      return;
    }
    let newTodoItem = {
      title:newTitle,
      description:newDescription,
    };
    let updateToDoArr=[...allTodos];
    updateToDoArr.push(newTodoItem);
    setTodos (updateToDoArr);
    localStorage.setItem('todolist',JSON.stringify(updateToDoArr));
    // Clear the text areas by resetting the state
    setNewTitle('');
    setNewDescription('');
  };

  const handleDeleteTodo =(index) =>
  {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);


    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  };
   
  const handleComplete = (index) =>
  {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth()+1;
    let yyyy=now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s =now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy +'-' + ' at ' + h +':' +m +':' +s;

    let filteredItem = 
    {
      ...allTodos[index],
      completedOn : completedOn
    }

    let updateCompletedArr = [...completedTodos];
    updateCompletedArr.push(filteredItem);
    setCompletedTodos(updateCompletedArr);
    handleDeleteTodo(index,1);
    localStorage.setItem('completedTodos',JSON.stringify(updateCompletedArr));
  
  };

  const handleDeleteCompletedTodo = index =>
  {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index,1);


    localStorage.setItem('completedTodos',JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo)
  }
  useEffect(()=>
  {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo)
    {
      setTodos(savedTodo);

    }
    if (savedCompletedTodo)
    {
      setCompletedTodos(savedCompletedTodo);
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
          {isCompleteScreen===false && allTodos.map((item,index)=>{
            return(
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <MdDelete  className='icon' onClick={()=> handleDeleteTodo(index)} title='Delete?'/>
                <BsCheckLg className='check-icon' onClick={()=>handleComplete(index)} title='Complete?'/>
              </div>
            </div>
            );
          })}

          {isCompleteScreen===true && completedTodos.map((item,index)=>{
            return(
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><small>completed on :{item.completedOn}</small></p>
              </div>
              <div>
                <MdDelete  className='icon' onClick={()=> handleDeleteCompletedTodo(index)} title='Delete?'/>
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
