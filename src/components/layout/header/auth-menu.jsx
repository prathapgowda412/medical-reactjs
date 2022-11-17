import React from 'react';

const AuthMenu = () => {
  return (
    <div className='relative'>
      <div>
        <button
          id='dropdownButton'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
        >
          Dropdown button{' '}
          <svg
            aria-hidden='true'
            className='ml-2 w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id='dropdownMenu'
          className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700'
        >
          <ul
            className='py-1 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownButton'
          >
            <li>
              <a
                href='#'
                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthMenu;
