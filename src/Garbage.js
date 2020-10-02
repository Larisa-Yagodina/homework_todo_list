import React from 'react';

export default function Garbage (props) {

    const garbage = props.garbage;

    return (
        <li style={garbage.done ? {textDecoration:'line-through'} : {}}>
            <b>{garbage.title}: </b> <i> {garbage.task}</i>
        </li>
    );
}


