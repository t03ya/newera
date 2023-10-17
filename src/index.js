import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = () => {
ReactDOM.render(
  <BrowserRouter>
  <App
    state={store.getState()}
    dispatch={store.dispatch.bind(store)}
    addPost={store.addPost.bind(store)}
    updatePost={store.updatePost.bind(store)} />
</BrowserRouter>,
  document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

//reportWebVitals();

