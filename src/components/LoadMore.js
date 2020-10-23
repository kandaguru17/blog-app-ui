import React from 'react';
import '../App.css';

function LoadMore({ onclick, disabled }) {
  return (
    <button style={{ width: '100%' }} className='btn btn-light mb-3' onClick={onclick} disabled={disabled}>
      Load more
    </button>
  );
}

export default LoadMore;
