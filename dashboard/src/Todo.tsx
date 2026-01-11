import { useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }

      setTodos([...todos, newTodo])
      setInput("")
    }
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed } : todo)
    )
  }

  return (
    <div data-testid="todo-list-container">
      <h2 data-testid="todo-list-heading">Todo List</h2>
      <div data-testid="todo-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
          data-testid="todo-input"
        />
        <button onClick={addTodo} data-testid="add-todo-button">
          Add Todo
        </button>
      </div>
      <ul data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            data-testid={`todo-item-${todo.id}`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}