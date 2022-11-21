import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLoader from '../../components/common/loaders/button-loader';
import Pagination from '../../components/common/pagination/pagination';
import { useAdminAuth } from '../../contexts/auth/adminAuth';
import { useAdminAllBookings } from '../../services/apis/fetchqueries';
import { ROUTES } from '../../utils/ROUTES';
import AdminBookingCard from '../../components/admin-components/bookings/admin-booking-card';

const ADminBookingsPage = () => {
  const navigate = useNavigate();
  const [pageSeq, setPageSeq] = useState(1);
  const { isAdminAuthorized } = useAdminAuth();

  const { isLoading, data, isError } = useAdminAllBookings({ pageSeq });

  if (!isAdminAuthorized) navigate(ROUTES.ADMIN_LOGIN);

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
                <AdminBookingCard bookingData={booking} />
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

export default ADminBookingsPage;
