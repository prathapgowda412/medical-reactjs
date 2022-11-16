import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import BookingService from '../../../services/apis/booking.services';
const AppointmentBookingForm = () => {
  const { register, formState, handleSubmit } = useForm();

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const bookAppoint = (data) => {
    console.log('data', data);
    BookingService.bookAppoint(data)
      .then((resp) => {
        console.log('resp', resp);
      })
      .catch((error) => {
        console.log('ERROR', error);
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
                For
              </label>
              <select
                {...register('service', { required: true })}
                id='category'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
              >
                <option selected>Select Service</option>
                <option value='physist'>Physist</option>
                <option value='dental'>Dental</option>
                <option value='gynocologist'>Gynocologist</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='item-weight'
                className='block mb-2 text-sm font-medium text-gray-900  '
              >
                Item Weight (kg)
              </label>
              <input
                type='number'
                name='item-weight'
                id='item-weight'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
                placeholder={12}
                required
              />
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
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentBookingForm;
