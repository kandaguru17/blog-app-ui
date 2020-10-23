import React from 'react';

function Comment({ comment }) {
  return (
    <div>
      <li class='media'>
        <div class='media-left'>
          <img src='http://placehold.it/60x60' class='mx-2' style={{ borderRadius: '50%' }} alt='profile-pic' />
        </div>
        <div class='media-body'>
          <h4 class='media-heading text-left'>
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
