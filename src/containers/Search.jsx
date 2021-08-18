import { Col, Card, Row } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../services'
const Search = memo(function Search() {
  const { search } = useParams();
  const [listNews, setListNews] = useState([]);

  const handlePostsFinded = (date) => {
    setListNews(date?.articles);
  }
  const handleClick = (url) => {
    window.open(url, "_blank");
  }
  useEffect(() => {
    Promise.resolve(Api.searchNews(search))
      .then(handlePostsFinded);
  });

  const renderPosts = (value, index) => {
    const { title, description, url, urlToImage } = value;

    return (
      <Row gutter={[16, 16]} key={`new-${index}`}>
        <Col span={12} >
          <Card
            hoverable
            style={{ height: 280 }}
            onClick={() => handleClick(url)}
          >
            <h1>{title}</h1>
            <p>{description} </p>
          </Card>
        </Col>
      </Row>)
  }

  return (
    <div>
      {listNews.map(renderPosts)}
    </div>
  )
})

export default Search
