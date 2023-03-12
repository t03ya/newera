import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}
        addPost={store.addPost.bind(store)} updatePost={store.updatePost.bind(store)}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
