import React, {Component} from 'react';

class TodoListItem extends Component {

  handleClick(id,state){
    // e.preventDefault();
    const {removeTodo} = this.props
    console.log(id, removeTodo, state.todos[id]);
    this.props.removeTodo(state.todos[id]);
  }

  render(){
    const {todo: {id, title, body}, removeTodo, state} = this.props;
    // console.log(state.todos[1]);
    return (
      <li>
        {title} | {body} | {id} | <button onClick={() =>
          this.handleClick(id,state)}>delete</button>
      </li>
    );
  }
}
export default TodoListItem;
