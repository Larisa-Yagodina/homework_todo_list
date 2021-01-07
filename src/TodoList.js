import React from 'react';
import ControlIer from "./ControlIer";


export default function TodoList(props) {

    const item = props.item;
    const index = props.index;

    return (

        <div>
            <p style={item.done ? {textDecoration: 'line-through'} : {}}>
                <b>{item.task}</b> {' '}
            <ControlIer
                item={item}
                index={index}
                moving={props.moving}
                lastIndex={props.lastIndex}
                deleteTask={props.deleteTask}
                isDone={props.isDone}
                intoGarbage={props.intoGarbage}
            />
            </p>
        </div>

    );
}


