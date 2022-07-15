import React from 'react'

function DisplayTodo({todos}) {
  return (
    <div>
        <ul>{todos.map((item)=>{
        return <li>{item.task}</li>
        })}
        </ul>
    </div>
  )
}

export default DisplayTodo