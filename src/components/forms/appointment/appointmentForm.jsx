import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import BookingService from '../../../services/apis/booking.services';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/ROUTES';

import doctors from './../../../contexts/data/doctors.json';
import specialists from './../../../contexts/data/specialist.json';
import { useAuth } from '../../../contexts/auth/authContext';

const AppointmentBookingForm = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useAuth();
  const { register, formState, handleSubmit } = useForm();

  const bookAppoint = (data) => {
    // check if patient is logged in
    if (!isAuthorized) return toast.error('login to book');

    BookingService.bookAppoint(data)
      .then(({ data }) => {
        if (data?.success) {
          toast.success('Booked SuccessFull');
          navigate(ROUTES.HOMEPAGE);
        } else {
          toast.error('Cannot Book');
          console.error('ERROR', data?.message);
        }
      })

      .catch((error) => {
        toast.error('Something went wrong');
        console.error('ERROR', error);
      });
  };

  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900'>
          Add a new product
        </h2>
        <form onSubmit={handleSubmit(bookAppoint)}>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='w-full'>
              <label
                htmlFor='date'
                className='block mb-2 text-sm font-medium text-gray-900  '
              >
                Date
              </label>
              <input
                name='date'
                id='date'
                type={'date'}
                min={new Date()}
                {...register('date', { required: true })}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='time'
                className='block mb-2 text-sm font-medium text-gray-900  '
              >
                Time
              </label>
              <input
                id='time'
                name='time'
                min={new Date()}
                {...register('time', { required: true })}
                type={'time'}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
              />
            </div>
            <div>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-medium text-gray-900  '
              >
                Specialist
              </label>
              <select
                {...register('service', { required: true })}
                id='category'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              >
                {specialists.map((item) => (
                  <option value={item.specialist} key={item.id}>
                    {item.specialist}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor='category'
                className='block mb-2 text-sm font-medium text-gray-900  '
              >
                Select Doctor
              </label>
              <select
                {...register('doctor', { required: true })}
                id='category'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              >
                <option value='Dr. Dev'>Dr. Dev</option>
                <option value='Dr. John'>Dr. John</option>
                <option value='Dr. Sam'>Dr. Sam</option>
              </select>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-900  '
              >
                Comments
              </label>
              <textarea
                {...register('comments', { required: true })}
                id='description'
                rows={4}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500   -700'
                placeholder='Your Comments here'
                defaultValue={''}
              />
            </div>
          </div>
          <button
            type='submit'
            className='inline-flex items-center  mt-4 sm:mt-6  text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800  bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 '
          >
            Book
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentBookingForm;
