import React from 'react';
import './App.css';
import Student from './r.js'
import './r.css'

function App() {
  return (
    <div>
    <div className="App">
    <h1>First React Application </h1>
    </div>
    <div className="App1">
    <Student name="Rock"> Top Score </Student>
    <Student name="Bill"/>
    <Student name="Mark"/>
    <Student name="Zoe"/>
    </div>
    </div>
    );
}

export default App;
