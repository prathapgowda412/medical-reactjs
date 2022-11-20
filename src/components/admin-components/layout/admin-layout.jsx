import React from 'react';
import AdminHeader from './admin-header';
import AdminSidebar from './admin-sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className='relative'>
      <AdminHeader />
      <div className='grid grid-cols-12 gap-8 '>
        <div className='col-span-3'>
          <AdminSidebar />
        </div>
        <div className='bg-blue-200 col-span-9'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
