import React from 'react';

const AdminHeader = () => {
  return (
    <header className='shadow-lg'>
      <nav className='bg-[#2b3d5b] border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start items-center'>
            <button
              id='toggleSidebar'
              aria-expanded='true'
              aria-controls='sidebar'
              className='hidden p-2 mr-3 text-white rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100'
            >
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button
              aria-expanded='true'
              aria-controls='sidebar'
              className='p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100'
            >
              <svg
                aria-hidden='true'
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                aria-hidden='true'
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Toggle sidebar</span>
            </button>
            <a
              href='https://flowbite.com'
              className='flex mr-4 text-white font-bold'
            >
              ADMIN PANEL
              {/* <img
                src='https://flowbite.s3.amazonaws.com/logo.svg'
                className='mr-3 h-8'
                alt='FlowBite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap '>
                Flowbite
              </span> */}
            </a>
          </div>
          <div className='flex items-center lg:order-2'>
            {/* Notifications */}

            {/* Dropdown menu */}
            <div
              className='hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg'
              id='notification-dropdown'
            >
              <a
                href='#'
                className='block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100'
              ></a>
            </div>

            <button
              type='button'
              className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300'
              id='user-menu-button'
              aria-expanded='false'
              data-dropdown-toggle='dropdown'
            >
              <span className='sr-only'>Open user menu</span>
              <img
                className='w-8 h-8 rounded-full'
                src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                alt='user photo'
              />
            </button>
            {/* Dropdown menu */}
            <div
              className='hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow'
              id='dropdown'
            >
              <div className='py-3 px-4'>
                <span className='block text-sm font-semibold text-gray-900'>
                  Neil sims
                </span>
                <span className='block text-sm font-light text-gray-500 truncate'>
                  name@flowbite.com
                </span>
              </div>

              <ul
                className='py-1 font-light text-gray-500'
                aria-labelledby='dropdown'
              >
                <li>
                  <a
                    href='#'
                    className='block py-2 px-4 text-sm hover:bg-gray-100'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
