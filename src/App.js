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
         <Route path='/home' element={<News key='general' category='general' pageSize='8' />}/>
         <Route path='/business' element={<News key='business' category='business' pageSize='8' />}/>
         <Route path='/entertainment' element={<News key='entertainment' category='entertainment' pageSize='8' />}/>
         <Route path='/health' element={<News key='health' category='health' pageSize='8' />}/>
         <Route path='/science' element={<News key='science' category='science' pageSize='8' />}/>
         <Route path='/sports' element={<News key='sports' category='sports' pageSize='8' />}/>
         <Route path='/technology' element={<News key='technology' category='technology' pageSize='8' />}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App

