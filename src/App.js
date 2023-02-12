import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (  
     <div>
        <Router>
        <Routes>
         <Route path="/" element={<div><Navbar/><News key='general' pageSize={this.pageSize} country="in" category="general"/></div>}></Route>
         <Route path="/business" element={<div><Navbar/><News key='business' pageSize={this.pageSize} country="in" category="business"></News></div>}></Route>
         <Route path="/entertainment"  element={<div><Navbar/><News key='entertainment' pageSize={this.pageSize} country="in" category="entertainment"></News></div>}></Route>
          <Route path="/health" element={<div><Navbar/><News key='health' pageSize={this.pageSize} country="in" category="health"></News></div>}></Route>
          <Route path="/science" element={<div><Navbar/><News key='science' pageSize={this.pageSize} country="in" category="science"></News></div>}></Route>
          <Route path="/sports" element={<div><Navbar/><News key='sports' pageSize={this.pageSize} country="in" category="sports"></News></div>}></Route>
          <Route path="/technology" element={<div><Navbar/><News key='technology' pageSize={this.pageSize} country="in" category="technology"></News></div>}></Route>
         </Routes> 
        </Router>
      </div>

    )
  }
}
