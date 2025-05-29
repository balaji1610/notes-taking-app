import AddTask from "./addTask";
import Header from "./header";
import TaskList from "./taskList";
export default function NoteApp() {
  return (
    <div>
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}
