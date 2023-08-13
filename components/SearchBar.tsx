'use client';
import { useState } from 'react';
import { SearchManufacturer } from '.';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('');
  const handleSearch = (): void => {};
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <div className='search-bar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
