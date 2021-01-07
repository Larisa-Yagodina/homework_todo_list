import React from 'react';

export default function ControlIer(props) {

    const item = props.item;
    const index = props.index;
    const lastIndex = props.lastIndex;

    return (
        <>
            <button onClick={() => props.moving(item.id, -1)} disabled={index === 0}> Up</button>
            <button onClick={() => props.moving(item.id, 1)} disabled={index === lastIndex}> Down</button>
            <button onClick={() => props.deleteTask(item.id)}> Delete</button>
            <button onClick={() => props.isDone(item.id)}> {!item.done ? 'Done' : 'Undone'} </button>
        </>
    );
}