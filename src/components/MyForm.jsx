import { react, useState } from "react";
import Task from "./task";

function MyForm() {
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    priority: "",
    status: "",
    description: "",
  });

  const [tasks, setTasks] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const clear = () => {
    setFormData({
      title: "",
      dueDate: "",
      priority: "",
      status: "",
      description: "",
    });
  };

  let handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((preFormData) => ({
      ...preFormData,
      [id]: value,
    }));
  };

  function submitTask(e) {
    e.preventDefault();
    setIsSubmitted(true);

    if (formData) {
      const newTask = {
        title: formData.title,
        dueDate: formData.dueDate,
        priority: formData.priority,
        status: formData.status,
        description: formData.description,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      clear();
    } else {
      console.error("Form data is undefined");
    }
  }

  const clearForm = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    clear();
  };

  return (
    <div>
      <form onSubmit={submitTask}>
        <label htmlFor="taskTitle"> Title </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title of your Task"
        />

        <label htmlFor="taskDueDate"> Due Date </label>
        <input
          type="date"
          id="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <label htmlFor="priority"> Priority </label>
        <select id="priority" value={formData.priority} onChange={handleChange}>
          <option value="">Select a Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label htmlFor="status"> Status </label>
        <select id="status" value={formData.status} onChange={handleChange}>
          <option value="">Select a Status</option>
          <option value="completed">Completed</option>
          <option value="working">Working</option>
          <option value="notStarted">Not Started</option>
        </select>

        <label htmlFor="description"> Description </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit" id="formSubmitBtn">
          Submit
        </button>
        <button id="formClearBtn" onClick={clearForm}>
          Clear
        </button>
      </form>
      <Task tasks={tasks} />
      <h1>{JSON.stringify(tasks)}</h1>
    </div>
  );
}

export default MyForm;
