import React from 'react';
import { useAuth } from '../../contexts/auth/authContext';

import { capitalizeFirstLetter } from '../../utils/general/string-helper';
import { getDateFormat } from '../../utils/general/date-helper';
const ProfileDetailsPage = () => {
  const { user } = useAuth();
  return (
    <div>
      <section className='bg-white'>
        <div className='py-4 px-4 mx-auto max-w-2xl lg:py-8'>
          <h2 className='mb-4 text-xl font-semibold leading-none text-gray-900 md:text-2xl   '>
            {capitalizeFirstLetter(user?.name)}
          </h2>
          <div className='w-full my-4'>
            <p className=' font-medium leading-none text-gray-600 '>
              Email:
              <span className='font-semibold leading-none text-gray-900'>
                {user?.email}
              </span>
            </p>
          </div>

          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <p className='mb-2 font-semibold leading-none text-gray-600   '>
                DOB
              </p>
              <p className='mb-4 font-medium text-gray-900 sm:mb-5 '>
                {getDateFormat(user?.dob)}
              </p>
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <p className='mb-2 font-semibold leading-none text-gray-600   '>
                Height
              </p>
              <p className='mb-4 font-medium text-gray-900 sm:mb-5 '>
                {user?.height} cm
              </p>
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <p className='mb-2 font-semibold leading-none text-gray-600   '>
                Blood
              </p>
              <p className='mb-4 font-medium text-gray-900 sm:mb-5 '>
                {user?.bloodgroup}
              </p>
            </div>
            <div className='col-span-6 md:col-span-4 lg:col-span-3'>
              <p className='mb-2 font-semibold leading-none text-gray-600   '>
                Weight
              </p>
              <p className='mb-4 font-medium text-gray-900 sm:mb-5 '>
                {user?.weight} kg
              </p>
            </div>
          </div>
          {/* <div className='flex items-center space-x-4'>
            <button
              type='button'
              className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <TbEdit className='text-lg mr-2' />
              Edit
            </button>
            <button
              type='button'
              className='inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <MdDeleteOutline className='text-lg mr-2' />
              Delete
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ProfileDetailsPage;
