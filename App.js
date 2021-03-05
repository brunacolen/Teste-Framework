import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response =  await fetch(url)
    const responseJSON =  await response.json()
    setTodos (responseJSON)
  }
  useEffect ( () => {
    fetchApi()
  }, [])
  return (
    <div className="App">
          Todos
      <ul>
      { !todos ? 'carregando...' : 
      todos.map( (todo,index)=>{
        return <li key={index}>{todo.userId} {todo.id} {todo.title}{todo.completed ?'✔️':'❌'} </li>
      })
      }
      </ul>
    </div>
  );
}

export default App;
