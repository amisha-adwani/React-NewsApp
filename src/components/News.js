import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [], //state is accessing articles
      isLoading: false
    }
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=0f85870f0b664682800893ce24fd3b56'
    let data = await fetch(url)
    let parsedData= await data.json()
    console.log(parsedData)
    this.setState({
      articles : parsedData.articles,
      isLoading: false
    })
  }
  render() {
    return (
      <div>
        <Container>
        <h2>Top Headlines for today</h2>
  {/* console.log(this.state.articles) */}
        <Row md={4}> 
        {this.state.articles.map((element)=>{   
         return <div key={element.id}>
            <Col> <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} url={element.url}> </NewsItem> </Col>
          </div>
          })}
        </Row>

        </Container>
      </div>
    )
  }
}

export default News
