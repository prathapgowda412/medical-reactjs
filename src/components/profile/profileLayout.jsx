import React from 'react';
import Layout from '../layout/layout';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/ROUTES';

const ProfileLayout = ({ children }) => {
  return (
    <Layout>
      <div className='max-w-[1280px] mx-auto md:px-[100px] lg:px-[100px] my-20 lg:my-30 grid grid-cols-12 md:gap-8 '>
        <div
          className=' hidden col-span-2 md:col-span-3 lg:col-span-3 lg:block'
          aria-label='Sidebar'
        >
          <div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded'>
            <ul className='space-y-2'>
              <li>
                <Link
                  to={ROUTES.PROFILE_DETAILS}
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                    <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                  </svg>
                  <span className='ml-3'>Details</span>
                </Link>
              </li>

              <li>
                <Link
                  to={ROUTES.PROFILE_BOOKINGS}
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75   group-hover:text-gray-900'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>
                    Bookings
                  </span>
                </Link>
              </li>

              <li>
                <button className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'>
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75   group-hover:text-gray-900'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>
                    Sign Out
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className=' col-span-12 md:col-span-7 lg:col-span-8'>
          <div class=' p-4 bg-gray-50 rounded-lg'>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
