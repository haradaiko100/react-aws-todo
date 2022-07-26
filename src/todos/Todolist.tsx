import axios from '../setting'
import { useState, useEffect } from 'react'
import AddItem from './AddItem'
import { useNavigate } from 'react-router-dom'

type Todo = {
  id: number
  todo: string
  done: boolean
}

type Todo_Items = {
    Items:Todo[]
    Count:number
    ScannedCount:number
}


const Todolist = () => {
  const [todo_list, setTodo_List] = useState<Todo_Items>()

  useEffect(() => {
    axios
      .get('/items')
      .then((res) => {
        setTodo_List(res.data)
        //console.log(res)
      })
      .catch((e) => {
        console.log('error:', e)
      })
  }, [todo_list])

  const navigate = useNavigate()

  return (
    <div className="flex flex-col flex-wrap space-y-5  content-center">
      <AddItem />
      <div className=" flex flex-col w-3/5 py-2 -mb-4 ">
        {todo_list?.Items.map((each_todo) => (
          <div
            className="flex flex-row items-center  shadow appearance-none border py-2
             text-xl"
            key={each_todo.id}
            onClick={() => navigate(`/${each_todo.id}`, { state: each_todo })}
          >
            <p className="font-bold px-2 text-slate-500 w-20">{each_todo.id}</p>
            <p className="w-80">{each_todo.todo}</p>
            <button
              className="shadow bg-green-50 font-bold
            py-2 px-4 rounded-3xl"
            >
              {each_todo.done ? '完' : '未'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todolist
