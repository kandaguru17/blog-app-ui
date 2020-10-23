import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  const renderComments = () => {
    return comments.map((comment) => <Comment comment={comment} />);
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

export default CommentList;
