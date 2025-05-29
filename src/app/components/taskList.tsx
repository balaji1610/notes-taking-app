"use client";
import { useApplicationContext } from "../context/applicationContext";
import { Itasks } from "@/app/interface/interface";
export default function TaskList() {
  const {
    credentials,
    setCredentials,
    currentUserId,
    setIsEdit,
    setEditId,
    setTask,
  } = useApplicationContext();

  const CurrentUserNotes = credentials.find((el) => {
    return el.userId === currentUserId;
  });
  const handleOnEdit = (Id: string, el: Itasks) => {
    setEditId(Id);
    setIsEdit(true);
    setTask(el);
  };
  const handleOnDelete = (deleteId: string) => {
    const deleteNote = credentials.map((user) => {
      if (user.userId === currentUserId) {
        return {
          ...user,
          tasks: user.tasks.filter((el) => {
            return el.taskId != deleteId;
          }),
        };
      }
      return user;
    });
    setCredentials(deleteNote);
  };
  return (
    <div>
      {CurrentUserNotes?.tasks.length ? (
        <div
          className="scroll-container"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          {CurrentUserNotes?.tasks.map((el, index) => {
            const { title, description, taskId } = el;
            return (
              <div key={index}>
                <div className="task_list_grid">
                  <div>
                    <b>{title}</b>
                  </div>
                  <div
                    style={{
                      overflowY: description.length > 200 ? "scroll" : "hidden",
                      height: "auto",
                      fontSize: "20px",
                    }}
                  >
                    <div>{description}</div>
                  </div>
                  <div>
                    <button onClick={() => handleOnEdit(taskId, el)}>
                      Edit
                    </button>
                    <button onClick={() => handleOnDelete(taskId)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>No Added Notes</h1>
        </div>
      )}
    </div>
  );
}
