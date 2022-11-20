import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/ROUTES';

const SectionTwo = () => {
  return (
    <section className='bg-white'>
      <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
        <img
          className='w-full rounded-xl shadow-lg'
          src='/assets/images/banner/doctors-image.png'
          alt='dashboard image'
        />

        <div className='mt-4 md:mt-0'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900'>
            ABOUT US
          </h2>
          <p className='mb-6 font-light text-gray-500 md:text-lg'>
            <b className='font-bold'>SAMS</b> (Smart Appointment Management
            System) is on a mission to make affordable access to high-quality
            healthcare service available to everyone. For the benefit of
            humanity, we are dedicated to achieving and maintaining excellence
            in education, research, and healthcare. SAMS gives you access to
            your health information and with SAMS's Advanced appointment booking
            system, a patient can book their appointments in few clicks with
            doctor of their choice.
          </p>
          <Link
            to={ROUTES.ABOUTUS}
            className='inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
          >
            Read more
            <svg
              className='ml-2 -mr-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
