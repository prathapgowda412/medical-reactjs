import React from 'react';
import { CiCalendarDate, CiTimer } from 'react-icons/ci';
import Pagination from '../common/pagination/pagination';

const BookingCard = ({ booking }) => {
  const { date, time, service, comments, doctor, status } = booking ?? {};
  let dat = new Date(date);

  return (
    <div className='w-full bg-white border rounded-lg shadow-md mb-4'>
      <div className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 px-4 py-3'>
        <div className='w-full inline-flex justify-between items-center'>
          <p>Booking</p>
          <span className='bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded'>
            {status}
          </span>
        </div>
      </div>
      <div className='px-4 py-1 bg-white rounded-lg '>
        <div className='grid grid-cols-12 gap-2 lg:gap-2 '>
          <div className='col-span-6 my-0.5'>
            <p className='text-gray-800 font-medium'>
              Doctor: <span className='font-bold'> {doctor}</span>{' '}
            </p>
          </div>
          <div className='col-span-6 my-0.5'>
            <p className='text-gray-800 font-medium'>
              Service: <span className='font-bold'> {service} </span>{' '}
            </p>
          </div>
          <div className='col-span-6  my-0.5 '>
            <span class=' bg-blue-100 text-blue-800 text-md font-medium inline-flex items-center px-2 py-0.5 rounded'>
              <CiCalendarDate className='mr-2' />
              {dat?.toLocaleDateString('en-US') ?? ''}
            </span>
          </div>
          <div className='col-span-6  my-0.5 '>
            <span class='bg-blue-100 text-blue-800 text-md font-medium inline-flex items-center px-2 py-0.5  rounded'>
              <CiTimer className='mr-2' />
              {time}
            </span>
          </div>

          <div className='col-span-12'>
            <p className='mb-1 text-gray-600 font-bold'>Comments:</p>
            <p className='mb-1 text-gray-500 text-sm '>{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
