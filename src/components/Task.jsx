import React from "react";

function Task({ tasks }) {
  return (
    <>
      {tasks.map((t, index) => {
        if (t) {
          return (
            <div className="taskWrapper" key={index}>
              <div className="front">
                <h1>Title: {t.title}</h1>
              </div>
              <div className="back">
                <h2>Due Date: {t.dueDate}</h2>
                <h2>Priority: {t.priority}</h2>
                <h2>Status: {t.status}</h2>
                <h2>Description: {t.description}</h2>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default Task;
