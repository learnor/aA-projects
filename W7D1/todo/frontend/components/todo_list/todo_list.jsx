import React, {Component} from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';

class TodoList extends Component {
  render() {
    const { todos, receiveTodo, state } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={ receiveTodo }
        removeTodo={ removeTodo }
        state={ state } />
      )
    );
    return (
      <div>
        <h2> Todo List goes here</h2>
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;
