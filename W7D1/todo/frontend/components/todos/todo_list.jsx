import React, {Component} from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h2> Todo List goes here</h2>
        <ul>
          {this.props.todos.map(todo => <TodoListItem todo={todo} key={todo.id}/>)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
