"use client";

import { useApplicationContext } from "../context/applicationContext";

export default function TaskList() {
  const { credentials, currentUserId } = useApplicationContext();

  const CurrentUserNotes = credentials.find((el) => {
    return el.userId === currentUserId;
  });

  return (
    <div>
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
          const { title, description } = el;
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
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
