import './App.css';
import React, { useState } from 'react';
function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  return (
    
    <div className="App">
      <h1>My to do </h1>
      <div className='todo-wrapper'>

        <div className='todo-input'>
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder="What's your task title ?"></input>
          </div>


          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="your task detail"></input>
          </div>


          <div className="todo-input-item">
            <button type="button" className="primaryBtn">Add</button>
          </div>
          </div>


        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>to Do</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)} >Completed</button>
        </div>


        <div className="todo-list">
          <div className="todo-list-item">
          <h3>task1</h3>
          <p>Description</p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
