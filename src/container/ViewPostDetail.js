import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import Comment from '../components/Comment';

function ViewPostDetails(props) {
  const { id } = props.match.params;
  const [state, setState] = useState({
    isLoading: true,
    post: { title: '', body: '', comments: [] },
  });

  useEffect(() => {
    const POST_URL_EXPAND = `http://localhost:8080/api/posts/${id}?expand=true`;
    const renderPostDetails = async () => {
      const response = await axios.get(POST_URL_EXPAND);
      console.log(response.data);
      setState((prevState) => ({ ...prevState, isLoading: false, post: response.data }));
    };

    renderPostDetails();
  }, []);

  if (state.isLoading) return 'loading..';

  return (
    <div className='mx-5 my-5'>
      <Post title={state.post.title} body={state.post.body} />
      <h3 className='text-left mt-5'>Comments</h3>
      <Comment comments={state.post.comments} />
    </div>
  );
}

export default ViewPostDetails;
