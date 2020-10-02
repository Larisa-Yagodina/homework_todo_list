import React from 'react';
import ControlItems from "./ControlItems";

export default function TodoList (props) {

    const item = props.el;
    const index = props.index;
    const moving = props.moving;
    const lastIndex = props.lastIndex;
    const deleteTask = props.deleteTask;
    const intoGarbage = props.intoGarbage;
    const doneTask = props.doneTask;

    return (

        <div>
        <li style={item.done ? {textDecoration:'line-through'} : {}} >
            <b>{item.title}:</b>  <i> {item.task} </i>
        </li>

            <ControlItems
                item={item}
                index={index}
                moving={moving}
                lastIndex={lastIndex}
                deleteTask={deleteTask}
                intoGarbage={intoGarbage}
                doneTask={doneTask}
            />

        </div>

    );
}


