import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'
import './styles.css'
import clean from '../../../util'

const CardNew = memo(function CardNew({ values }) {
  const postsClean = clean(values);
  const handleClick = (url) => {
    window.open(url,"_blank") ;
  }
  
  const renderPost = (post, index) => {
    const { title, description,url, urlToImage } = post;
    return (
      <Col span={11}  xs={22} lg={8} xxl={8} key={`new-${index}`}>
        <Card
          hoverable
          style={{ height: 280 }}
          onClick={() =>handleClick(url)}
        >
          <div className="container">
            <img src={urlToImage} alt={title} />
            <div className="post">
              <h1>{title}</h1>
              <p>{description} </p>
            </div>
          </div>
        </Card>
      </Col>
    )
  }
  return (
    <Row gutter={[16, 16]} justify="center" wrap>
      {postsClean.slice(0, 12).map(renderPost)}
    </Row>
  )
})
CardNew.defaultProps = {
  values: []
};
CardNew.propTypes = {
  values: PropTypes.array.isRequired
}

export default CardNew
