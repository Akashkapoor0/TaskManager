import { useState } from "react"

function App(){
  const [addTask,setAddTask] = useState(false)
  const [task,setTask] = useState('')
  const [tasks,setTasks] = useState([])
  const [editIndex,setEditIndex] = useState(null);

  function AddTask(){
    if(task.trim() === ''){
      return
    }
    setTasks([...tasks,{title : task , completed : false}])
    setTask('')
    setAddTask(false)
  }
  function indexDlt(idx){
    const newTasks = tasks.filter((task,index) =>{
      return index !== idx;
    })
    setTasks(newTasks)
  }
  function editTask(idx){
    setEditIndex(idx)
    setTask(tasks[idx].title)
  }
  function editSubmit(){
    if(task.trim() === ''){
      return
    }
    const newTasks = [...tasks]
    newTasks[editIndex].title = task
    setTasks(newTasks)
    setTask('')
    setEditIndex(null)
  }
  function Completed(idx){
    if(tasks[idx].completed == true){
      return
    }
    const newTasks = [...tasks]
    newTasks[idx].completed = true;
    setTasks(newTasks)
  }

  return (
    <>
    <h1>Task Manager</h1>
    <button onClick={() => setAddTask(true)}>
      Add Task
    </button>
    {addTask && <div>
      <h2>Add New Task</h2>
      <input type="text"
      placeholder="Enter Task"
      value = {task}
      onChange={(event) => setTask(event.target.value)}
      />
      <p>Current Task: {task}</p>
      <button onClick={AddTask}>
      Submit
      </button>
    </div>}

    <h2>My Tasks</h2>
    <ul>
      {tasks.map((task,index) => (
        <li key={index}>
          {tasks[index].completed === true && (
            <p>[Done]</p>
          )}
          {task.title}
          <button onClick={()=> editTask(index)}>
            Edit
          </button>
          <button onClick={()=>indexDlt(index)}>
            Delete
          </button>
          <button onClick={() =>Completed(index)}>
            Done
          </button>
        </li>
      ))}
    </ul>
    {editIndex !==null && (
      <div>
        <h2>Edit Task</h2>
        <input type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={editSubmit}>
          Submit
        </button>
      </div>
    )}
    </>
    
  )
}
export default App