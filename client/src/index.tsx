import React from 'react';
import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Evaluation from "./pages/Evaluation";
import Options from "./pages/Options";
import NoPage from "./pages/NoPage";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Evaluation" element={<Evaluation />} />
          <Route path="Options" element={<Options />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


