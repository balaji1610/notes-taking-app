"use client";
import { useApplicationContext } from "../context/applicationContext";
import { Itasks } from "@/app/interface/interface";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            height: "100vh",
            overflowY: "scroll",
            cursor: "pointer",
          }}
        >
          {CurrentUserNotes?.tasks.map((el, index) => {
            const { title, description, taskId } = el;
            return (
              <div key={index}>
                <div className="task_list_grid">
                  <div className="task_list_title">
                    <b>{title}</b>
                  </div>
                  <div
                    style={{
                      overflowY: "scroll",
                      height: "auto",
                      fontSize: "20px",
                      textIndent: " 25px",
                    }}
                  >
                    <div>{description}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div onClick={() => handleOnEdit(taskId, el)}>
                      <FaEdit style={{ fontSize: "30px", color: "#000000" }} />
                    </div>
                    <div onClick={() => handleOnDelete(taskId)}>
                      {" "}
                      <MdDelete style={{ fontSize: "30px", color: "red" }} />
                    </div>
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
