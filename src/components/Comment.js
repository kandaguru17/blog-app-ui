import React from 'react';

function Comment({ comments }) {
  const renderComments = () => {
    return comments.map((comment) => (
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
    ));
  };

  return (
    <div class='row my-3'>
      <div class='col-8'>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <ul class='media-list'>{renderComments()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
