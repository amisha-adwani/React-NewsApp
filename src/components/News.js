import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import LoadingSpinner from "./LoadingSpinner.js";

export class News extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  constructor() {
    super();
    this.state = {
      articles: [], //state is accessing articles
      isLoading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${
      this.apiKey
    }&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({isLoading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      isLoading: false
    });
    console.log(this.state.page);
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${
      this.apiKey
    }&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({isLoading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      isLoading: false
    });
    console.log(this.state.page);
  };
  render() {
    return (
      <div>
        <Container>
          <h2 style={{textAlign:'center'}} className="m-4">Top stories today</h2>
       {this.state.isLoading && <LoadingSpinner />}
          {/* console.log(this.state.articles) */}
          <Row xs={1} md={2} lg={3}className="g-4">
           {!this.state.isLoading &&  this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <Col className="m-4">
                    {" "}
                    <NewsItem
                      title={element.title && element.title.slice(0,52)}
                      description={element.description && element.description.slice(0, 80)}
                      ImageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    >
                      {" "}
                    </NewsItem>{" "}
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>

        <Container className="d-flex justify-content-between my-2">
          <Button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous{" "}
          </Button>
          <Button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;{" "}
          </Button>
        </Container>
      </div>
    );
  }
}

export default News;
