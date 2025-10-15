import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("General");
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;

    const newTask = { task, priority, category };
    setTasksList([...tasksList, newTask]);
    setTask(""); // clear input
    setPriority("Low");
    setCategory("General");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Buddy</h1>

      <form onSubmit={handleSubmit}>
        {/* Task Input */}
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "5px", width: "250px" }}
        />

        {/* Priority Select */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Add Task
        </button>
      </form>

      {/* Tasks List */}
      <ul style={{ marginTop: "20px" }}>
        {tasksList.map((t, index) => (
          <li key={index}>
            <strong>{t.task}</strong> - {t.priority} - {t.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
