import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], //state is accessing articles
      isLoading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0f85870f0b664682800893ce24fd3b56&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: 1,
      isLoading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0f85870f0b664682800893ce24fd3b56&page=${this.state.page-1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
    console.log(this.state.page);
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0f85870f0b664682800893ce24fd3b56&page=${this.state.page+1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
    console.log(this.state.page);
  };
  render() {
    return (
      <div>
        <Container>
          <h2>Top Headlines for today</h2>
          {/* console.log(this.state.articles) */}
          <Row md={3}>
            {this.state.articles.map((element) => {
              return (
                <div key={element.id}>
                  <Col className="m-4">
                    {" "}
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      ImageUrl={element.urlToImage}
                      NewsUrl={element.url}
                    >
                      {" "}
                    </NewsItem>{" "}
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>

        <Container className="d-flex justify-content-between">
          <Button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous{" "}
          </Button>
          <Button onClick={this.handleNextClick}> Next &rarr; </Button>
        </Container>
      </div>
    );
  }
}

export default News;
