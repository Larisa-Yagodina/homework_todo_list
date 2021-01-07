import React, {useState} from 'react';

export default function CreatTask(props) {

    const [newTask, setNewTask] = useState('')

    const addNewTodo = () => {
        props.addNewTodo(newTask)
        setNewTask('')
    }

    const inputEnterHandler = (event) => {
        if (event.key === 'Enter') {
            props.addNewTodo(newTask)
            setNewTask('')
        }
    }


    return (
        <div>
            <input
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={inputEnterHandler}
                value={newTask}
                placeholder='input new task'/>
            <button onClick={addNewTodo} disabled={!newTask}> Add</button>
        </div>
    );
}


