'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import classNames from 'classnames';

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  textStyles,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={classNames('custom-btn', containerStyles)}
      onClick={handleClick}
    >
      <span className={classNames('flex-1', textStyles)}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
