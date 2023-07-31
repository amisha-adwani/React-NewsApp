import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const NewsItem =(props)=> {

    let { title, description, ImageUrl, NewsUrl, author, date, source } = props;
    return (
      <div>
        <Badge bg="secondary" >{source}</Badge>
        <Card >
          <Card.Img
            variant="top"
            src={ImageUrl}
            style={{  height: "14rem" }}
          />
          
          <Card.Body>
            <Card.Title>{title}..</Card.Title>
            <Card.Text>{description}...</Card.Text>
            <Button variant="primary" href={NewsUrl} target="_blank">
              Read More
            </Button>
            <Card.Footer className="text-muted my-2"> By {author ? author :'Unknown'} on {new Date(date).toGMTString()}</Card.Footer>
          </Card.Body>
        </Card>
      </div>
    );
  
}

export default NewsItem;
