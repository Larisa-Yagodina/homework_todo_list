import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import Garbage from "./Garbage";
import {v4 as uuidv4 } from 'uuid'
import Controller from "./Controller";


 function App() {

  const [todoList, setTodoList] = useState([
      {id: 1, title: 'Study 1', task: 'React JS', done: false},
      {id: 2, title: 'Study 2', task: 'React Project', done: false},
      {id: 3, title: 'Job 1', task: 'React Job', done: false}
  ])

  const [garbage, setGarbage] = useState([]);

  const intoGarbage = (index, id) => {
      const current = todoList[index];
      const newGarbage = [...garbage, current];
      const newTodo = todoList.filter(el => el.id !== id);
      setTodoList(newTodo)
      setGarbage(newGarbage)
  }

     const lastIndex = todoList.length - 1;

     const moving = (index, position) => {
       const newTodo = [...todoList];
       const temp = newTodo[index];
         newTodo[index] = newTodo[index + position]
         newTodo[index + position] = temp;
       setTodoList(newTodo)
     }

     const deleteTask = (id) => {
         const newTodo = todoList.filter(el => el.id !== id);
         setTodoList(newTodo)
     }

     const addNewTask = (title, task) => {
         const newList = [...todoList, {id: uuidv4(), title: title, task: task, done: false}];
         setTodoList(newList)
     }

     const doneTask = (id) => {
         const newTodo = todoList.map(el => {
             if (el.id === id) return {...el, done: !el.done};
             return el;
         })
         setTodoList(newTodo)
     }

  return (
    <div className="App">
     <h1>ToDo List</h1>
        <hr />
         <Controller addNewTask={addNewTask}/>
        <hr />
        {todoList.map((el, i) => <TodoList
            el={el}
            index={i}
            moving={moving}
            lastIndex={lastIndex}
            deleteTask={deleteTask}
            intoGarbage={intoGarbage}
            doneTask={doneTask}
        /> )}
        { !!garbage.length &&
        <>
        <hr />
         <h2> Garbage </h2>
        {garbage.map(el => <Garbage garbage={el} />)}
        <hr />
        </>}

    </div>
  );
}

export default App;
