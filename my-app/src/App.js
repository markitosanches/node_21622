import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
//Global

const [tasks, setTask] = useState ([
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

  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;


//https://codeshare.io/wnvlEK