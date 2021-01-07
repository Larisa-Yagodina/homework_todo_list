import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import CreatTask from "./CreatTask";
import {v4 as uuidv4} from 'uuid'


function App() {

    const [todoList, setTodoList] = useState([
        {id: 1, task: 'Finish JSP', done: false},
        {id: 2, task: 'Finish React', done: false},
        {id: 3, task: 'Start React Project', done: false},
        {id: 4, task: 'Find Job', done: false},
    ])

    const lastIndex = todoList.length - 1;

    const moving = (id, position) => {
        const newTodo = [...todoList];
        const index = newTodo.map(el => el.id).indexOf(id);
        const temp = newTodo[index];
        newTodo[index] = newTodo[index + position];
        newTodo[index + position] = temp;
        setTodoList(newTodo);
    }

    const deleteTask = (id) => {
        if (window.confirm('Are you sure')) {
            const newTodo = todoList.filter(el => el.id !== id);
            setTodoList(newTodo)
        }
    }

    const isDone = (id) => {
        const newList = todoList.map(el => {
            if (el.id === id) {
                return {...el, done: !el.done}
            }
            return el;
        })
        setTodoList(newList)
    }

    const addNewTodo = (task) => {
        const newTodo = [...todoList, {id: uuidv4(), task: task, done: false}];
        setTodoList(newTodo)
    }

    return (
        <div className="App">
            <h1>To Do list</h1>
            <CreatTask
                addNewTodo={addNewTodo}
            />
            <hr/>
            {todoList.map((el, i) =>
                <TodoList
                    key={Math.random()}
                    item={el}
                    index={i}
                    moving={moving}
                    lastIndex={lastIndex}
                    deleteTask={deleteTask}
                    isDone={isDone}
                />)}
            <hr/>


        </div>
    );
}

export default App;
