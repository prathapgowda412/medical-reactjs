import React, { useState } from 'react';
import ButtonLoader from '../../components/common/loaders/button-loader';
import Pagination from '../../components/common/pagination/pagination';
import BookingCard from '../../components/profile/bookings';
import ProfileBookings from '../../components/profile/bookings';
import { useBookingsQuery } from '../../services/apis/fetchqueries';

const BookingsPage = () => {
  const [pageSeq, setPageSeq] = useState(1);

  const { isLoading, data, isError } = useBookingsQuery({ pageSeq });
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

  return (
    <div>
      {data && (
        <>
          {data?.data?.bookings.length > 0 ? (
            <>
              {data?.data?.bookings?.map((booking) => (
                <BookingCard booking={booking} />
              ))}
              <Pagination
                handlePage={setPageSeq}
                currentPage={pageSeq}
                totalPages={data?.data?.totalPages}
              />
            </>
          ) : (
            <div
              className='p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg'
              role='alert'
            >
              No Bookings Found
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookingsPage;
