import React from 'react';

function SearchBox({ onKeywordChange, onSearchSubmit }) {
  const onChange = (e) => {
    onKeywordChange(e.target.value);
  };

  const onformSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <form className='form-inline justify-content-center md-form form my-3 col' onSubmit={onformSubmit}>
      <input
        className='form-control form-control ml-3 mx-1'
        type='text'
        placeholder='Search by keyword'
        aria-label='Search'
        onChange={(e) => onChange(e)}
      />
      <button type='submit' className='btn btn-info my-2'>
        Search
      </button>
    </form>
  );
}

export default SearchBox;
