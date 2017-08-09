import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchCategories, queryJokes } from './actions/query_action';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchCategories = fetchCategories;
  window.queryJokes = queryJokes;


  const store = configureStore();

  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
