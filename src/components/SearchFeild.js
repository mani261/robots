import React from 'react';

const SearchFeild = ({ searchChange }) => {
    return (
        <div>
            <input name='search' id='search' className='ma3' placeholder='Search' type={'search'} onChange={searchChange} />
        </div>
    );
}

export default SearchFeild;