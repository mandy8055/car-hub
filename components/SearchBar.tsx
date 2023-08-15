'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SearchManufacturer } from '.';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={classNames('-ml-3', 'z-10', otherClasses)}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      alert('Please fill in the search bar');
    }
    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false }); // To stop next router to perform automatic scroll
  };
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <div className='search-bar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='search-bar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='Car Model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setModel(e.target.value)
          }
          placeholder='Tiguan'
          className='search-bar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
