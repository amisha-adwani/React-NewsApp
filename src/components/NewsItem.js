import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, NewsUrl } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem", height: "23rem" }}>
          <Card.Img
            variant="top"
            src={ImageUrl}
            style={{ width: "18rem", height: "10rem" }}
          />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>{description}...</Card.Text>
            <Button variant="primary" href={NewsUrl} target="_blank">
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsItem;
