import React,{Component} from 'react';
import './App.css';
import Student from './r.js'
import './r.css'

class App extends Component {
  state ={
    student:[
      {name:"Jack"},
      {name:"Bill"},
      {name:"Mark"},
    ]
  }
  render(){
  return (
    <div>
    <div className="App">
    <h1>Class Based Components</h1>
    </div>
    <div className="App1">
    <Student name={this.state.student[0].name}/>
    <Student name={this.state.student[1].name}/>
    <Student name={this.state.student[2].name}/>
    </div>
    </div>
    );
  }
}

export default App;
