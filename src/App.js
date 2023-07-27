import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Routes>
         <Route path='/home' element={<News key='general' category='General' pageSize='8' />}/>
         <Route path='/business' element={<News key='business' category='Business' pageSize='8' />}/>
         <Route path='/entertainment' element={<News key='entertainment' category='Entertainment' pageSize='8' />}/>
         <Route path='/health' element={<News key='health' category='Health' pageSize='8' />}/>
         <Route path='/science' element={<News key='science' category='Science' pageSize='8' />}/>
         <Route path='/sports' element={<News key='sports' category='Sports' pageSize='8' />}/>
         <Route path='/technology' element={<News key='technology' category='Technology' pageSize='8' />}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App

