import React, { Component } from 'react'
import News from './components/News'
import NavBar from './components/NavBar'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize='5'/>
      </div>
    )
  }
}

export default App

