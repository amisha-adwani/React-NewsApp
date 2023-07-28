import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap'

class Loading extends Component {
  render() {
    return (
      <Container>

      <div style={{textAlign :'center'}}>
        <Spinner animation='border'/>
      </div>
      </Container>
    )
  }
}

export default Loading