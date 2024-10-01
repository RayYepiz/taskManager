import { react, useState, useRef } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    priority: "",
    status: "",
    description: "",
  });

  let handleChange = (key, value) => {
    setFormData((preFormData)=>({
        ...preFormData,
        [key]: value,
      })
      
    );
  };

  function submitTask() {
    console.log("form submitted");
  }

  const clearForm = (e) => {
    console.log("cleared");
  };

  return (
    <div>
      <form>
        <label htmlFor="taskTitle"> Title </label>
        <input
          type="text"
          id="taskTitle"
          onChange={handleChange}
          placeholder="Title of your Task"
        />

        <label htmlFor="taskDueDate"> Due Date </label>
        <input type="date" id="taskDueDate" />

        <label htmlFor="taskPriority"> Priority </label>
        <select id="taskPriority" name="taskPriority">
          <option value="">Select a Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <label htmlFor="taskStatus"> Status </label>
        <select id="taskStatus" name="taskStatus">
          <option value="">Select a Status</option>
          <option value="High">Completed</option>
          <option value="Medium">Working</option>
          <option value="Low">Not Started</option>
        </select>

        <label htmlFor="taskDescription"> Description </label>
        <textarea name="taskDescription" id="taskDescription"></textarea>

        <button type="submit" id="formSubmitBtn" onClick={submitTask}>
          Submit
        </button>
        <button className="formClearBtn" onClick={clearForm}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default MyForm;
