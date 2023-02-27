import { useState } from 'react'
import Header from './components/Header'
import ManyTasks from './components/ManyTasks'
import AddTask from './components/AddTask'


function App() {
//Global

const [tasks, setTasks] = useState ([
  {
      id:1,
      text: 'Doctos appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id:2,
      text: 'Meeting at scholl',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
  },
  {
      id:3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  }
])
//Delete
const deleteTask = (id) => {
  //console.log(id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//ToggleReminder
const toggleReminder = (id) => {
 // console.log(id)
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder} : task))
}

//Add
const addTask = (task) => {
  //console.log(task)
  const id = Math.floor(Math.random() * 1000)
  const newTask = {id, ...task}
  //console.log(newTask)
  setTasks([...tasks, newTask])
}

//toggle Form

const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
      { showAddTask && <AddTask onAdd={addTask}/> }
      {tasks.length > 0 ? (
        <ManyTasks tasks={tasks} onDeleteMany={deleteTask} onToggleMany={toggleReminder}/>
        ):(
          'No tasks'
        )}

    </div>
  );
}

export default App;


//https://codeshare.io/wnvlEK