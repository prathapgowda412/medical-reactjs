import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLoader from '../../components/common/loaders/button-loader';
import Pagination from '../../components/common/pagination/pagination';
import { useAdminAuth } from '../../contexts/auth/adminAuth';
import { ROUTES } from '../../utils/ROUTES';
import AdminBookingCard from '../../components/admin-components/bookings/admin-booking-card';
import { useAdminAllBookings } from '../../services/apis/admin/useAdminBookings';

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
        className='p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg'
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
          <span class='mb-4 bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded'>
            Total :{data?.data.totalBookings}{' '}
          </span>
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
