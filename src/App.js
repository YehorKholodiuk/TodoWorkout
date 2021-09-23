import logo from './logo.svg';
import './App.css';
import Tasks from "./Tasks";
import {useState} from 'react'
function App() {
  const [todolist,setTodoList] = useState([
    {id:1,name:'learn JS',description:'learn'},
    {id:2,name:'learn React',description:'learn'},
    {id:3,name:'learn Fetch',description:'learn'}
  ])

    const deleteTask =(id) => {
      const newList = todolist.filter(el => el.id !== id)
          setTodoList (newList)
    }


    const updateTask = (id,name) => {
      const newList = todolist.map(
     el =>{ if (el.id === id) return {...el,name};
     return el;
     }

      )
        setTodoList (newList)
    }





  return (
    <div>
      <h1>To Do list</h1>
      <Tasks deleteTask={deleteTask}
             updateTask={updateTask}
             tasks={todolist}/>

    </div>
  );
}

export default App;
