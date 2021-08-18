import { Layout, Input, PageHeader } from 'antd';
import React, { memo, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Api from '../services'
import CardNew from './components/CardNew';
const Search = memo(function Search() {
  const { search } = useParams();
  const [listNews, setListNews] = useState([]);
  const history = useHistory();
  const handlePostsFinded = (date) => {
    setListNews(date?.articles);
  }

  const handleOnSearch = (text, event) => {
    history.push(`/search/${text}`);
  }
  useEffect(() => {
    Promise.resolve(Api.searchNews(search))
      .then(handlePostsFinded);
  });

  return (
    <Layout >
      <Layout.Header className="layout">
        <PageHeader
          style={{BackgroundColor: 'trasnparent'}}
          onBack={() => history.push('/')}
          title="News"
        />
        <Input.Search
          className="input"
          placeholder="input search text"
          onSearch={handleOnSearch}
          style={{ width: 250 }} />
      </Layout.Header>
      <Layout.Content >
        <CardNew values={listNews} />
      </Layout.Content>
    </Layout>


  )
})

export default Search
