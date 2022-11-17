import React from 'react';
import ButtonLoader from '../../components/common/loaders/button-loader';
import ProfileBookings from '../../components/profile/bookings';
import { useBookingsQuery } from '../../services/apis/fetchqueries';

const BookingsPage = () => {
  const { isLoading, data, isError } = useBookingsQuery();

  if (isLoading) return <ButtonLoader text={'Fetching Bookings'} />;

  if (isError)
    return (
      <div
        className='p-2  mb-4 text-sm text-red-700 bg-red-100 rounded-lg'
        role='alert'
      >
        <span className='font-medium'>Something went wrong!</span> Please try
        again.
      </div>
    );

  return <ProfileBookings bookings={data?.data} />;
};

export default BookingsPage;
