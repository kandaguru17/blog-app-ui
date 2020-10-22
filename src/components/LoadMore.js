import React from 'react';
import '../App.css';

function LoadMore({ onclick }) {
  return (
    <div style={{ width: '100%' }} className='btn btn-light mb-3' onClick={onclick}>
      Load more
    </div>
  );
}

export default LoadMore;
