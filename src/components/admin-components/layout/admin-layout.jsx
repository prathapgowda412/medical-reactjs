import React from 'react';
import { useAdminAuth } from '../../../contexts/auth/adminAuth';
import AdminHeader from './admin-header';
import AdminSidebar from './admin-sidebar';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/ROUTES';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const { isAdminAuthorized } = useAdminAuth();

  // if (isAdminAuthorized) navigate(ROUTES.ADMIN_LOGIN);

  return (
    <div className='relative h-full bg-gray-100 '>
      <AdminHeader />
      <div className='grid grid-cols-12 gap-8 h-full pt-10 px-4'>
        <div className='col-span-3'>
          <AdminSidebar />
        </div>
        <div className=' rounded-lg px-4 py-4 col-span-9'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
