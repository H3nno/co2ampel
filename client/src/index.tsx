import React from 'react';
import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from "./Home";


import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://127.0.0.1:8000');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function App() {

  useEffect(() => {
    // Code here will run just like componentDidMount
    client.onopen = () => {
      console.log("Websocket Client Connected");
    };
  }, [])

  return (
    <Home />
  )
}


