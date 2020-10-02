import React, {useState} from 'react';

export default function Controller (props) {

    const [newTitle, setNewTitle] = useState('')
    const [newTask, setNewTask] = useState('')

    const addNewTask = () => {
        props.addNewTask(newTitle, newTask)
        setNewTitle('')
        setNewTask('')
    }

    return (
        <div>
           <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder='new Title'/>
           <input onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder='new Task'/>
           <button onClick={addNewTask} disabled={ !newTitle || !newTask}> Add New Task </button>

        </div>
    );
}


