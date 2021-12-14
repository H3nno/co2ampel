import React from 'react';
import './App.css';

function App() {
  return (
    <div className='Grid'>
      <Header />
      <Main />
    </div>
  );
}

export default App;


function Header(){
  return(
    <div className='Header'>
      <h2 className='Titel'>Co2Ampel</h2>
      <a href="#home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  )
}

function Main(){
  return(
    <div className='Main'>
      <p>Main</p>

    </div>
  )
}