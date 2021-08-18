import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Carousel, Card } from 'antd'
import './styles.css';
import clean from '../../../util';

const PrincipalNew = memo(function PrincipalNew({ values }) {
  const postsClean = clean(values);
  const handleClick = (url) => {
    window.open(url,"_blank") ;
  }
  const renderCapa = (post, index) => {
    const { title, description,url, urlToImage } = post;
    return (
      <div 
      className="content capa_new" 
      key={`post-${index}`} 
      onClick={() =>handleClick(url)}
      >
        <img src={urlToImage} alt={title} width="100%" />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }
  const renderSubNews = (post, index) => {
    const { title, description,url, urlToImage } = post;
    return (
      <Col span={4} xs={11} sm={8} key={`new-${index}`}
      >
        <Card
          onClick={() =>handleClick(url)}
          className="aling_news" 
          hoverable
          cover={<img src={urlToImage} alt={title} />}
        >
          <Card.Meta 
            title={title} 
            description={description}
            />
        </Card>
      </Col>
    )
  }
  return (
    <>
      <Row gutter={[4, 4]} justify="center">
        <Col span={22} xl={18} xxl={12}>
          <Carousel
            autoplay
            dots
            dotPosition="top"
          >
            {postsClean.slice(0, 7).map(renderCapa)}
          </Carousel>
        </Col>
      </Row>
      <Row gutter={[16, 16]}  justify="center">
        {postsClean.slice(7, 12).map(renderSubNews)}
      </Row>
    </>
  )
})

PrincipalNew.defaultProps = {
  values: []
};

PrincipalNew.propTypes = {
  values: PropTypes.array.isRequired
};

export default PrincipalNew
