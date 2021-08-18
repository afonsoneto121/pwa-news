import React, { memo, useEffect, useState } from 'react'
import { Layout,  Input } from 'antd'
import Api from '../services'
import './style.css';
import PrincipalNew from './components/PrincipalNew/index';
import CardNew from './components/CardNew/index';
import { useHistory } from 'react-router-dom'

export default memo(function Home() {
  const history = useHistory()
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(false);
  
  const handleNews = (articles) =>
    setNews({
      general: articles[0]?.value.articles,
      science: articles[1]?.value.articles,
      sports: articles[2]?.value.articles,
      technology: articles[3]?.value.articles,
    });
  

  const handleOnSearch = (text,event) => {
    history.push(`/search/${text}`);
  }
  useEffect(() => {
    setLoading(true);

    Promise.allSettled([
      /* Api.getNews('general'),
      Api.getNews('science'),
      Api.getNews('sports'), 
      Api.getNews('technology') */
      Api.mockAPI,
      Api.mockAPI,
      Api.mockAPI,
      Api.mockAPI
    ]).then(handleNews);
  }, [])
  if (!loading) return <div>Carregando....</div>
  return (
    <>
      <Layout >
        <Layout.Header className="layout" theme="dark">
            <h2>News</h2>
            <Input.Search 
            className="input"
            placeholder="input search text" 
            onSearch={handleOnSearch} 
            style={{ width: 250 }} />
        </Layout.Header>
        <Layout.Content theme="dark">
          <PrincipalNew values={news?.general} />
          <hr />

          <h2>Sports</h2>
          <CardNew values={news?.sports} />
          <hr />

          <h2>Science</h2>
          <CardNew values={news?.science} />
          <hr />

          <h2>Technology</h2>
          <CardNew values={news?.technology} />

        </Layout.Content>
      </Layout>

    </>
  )
})
