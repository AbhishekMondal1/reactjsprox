import React,{useState} from 'react';
import './App.css';
import Student from './r.js'
import './r.css'

function App()  {
  const [updatedState, changeState] = useState ({
    student:[
      {name:"Jack"},
      {name:"Bill"},
      {name:"Mark"},
    ]
  })
  
  return (
    <div>
    <div className="App">
    <h1>Functional Components</h1>
    </div>
    <div className="App1">
    <Student name={updatedState.student[0].name}/>
    <Student name={updatedState.student[1].name}/>
    <Student name={updatedState.student[2].name}/>
    </div>
    </div>
    );
}

export default App;
