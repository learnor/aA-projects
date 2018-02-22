import React, {Component} from 'react';

class TodoListItem extends Component {
  render(){
    const {id, title, body} = this.props.todo;
    return (
      <li>
        {title}
      </li>
    );
  }
}
export default TodoListItem;
