import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [{ name: "Dimas", id: 1 },
{ name: "Vasya", id: 2 }]

let messagesData = [ { messageText: "Hi", id: 1 }, 
{ messageText: "How are you", id: 2 }]

let postsData = [
  {postText: "wosw", post: 1, like: '0'},
  {postText: "this", post: 2, like: '323'},
  {postText: "stena", post: 3, like: '2'}

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
