import React,{useState} from 'react';
import './App.css';
import Com1 from './comp1.js';
import Com2 from './comp2.js';

function App(props)  {

      if (props.name) {
        return <Com1/>
      }
      else{
        return <Com2/>
      }

}

export default App;
