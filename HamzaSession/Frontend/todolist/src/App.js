import "./App.css";
import InputTodo from "./components/InputTodo/InputTodo";
import DisplayTodo from "./components/DisplayTodo/DisplayTodo";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    async function getTodos() {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      // console.log(data.payload, "from fetch");
      // console.log(data, "data from fetch");
      setTodos(data.payload);
      // return data.payload;
    }
    getTodos();
  }, []);
  console.log(todos, "this is in main app");
  return (
    <div className="App">
      <h1>List of todos</h1>
      <InputTodo />
      <DisplayTodo todos={todos} />
    </div>
  );
}

export default App;
