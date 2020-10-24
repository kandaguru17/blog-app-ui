import React from 'react';

function Post({ title, body }) {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h2>{title}</h2>
        </div>
        <div className='card-body'>
          <div style={{ fontSize: '20px' }}>
            <p className='text-left'>
              <strong>Description:</strong>
            </p>
            <p className='card-text text-left'>{body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
