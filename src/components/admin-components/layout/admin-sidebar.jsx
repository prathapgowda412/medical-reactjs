import React from 'react';
import { IoIosListBox } from 'react-icons/io';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { ROUTES } from '../../../utils/ROUTES';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
const adminSideBarList = [
  { title: 'Bookings', icon: <IoIosListBox />, route: ROUTES.ADMIN_BOOKINGS },
  {
    title: 'Patients',
    icon: <BsPersonBadgeFill />,
    route: ROUTES.ADMIN_PATIENTS,
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside className=' w-full h-full  rounded-md' aria-label='Sidenav'>
      <div className='overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 rounded-lg'>
        <ul className='space-y-2'>
          {adminSideBarList.map((item) => (
            <li key={'admin-sidebar' + item.title}>
              <Link
                to={item.route}
                className={cn(
                  'flex items-center p-2 text-base font-normal rounded-lg  hover:bg-[#2b3d5b] hover:text-white group',
                  location.pathname == item.route
                    ? 'bg-[#2b3d5b] text-white'
                    : 'text-gray-900 '
                )}
              >
                {item.icon}
                <span className='ml-3'>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
