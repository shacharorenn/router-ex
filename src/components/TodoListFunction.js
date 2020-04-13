import React,{useState,useEffect} from 'react';
import TodoItem from './TodoItem';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

const TodoListFunction = ({location}) => {
    debugger;
    const parsedSearchObj = queryString.parse(location.search).search;
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        const params = queryString.parse(location.search);
        axios.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${params['search']}`)
        .then((response) => {
            setTasks(response.data);
        })
    },[location.search])

    return (
        <div>
            <ul className="list-group">
                {
                    tasks.map((singleTask) => {
                        return <TodoItem key={singleTask.id} task={singleTask}/>
                    })
                }
            </ul>
        </div>
    )
}

export default withRouter(TodoListFunction);
