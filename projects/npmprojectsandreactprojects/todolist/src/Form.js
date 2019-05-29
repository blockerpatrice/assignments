import React, { Component } from 'react';
// Import withTodos, this gives us our consumer, via a Higher order component called withTodos
import {withTodos} from './TodoProvider';
import Todo from './Todo';


class Form extends Component {

    constructor(){
        super();

        this.state = {
            title: ''
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    handlSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            title: this.state.title,
            description: this.state.description
        }
        //calling the addTodo function
        this.props.addTodo(newTodo);
    }
    render() {
    
        return (
            <form onSubmit = {this.handlSubmit}>
                <input type="text"
                       name="title"
                       value={this.state.title}
                       placeholder="Title"
                       onChange={this.handleChange} />
                <input type="text"
                       name="description"
                       value={this.state.description}
                       placeholder="Description"
                       onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        );
    }
}

export default withTodos(Form);