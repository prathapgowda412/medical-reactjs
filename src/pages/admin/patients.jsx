import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPatientsCard from '../../components/admin-components/patients/admin-patients';
import ButtonLoader from '../../components/common/loaders/button-loader';
import Pagination from '../../components/common/pagination/pagination';
import { useAdminAuth } from '../../contexts/auth/adminAuth';
import { useAdminAllPatients } from '../../services/apis/admin/useAdminPatients';
import { ROUTES } from '../../utils/ROUTES';

const AdminPatientsPage = () => {
  const navigate = useNavigate();
  const [pageSeq, setPageSeq] = useState(1);

  const { isAdminAuthorized } = useAdminAuth();

  const { data, isLoading, error, isError } = useAdminAllPatients({ pageSeq });

  if (!isAdminAuthorized) navigate(ROUTES.ADMIN_LOGIN);

  if (isLoading) return <ButtonLoader text={'Fetching Patients'} />;
  console.log('patients', data);
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
          <span class='bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded'>
            Total :{data?.data.totalPatients}{' '}
          </span>

          {data?.data?.patients?.length > 0 ? (
            <>
              {data?.data?.patients?.map((patient) => (
                <AdminPatientsCard patient={patient} />
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
              No Patients Found
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPatientsPage;
