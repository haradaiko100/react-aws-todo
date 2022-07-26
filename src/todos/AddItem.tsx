import React, { useState } from "react";
import axios from "../setting";

type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

const AddItem = () => {
  const [text, setText] = useState<string>("");
  //const [done, setDone] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;

    const id: number = new Date().getTime();

    const post_data: Todo = {
      id: id,
      todo: text,
      done: false,
    };

    axios
      .put("/items", post_data)
      .then((res) => {
        //setTodo_List([res,...todo_list])
        console.log(res);
      })
      .catch((e) => {
        console.log("error:", e);
      });

    // setTodo_List([newTodo,...todo_list])
    //console.log(todos)
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className=" flex flex-col space-y-5 items-center">
      <h1 className=" font-bold text-4xl">Add Item</h1>
      <form
        className="flex flex-row space-x-10 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className=" shadow appearance-none border rounded pl-2 "
          type="text"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <input
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold
                     py-2 px-4 rounded-full"
          type="submit"
          value="追加"
        />
      </form>
    </div>
  );
};

export default AddItem;
