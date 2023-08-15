'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps, OptionProps } from '@/types';
import classNames from 'classnames';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState<OptionProps>(options[0]);
  const router = useRouter();
  const handleSearchParams = (e: { title: string; value: string }): void => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleSearchParams(e);
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='chevron up and down'
            />
          </Listbox.Button>
          <Transition
            as='div'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    classNames(
                      'relative cursor-default select-none py-2 px-4',
                      active ? 'bg-primary-blue text-white' : 'text-gray-900',
                    )
                  }
                >
                  {({ selected }) => (
                    <span
                      className={classNames(
                        'block truncate',
                        selected ? 'font-medium' : 'font-normal',
                      )}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
