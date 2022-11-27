import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { IoIosMenu } from 'react-icons/io';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/ROUTES';
import { useAuth } from '../../../contexts/auth/authContext';

// import logo from '/assets/logos/SAMS-logo.svg';

const HeaderTwo = () => {
  const [openNav, setOpenNav] = useState(false);
  const { isAuthorized, user } = useAuth();
  return (
    <header className='fixed top-0 w-full z-50'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link href={ROUTES.HOMEPAGE} className='flex items-center'>
            <img
              src='/assets/logos/sams-logoo.png'
              className='mr-3 h-12'
              alt='sams'
            />
          </Link>
          <div className='flex items-center lg:order-2'>
            <div className='mr-4'>
              {isAuthorized ? (
                <Link
                  to={ROUTES.PROFILE_DETAILS}
                  className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Profile
                </Link>
              ) : (
                <div className=' items-center justify-end flex  lg:w-0'>
                  <Link
                    to={ROUTES.ADMIN_LOGIN}
                    className='mr-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-700 hover:text-white'
                  >
                    Admin
                  </Link>
                  <Link
                    to={ROUTES.SIGNUP}
                    className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={ROUTES.SIGNIN}
                    className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              onClick={() => {
                setOpenNav(!openNav);
              }}
              className='inline-flex items-center p-2 ml-1 text-2xl text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {openNav ? <IoClose /> : <IoIosMenu />}
            </button>
          </div>
          <div
            className={classNames(
              ' justify-between items-center w-full lg:flex lg:w-auto lg:order-1  ',
              !openNav && 'hidden'
            )}
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <Link
                  to={ROUTES.HOMEPAGE}
                  className='block py-2 pr-4 pl-3 text-gray-700  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0'
                  aria-current='page'
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={ROUTES.ABOUTUS}
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 '
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.APPOINTMENT}
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-700 lg:p-0 '
                >
                  Book an appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
