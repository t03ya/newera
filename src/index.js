import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state/state';
import { addPost } from './state/state';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);

reportWebVitals();
