export default function TaskList({tasks , updateTask, deleteTask}) {
  const toggleCompletion = (index) => {
    const updatedTasks = {...tasks[index], completed: !tasks[index].completed};
    updateTask(updatedTasks,index);
  }
  return (
    <ul>
      {tasks.map((task, index)=> (
        <li key={index}>
          <div>
            <span>{task.text}
              <small>({task.priority} , {task.category})</small>
            </span>
          </div>

          <div>
            <button onClick={() => toggleCompletion(index)}>
            {task.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>

        </li>
      ))}
    </ul>
  )
}
