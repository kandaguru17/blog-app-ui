import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import LoadMore from '../components/LoadMore';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';

export const PAGE_LIMIT = 10;
const POST_BASE_URI = 'http://localhost:8080/api/posts';

function ViewPosts() {
  const [state, setState] = useState({ isLoading: true, results: [], error: '', pageEnd: false });
  const [filter, setFilter] = useState({ offset: { toggle: false, value: 0 }, keyword: '' });

  useEffect(() => {
    const getAllPosts = async () => {
      const response = await axios.get(
        `${POST_BASE_URI}?limit=${PAGE_LIMIT}&offset=${filter.offset.value}&keyword=${filter.keyword}`
      );

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        results: [...prevState.results, ...response.data],
        pageEnd: response.data.length < PAGE_LIMIT,
      }));
    };

    getAllPosts();
  }, [filter.offset.toggle]);

  const renderPosts = () => {
    const { results } = state;
    return results && results.map((post, i) => <Card title={post.title} body={post.body} id={post.id} key={i} />);
  };

  const onLoadMore = () => {
    setFilter((prevState) => ({
      ...prevState,
      offset: { value: prevState.offset.value + 1, toggle: !prevState.offset.toggle },
    }));
  };

  const onSearch = async () => {
    const POST_URL = `${POST_BASE_URI}?limit=${PAGE_LIMIT}&offset=${0}&keyword=${filter.keyword}`;
    setFilter((prevState) => ({ ...prevState, offset: { ...prevState.offset, value: 0 } }));
    const response = await axios.get(POST_URL);
    setState((prevState) => ({
      ...prevState,
      isLoading: false,
      results: [...response.data],
      pageEnd: response.data.length < PAGE_LIMIT,
    }));
  };

  if (state.isLoading) return <Loader />;

  return (
    <div>
      <h2 className='my-3'>All Blog Posts</h2>
      <div className='row'>
        <SearchBox
          onKeywordChange={(value) => setFilter((prevState) => ({ ...prevState, keyword: value }))}
          onSearchSubmit={onSearch}
        />
      </div>
      <div className='row'>
        {renderPosts()}
        <LoadMore onclick={onLoadMore} disabled={state.pageEnd || state.isLoading} />
      </div>
    </div>
  );
}

export default ViewPosts;
