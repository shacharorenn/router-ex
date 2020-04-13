/**
 * componentDidMount() - invoked immediately after a component is inserted into the tree
 * componentDidUpdate(prevProps, prevState, snapshot)- invoked immediately after updating occurs. This method is not called for the initial render.
 componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
* 
 */

import React from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoListClass extends React.Component {
    state = {
        tasks: []
    }
    _search = async() => {
        const params = queryString.parse(this.props.location.search);
        const response = await axios.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${params['search']}`)
        this.setState ({
            tasks: response.data
        })
    }
        
    componentDidMount () {
        debugger;
        this._search();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this._search();
        }
    }

    render () {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.state.tasks.map((singleTask) => {
                            return <TodoItem key={singleTask.id} task={singleTask}/>
                        })
                    }
                </ul>
            </div>
        ) 
    }
}

export default withRouter(TodoListClass);


