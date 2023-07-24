import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap'

class Loading extends Component {
  render() {
    return (
      <div style={{textAlign :'center'}}>
        <Spinner animation='border'/>
      </div>
    )
  }
}

export default Loading