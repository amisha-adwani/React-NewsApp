import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'
import { ProgressBar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  state={
    progress:0,
    min: 0
  }

  //a function 
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <ProgressBar className='fixed-top'  style={{height: "5px", borderRadius:'0px', marginTop:'55px'}} now={this.state.progress} />;
        <Routes>
         <Route path='/' element={<News setProgress={this.setProgress} key='general' category='General' pageSize='8' />}/>
         <Route path='/home' element={<News setProgress={this.setProgress}  key='general' category='General' pageSize='8' />}/>
         <Route path='/business' element={<News setProgress={this.setProgress}  key='business' category='Business' pageSize='8' />}/>
         <Route path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' category='Entertainment' pageSize='8' />}/>
         <Route path='/health' element={<News setProgress={this.setProgress}  key='health' category='Health' pageSize='8' />}/>
         <Route path='/science' element={<News setProgress={this.setProgress}  key='science' category='Science' pageSize='8' />}/>
         <Route path='/sports' element={<News setProgress={this.setProgress}  key='sports' category='Sports' pageSize='8' />}/>
         <Route path='/technology' element={<News setProgress={this.setProgress}  key='technology' category='Technology' pageSize='8' />}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App

