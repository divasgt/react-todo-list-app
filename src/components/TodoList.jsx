import React from "react"
import { nanoid } from "nanoid"

export default function TodoList({theme}) {
  // using controlled component for add todo input box.
  const [todoArray, setTodoArray] = React.useState([])
  const [todoInput, setTodoInput] = React.useState("")

  function addTodo() {
    if (todoInput === "" || todoArray.includes(todoInput)) {
      return
    }

    setTodoArray(prev => (
      [todoInput, ...prev]
    ))

    setTodoInput("")
  }

  function deleteTodo(index) {
    setTodoArray(prev => prev.filter((todo, i) => {
      return i !== index
    }))
  }

  const todoElements = todoArray.map((todo, index) => (
    <div className={`todo ${theme}`} key={nanoid()}>
      {todo}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  ))

  return (
    <main className={theme}>
      <h1>Todo List</h1>

      <div className={`add-todo-div ${theme}`}>
        <input
          type="text"
          placeholder="Type your Todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          onKeyDown={(e) => (e.key==="Enter" && addTodo())}        
        />
        <button type="submit" onClick={addTodo} >
          Add
        </button>
      </div>

      <div className="todos">
        {todoElements}
      </div>
    </main>
  )
}