import React from 'react';

function Post({ title, body }) {
  return (
    <>
      <div class='card'>
        <div class='card-header'>
          <h2>{title}</h2>
        </div>
        <div class='card-body'>
          <div style={{ fontSize: '20px' }}>
            <p className='text-left'>
              <strong>Description:</strong>
            </p>
            <p class='card-text text-left'>{body}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
