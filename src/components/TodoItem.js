import React from 'react';

export default ({task}) => {
    return (
            <li className="list-group-item">
               <h5>{task.title}</h5> 
               <p>{task.description}</p>
            </li>
    )
}