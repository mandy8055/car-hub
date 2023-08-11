'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import classnames from 'classnames';

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={classnames('custom-btn', containerStyles)}
      onClick={handleClick}
    >
      <span className='flex-1'>{title}</span>
    </button>
  );
};

export default CustomButton;
