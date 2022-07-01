import React, { useEffect, useState } from "react";
import MyTodo from "./MyTodo";

const ToDo = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("https://stark-caverns-46049.herokuapp.com/todo")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://stark-caverns-46049.herokuapp.com/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = task.filter((t) => t._id !== id);
          setTask(remaining);
        }
      });
  };
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 mb-80">
      {task?.map((todo) => (
        <MyTodo key={todo._id} todo={todo} handleDelete={handleDelete}></MyTodo>
      ))}
    </div>
  );
};

export default ToDo;
