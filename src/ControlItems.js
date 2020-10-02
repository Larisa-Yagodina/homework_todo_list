import React from 'react';

export default function ControlItems (props) {

    const index = props.index;
    const item = props.item;
    const moving = props.moving;
const lastIndex = props.lastIndex;
const deleteTask = props.deleteTask;
const intoGarbage = props.intoGarbage;
const doneTask = props.doneTask;

    return (
        <p>
            <button onClick={() => moving(index, -1)} disabled={index === 0}> Up </button> &nbsp;
            <button onClick={() => moving(index, 1)} disabled={index === lastIndex}> Down </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => doneTask(item.id)}> { item.done ? 'UnDONE' : 'DONE' } </button>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTask(item.id)}> Delete </button> &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => intoGarbage(index, item.id)}> Into Garbage </button>

        </p>
    );
}