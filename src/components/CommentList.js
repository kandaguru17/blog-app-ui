import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  const renderComments = () => {
    return comments.map((comment) => <Comment key={comment.id} comment={comment} />);
  };

  return (
    <div className='row my-3'>
      <div className='col-8'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <ul className='media-list'>{renderComments()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
