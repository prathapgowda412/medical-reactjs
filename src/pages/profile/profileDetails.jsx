import React from 'react';
import { useAuth } from '../../contexts/auth/authContext';
import ProfileLayout from '../../components/profile/profileLayout';

const ProfileDetailsPage = () => {
  const { user } = useAuth();
  console.log('user data', user);
  return (
    <div>
      <div className='w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 '>
        <h5 className='mb-2 text-3xl font-bold text-gray-900'>
          Work fast from anywhere
        </h5>
        <p className='mb-5 text-base text-gray-500 sm:text-lg'>
          Stay up to date and move work forward with Flowbite on iOS &amp;
          Android. Download the app today.
        </p>
        <div className='items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4'></div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
