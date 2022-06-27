import React from 'react';

const Header = ({ category, title, ...props }) => {
  return (
    <div className='mr-10' {...props}>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>
        {title}
      </p>
    </div>
  );
};

export default Header;
