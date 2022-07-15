
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import DisplayTodo from './components/DisplayTodo/DisplayTodo';
import { useEffect,useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    async function getTodos() {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json()
    setTodos(data.payload)  
  }
    getTodos()
  }, []
    
    
    )
  

  
  
  return (
    <div className="App">
      <h1>List of todos</h1>
      <InputTodo/>
      <DisplayTodo todos={todos}/>
    </div>
  );
}

export default App;
