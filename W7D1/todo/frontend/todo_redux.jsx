import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// testing related import
import store from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import * as selectors from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.selectors = selectors;

  ReactDOM.render(<Root store={store} /> , document.querySelector('#content'));
});
