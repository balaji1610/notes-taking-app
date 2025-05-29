"use client";
import { useApplicationContext } from "../context/applicationContext";
import { v4 as uuidv4 } from "uuid";
export default function AddTask() {
  const {
    task,
    setTask,
    currentUserId,
    setCredentials,
    credentials,
    taksList,
  } = useApplicationContext();

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnAddTask = () => {
    const updatedUsers = credentials.map((user) => {
      if (user.userId === currentUserId) {
        return {
          ...user,
          tasks: [{ ...task, taskId: uuidv4().slice(0, 4) }, ...user.tasks],
        };
      }
      return user;
    });
    setCredentials(updatedUsers);
    setTask(taksList);
  };
  return (
    <div className="add_task_container">
      <div className="add_task_grid">
        <div>
          <input
            type="text"
            name="title"
            value={task.title}
            className="task_input_title"
            placeholder="Title"
            onChange={(e) => handleOnchange(e)}
          />
        </div>
        <div>
          <textarea
            name="description"
            value={task.description}
            placeholder="Description"
            onChange={(e) => handleOnchange(e)}
          />
        </div>
        <div>
          <button onClick={() => handleOnAddTask()}>Add</button>
        </div>
      </div>
    </div>
  );
}
