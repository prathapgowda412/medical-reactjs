import React from 'react';

const Footer = () => {
  return (
    <div>
      {' '}
      <footer className='p-4 bg-white md:p-8 lg:p-10'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <img
            src='/assets/logos/sams-logoo.png'
            href='#'
            className='h-14 my-4 mx-auto text-2xl font-semibold text-gray-900'
          />

          <ul className='flex flex-wrap justify-center items-center mb-6 text-gray-900'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                About
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Premium
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                Campaigns
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Affiliate Program
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                FAQs
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Contact
              </a>
            </li>
          </ul>
          {/* <span className='text-sm text-gray-500 sm:text-center'>
            © 2021-2022{' '}
            <a href='#' className='hover:underline'>
              Flowbite™
            </a>
            . All Rights Reserved.
          </span> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
