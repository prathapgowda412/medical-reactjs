import React from 'react';
import Layout from '../layout/layout';
import { Link, Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/ROUTES';
import { useAuth } from '../../contexts/auth/authContext';
import { RiBookletLine, RiProfileLine } from 'react-icons/ri';
import { TbLogout } from 'react-icons/tb';

const ProfileLayout = ({ children }) => {
  const { isAuthorized, patientLogout } = useAuth();
  if (!isAuthorized) return <Navigate to={ROUTES.SIGNIN} />;

  return (
    <Layout>
      <div className='max-w-[1280px] mx-auto md:px-[100px] lg:px-[100px] my-20 lg:my-30 grid grid-cols-12 md:gap-8 '>
        <div
          className=' hidden col-span-2 md:col-span-3 lg:col-span-3 lg:block'
          aria-label='Sidebar'
        >
          <div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded'>
            <ul className='space-y-2'>
              <li>
                <Link
                  to={ROUTES.PROFILE_DETAILS}
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
                >
                  <RiProfileLine />
                  <span className='ml-3'>Details</span>
                </Link>
              </li>

              <li>
                <Link
                  to={ROUTES.PROFILE_BOOKINGS}
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100'
                >
                  <RiBookletLine />
                  <span className='flex-1 ml-3 whitespace-nowrap'>
                    Bookings
                  </span>
                </Link>
              </li>

              <li>
                <button
                  onClick={patientLogout}
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100'
                >
                  <TbLogout />
                  <span className='flex-1 ml-3 whitespace-nowrap'>
                    Sign Out
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className=' col-span-12 md:col-span-7 lg:col-span-8'>
          <div class=' p-4 bg-gray-50 rounded-lg'>{children}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
