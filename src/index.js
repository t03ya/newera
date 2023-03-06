import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state/state';
import { addPost, subscribe, updatePost } from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {
    root.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updatePost={updatePost}/>
      </React.StrictMode>
    );
  }

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
