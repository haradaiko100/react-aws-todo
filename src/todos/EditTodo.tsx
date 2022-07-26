import axios from "../setting";
import { useState, ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

const EditTodo = () => {
  //const [todo_list, setTodo_List] = useState<Todo[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as Todo;

  const [text, setText] = useState<string>(state.todo);
  const [done, setDone] = useState<boolean>(state.done);
  const id: number = state.id;

  const changeDoneStatus = () => {
    setDone(!done);
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    //console.log(text)
  };

  const deleteItem = () => {
    //console.log(id)
    axios
      .delete(`/items/${state.id}`)
      .then(() => {
        //console.log("successfully deleted!!")
        navigate("/");
      })
      .catch((e) => {
        console.log("error :", e);
      });
  };

  const handleUpdate = () => {
    const new_post: Todo = {
      id: id,
      todo: text,
      done: done,
    };
    axios
      .put('/items', new_post)
      .then(() => {
        //console.log("successfully updated done status!!")
        navigate("/");
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  return (
    <div className="flex flex-col flex-wrap content-center py-60">
      <div className="flex flex-row items-center shadow appearance-none border w-2/3 text-xl">
        <p className="font-bold  text-slate-500 w-20 mx-1">{state.id}</p>
        <input
          className="shadow-lg appearance-none border rounded w-2/5"
          type="text"
          defaultValue={state.todo}
          onChange={(e) => handleChangeText(e)}
        />
        <button
          className=" shadow-lg font-bold
                py-2 px-4 rounded-3xl bg-green-50 hover:bg-green-100 mx-5"
          onClick={changeDoneStatus}
        >
          {done ? "完" : "未"}
        </button>
        <button
          className="shadow-lg font-bold
                py-2 px-4 rounded-3xl bg-orange-50 hover:bg-orange-100 mx-5"
          onClick={handleUpdate}
        >
          update
        </button>
        <button
          className="shadow-lg font-bold
                py-2 px-4 rounded-3xl bg-blue-50 hover:bg-blue-100 mx-5"
          onClick={deleteItem}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
