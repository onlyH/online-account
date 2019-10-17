import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios'
import Home from "./containers/Home";
import Create from "./containers/Create";
import {FlatterArr, parseToYearAndMonth, ID } from "./utility";
import { AppContext } from './AppContext'
function App() {
  return (
      <div className="App ">
        <Home/>
      </div>
  );
}

export default App;
