import React from "react";

function DisplayTodo(props) {
  console.log(props, "props");
  // console.log(todos.todos, "this is todos in log");
  return (
    <div>
      <ul>
        {props.todos.map((item) => {
          return <li>{item.task}</li>;
        })}
      </ul>
    </div>
  );
}

export default DisplayTodo;
