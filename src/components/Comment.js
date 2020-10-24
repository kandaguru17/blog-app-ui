import React from 'react';

function Comment({ comment }) {
  return (
    <div>
      <li className='media'>
        <div className='media-left'>
          <img src='http://placehold.it/60x60' className='mx-2' style={{ borderRadius: '50%' }} alt='profile-pic' />
        </div>
        <div className='media-body'>
          <h4 className='media-heading text-left'>
            {comment.email}
            <br />
          </h4>
          <p className='text-left'>{comment.body}</p>
        </div>
      </li>
    </div>
  );
}

export default Comment;
