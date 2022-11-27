import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/ROUTES';

const Footer = () => {
  return (
    <div>
      {' '}
      <footer className='p-4 bg-white md:p-8 lg:p-10'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <img
            src='/assets/logos/sams-logoo.png'
            alt=''
            className='h-14 my-4 mx-auto text-2xl font-semibold text-gray-900'
          />

          <ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900'>
            <li>
              <Link
                to={ROUTES.HOMEPAGE}
                className='mr-4 hover:underline md:mr-6'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ABOUTUS}
                className='mr-4 hover:underline md:mr-6 '
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ADMIN_LOGIN}
                className='mr-4 hover:underline md:mr-6 '
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
