import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import Login from "./components/login"
import NewAccount from './components/newaccount'

import './App.css';

function App() {
  return (
    <div className="App">
      
      
      <Login />
      <NewAccount />
      
    </div>
    
  );
}

export default App;
