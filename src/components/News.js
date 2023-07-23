import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class News extends Component {
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=0f85870f0b664682800893ce24fd3b56'
    let data = await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
  }
  render() {
    return (
      <div>
        <Container>
        <h2>Top Headlines for today</h2>
        <Row md={4}> 
        <Col> <NewsItem title='title for the news' description='yes i am desc'></NewsItem> </Col>
        <Col> <NewsItem title='title for the news' description='yes i am desc'></NewsItem> </Col>
        <Col> <NewsItem title='title for the news' description='yes i am desc'></NewsItem> </Col>
        <Col> <NewsItem title='title for the news' description='yes i am desc'></NewsItem> </Col>
        </Row>

        </Container>
      </div>
    )
  }
}

export default News
