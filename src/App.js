import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My to do </h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div>
            <label>Title</label>
            <input type="text" placeholder="What's your task title ?"></input>
          </div>
        </div>
        <div className='todo-input'>
          <div>
            <label>Description</label>
            <input type="text" placeholder="your task detail"></input>
          </div>
        </div>
        <div className='todo-input'>
          <div>
            <button type="button" className="primaryBtn">Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button>to Do</button>
          <button>Completed</button>
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
