import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/ROUTES';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../contexts/auth/authContext';

const bloodgroups = [
  { id: 1, value: 'A+' },
  { id: 2, value: 'A-' },
  { id: 3, value: 'B+' },
  { id: 4, value: 'B-' },
  { id: 5, value: 'O+' },
  { id: 6, value: 'O-' },
  { id: 7, value: 'AB+' },
  { id: 8, value: 'AB-' },
];

const SignUpForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const { patientRegister, isAuthorized } = useAuth();
  if (isAuthorized) return <Navigate to={ROUTES.HOMEPAGE} />;

  return (
    <section className='bg-gray-50'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Sign Up
            </h1>
            <form
              onSubmit={handleSubmit(patientRegister)}
              className='space-y-4 md:space-y-6'
              action='#'
            >
              <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                <div className='col-span-2  '>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    {...register('name', { required: true })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    placeholder='full name'
                    required
                  />
                </div>
                <div className='col-span-2  '>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Mobile
                  </label>
                  {/* <input type={''} /> */}
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    {...register('phone', {
                      required: true,
                    })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    placeholder='phone'
                    required
                  />
                </div>
                <div className='col-span-2  '>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    {...register('email', { required: true })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='category'
                    className='block mb-2 text-sm font-medium text-gray-900  '
                  >
                    Blood Group
                  </label>
                  <select
                    placeholder='Select blood group'
                    {...register('bloodgroup', { required: true })}
                    id='category'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   '
                  >
                    {/* <option selected>Select Blood Group</option> */}
                    {bloodgroups.map((val) => (
                      <option
                        key={'bloog-group' + val + val.id}
                        value={val.value}
                      >
                        {val.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='date'
                    className='block mb-2 text-sm font-medium text-gray-900  '
                  >
                    DOB
                  </label>
                  <input
                    name='dob'
                    id='dob'
                    type={'date'}
                    {...register('dob', { required: true })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                  />
                </div>
                <div>
                  <label
                    htmlFor='item-weight'
                    className='block mb-2 text-sm font-medium text-gray-900  '
                  >
                    Weight (kg)
                  </label>
                  <input
                    type='weight'
                    name='weight'
                    id='weight'
                    {...register('weight', { required: true })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
                    placeholder={''}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='item-weight'
                    className='block mb-2 text-sm font-medium text-gray-900  '
                  >
                    Height (cm)
                  </label>
                  <input
                    type='number'
                    name='height'
                    id='height'
                    {...register('height', { required: true })}
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   '
                    placeholder={''}
                    required
                  />
                </div>
                <div className='col-span-2'>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    {...register('password', { required: true })}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    required
                  />
                </div>

                <div className='w-full col-span-2'>
                  <button
                    type='submit'
                    className='w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Sign Up
                  </button>
                </div>

                <div className='w-full col-span-2'>
                  <p className='text-sm font-light text-gray-500'>
                    Already have an account ?{' '}
                    <Link
                      to={ROUTES.SIGNIN}
                      className='font-medium text-primary-600 hover:underline'
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
