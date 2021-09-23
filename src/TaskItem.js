import React from 'react'
import Controller from "./TaskController";

export default function TaskItem(props){
const {task} = props;
console.log('TaskItem',props)
    return(
        <div>
            {task.name}
            <Controller taskId={task.id}
                        task={task.name}
                        deleteTask={props.deleteTask}
                        updateTask={props.updateTask}
            />
        </div>
    )
}