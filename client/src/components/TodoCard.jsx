import axios from "axios";
import { useState } from "react";

const API_BASE = "http://localhost:3001";

export default function TodoCard({
  id,
  isCompleted,
  content,
  completeTodo,
  deleteTodo,
}) {
  const [taskName, setTaskName] = useState(content);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = async (id, newContent) => {
    console.log("Handle editing clicked");
    try {
      await axios.put(API_BASE + "/todos/" + id, { content: newContent });
    } catch (error) {
      console.log("Error: " + error);
    }
    setIsEditing(false);
  };
  const handleNameChange = (event) => {
    setTaskName(event.target.value);
    console.log(taskName);
  };
  return (
    <div className="w-full h-fit mb-3 flex items-center bg-blue-950 py-3 px-6 rounded-xl border-2">
      <div
        className="w-5 h-5 p-[1.5px] bg-slate-600 mr-3 rounded-sm cursor-pointer"
        onClick={() => {
          completeTodo(id);
          setIsChecked((prev) => !prev);
        }}
      >
        {isChecked ? (
          <div className="w-full h-full flex items-center justify-center bg-green-400 rounded-sm text-sm text-white">
            <ion-icon name="checkmark-outline"></ion-icon>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="min-w-0 w-full" onClick={() => setIsEditing(true)}>
        {isEditing ? (
          <input
            className="w-5/6 bg-transparent text-white"
            required
            value={taskName}
            onChange={handleNameChange}
          ></input>
        ) : (
          <p
            className={`text-white overflow-hidden whitespace-nowrap text-ellipsis ${
              isChecked ? "line-through" : ""
            }`}
          >
            {taskName}
          </p>
        )}
      </div>
      <div className="absolute right-16 md:right-44 flex items-center">
        <div className="flex text-neutral-200 hover:text-white text-2xl">
          {isEditing ? (
            <div onClick={() => handleEditing(id, taskName)}>
              <ion-icon name="save-outline"></ion-icon>
            </div>
          ) : (
            <div onClick={() => setIsEditing(true)}>
              <ion-icon name="create-outline"></ion-icon>
            </div>
          )}
        </div>
        <div
          className="flex items-center justify-center ml-3 text-white text-2xl border-2 border-red-400 rounded-full opacity-80 hover:opacity-100"
          onClick={() => deleteTodo(id)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
