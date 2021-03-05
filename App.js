import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const url = 'https://jsonplaceholder.typicode.com/albums'
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
          Albuns
      <ul>
      { !todos ? 'carregando...' : 
      todos.map( (todo,index)=>{
        return <li key={index}>{todo.userId} {todo.id} {todo.title} </li>
      })
      }
      
      </ul>
    </div>
  );
}

export default App