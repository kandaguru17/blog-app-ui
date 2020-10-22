import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import LoadMore from '../components/LoadMore';

export const PAGE_LIMIT = 10;

function ViewPosts() {
  const [state, setState] = useState({ isLoading: false, results: [], error: '' });
  const [offset, setOffset] = useState(0);
  const POST_URL = `http://localhost:8080/api/posts?limit=${PAGE_LIMIT}&offset=${offset}`;

  useEffect(() => {
    const getAllPosts = async () => {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      const response = await axios.get(POST_URL);
      setState((prevState) => ({ ...prevState, isLoading: false, results: [...response.data] }));
    };
    getAllPosts();
  }, []);

  const handleLoadMore = async () => {
    setOffset((prevState) => prevState + 1);
    const response = await axios.get(POST_URL);
    setState((prevState) => ({ ...prevState, results: [...prevState.results, ...response.data] }));
  };

  const renderPosts = () => {
    const { results } = state;
    return results && results.map((post, i) => <Card title={post.title} body={post.body} id={post.id} key={i} />);
  };

  if (state.isLoading) return 'loading..';

  return (
    <div>
      <h2 className='my-3'>All Blog Posts</h2>
      <div className='row'>
        {renderPosts()}
        <LoadMore onclick={handleLoadMore} />
      </div>
    </div>
  );
}

export default ViewPosts;
