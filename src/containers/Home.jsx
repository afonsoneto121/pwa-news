import React, { memo,useEffect,useState } from 'react'
import { Row, Col } from 'antd'

import Api from '../services' 
export default memo(function Home() {
  const [news,setNews] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const handleNews = (articles) => {
    console.log("Article",articles);
    setNews({
      science: articles[0]?.value.value,
      sports: articles[1]?.value.value,
      technology: articles[2]?.value.value,      
    });
  }
  useEffect(() => {    
     Promise.allSettled([
      /* Api.getNews('science')
      Api.getNews('sports')
      Api.getNews('technology') */
      Api.mockAPI,
      Api.mockAPI,
      Api.mockAPI,
    ]).then(handleNews); 
    setLoading(true);
  },[])
  if(!loading) return <div>Carregando....</div>
  return (
    <div>
      <Row gutter={16}> 
        <Col span={12}>
          <h2>Science</h2>
        </Col>

        <Col span={12} >
          <h2>Sports</h2>
        </Col>
      </Row>
      <hr/>
      <Row gutter={16}> 
        <Col span={24} md={16} offset={6}>
          <h2>Technology</h2>
        </Col>
      </Row>
    </div>
  )
})
