import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, body, id }) {
  return (
    <div className='card my-1  col-6'>
      <div className='card-body'>
        <h5 className='card-title'>
          <strong>{title}</strong>
        </h5>
        <p className='card-text'>{body.substring(0, 80)}...</p>
        <Link to={`/posts/${id}`} className='btn btn-info'>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Card;
