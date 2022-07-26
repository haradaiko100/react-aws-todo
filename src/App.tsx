import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//import './input.css';
import EditTodo from './todos/EditTodo'
import Todolist from './todos/Todolist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todolist />} />
        <Route path="/:id" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
