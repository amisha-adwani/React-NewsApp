import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import LoadingSpinner from "./LoadingSpinner.js";

const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  document.title = `Newsify - ${props.category}`

  let apiKey = process.env.REACT_APP_NEWS_API;

   const updateNews = async (currentPage)=>{
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${props.pageSize}`;
    setIsLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(50)
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setIsLoading(false)
    props.setProgress(100)
  }
 
  useEffect(()=>{
    updateNews()
    // eslint-disable-next-line
  },([]))
  

  const handlePrevClick = async () => {
    const prevPage = page-1
    setIsLoading(true)
    setPage(prevPage)
   await updateNews(prevPage);
    setIsLoading(false)
    console.log(prevPage);
    console.log(props.category);
  };

  const handleNextClick = async () => {
    const nextPage = page+1
    setIsLoading(true)
    setPage(nextPage)
    await updateNews(nextPage);
    setIsLoading(false)
    console.log(nextPage);
    console.log(props.category);
  };
  
    return (
      <div>
        <Container>
          <h2 style={{textAlign:'center', marginTop:"50px"}} >{`Top ${props.category} Stories`}</h2>
         {isLoading && <LoadingSpinner />}
          <Row xs={1} md={2} lg={3}className="g-4">
           {!isLoading &&  articles.map((element) => {
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
            disabled={page <= 1}
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous{" "}
          </Button>
          <Button
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            onClick={handleNextClick}
          >
            {" "}
            Next &rarr;{" "}
          </Button>
        </Container>
      </div>
    );
  
}

export default News;
