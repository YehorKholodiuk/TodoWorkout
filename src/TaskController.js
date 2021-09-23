import React from 'react';
import {useState} from 'react'
export default function Controller(props){

const [newTask,setNewTask] = useState(props.task)

    return(

        <>
            <input value={newTask}
                   type ="text"
                   onChange={(e)=> setNewTask(e.target.value) }

            />
            <button onClick={() => props.updateTask(props.taskId, newTask)}>Update</button>
       <button onClick={() => props.deleteTask(props.taskId)}>Delete</button>
        </>
    )
}




