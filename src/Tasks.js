import React from 'react';
import TaskItem from "./TaskItem";
export default function Tasks(props){
const tasks = props.tasks;
    return ( <div>
            {tasks.map(el =>  <TaskItem deleteTask={props.deleteTask}
                                        updateTask={props.updateTask}
                                        key={el.id}
                                        task={el}/> )}

        </div>
    )
}

