import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import HeroSection from './components/home-components/hero-section/hero-section';
import Layout from './components/layout/layout';
import ProfileLayout from './components/profile/profileLayout';
import SigninForm from './components/signin/signin-form';
import AboutUs from './pages/about-us/about-us';
import AppointmentPage from './pages/booking/appointmentPage';
import ContactusPage from './pages/contactus/contactus';
import HomePage from './pages/home/home';
import ProfilePage from './pages/profile';
import SignInPage from './pages/signin/signIn';
import SignupPage from './pages/signup/signup';
import { ROUTES } from './utils/ROUTES';
import BookingsPage from './pages/profile/bookingsPage';
import ProfileDetailsPage from './pages/profile/profileDetails';
import { useAuth } from './contexts/auth/authContext';
import ADminBookingsPage from './pages/admin/bookings';
import AdminPatientsPage from './pages/admin/patients';
import AdminLayout from './components/admin-components/layout/admin-layout';

export function Router() {
  const { isAuthorized } = useAuth();
  let routes = useRoutes([
    { path: ROUTES.ABOUTUS, element: <AboutUs /> },
    { path: ROUTES.SIGNIN, element: <SignInPage /> },

    { path: ROUTES.HOMEPAGE, element: <HomePage /> },
    { path: ROUTES.SIGNUP, element: <SignupPage /> },
    { path: ROUTES.CONTACTUS, element: <ContactusPage /> },
    {
      path: ROUTES.PROFILE,
      // element: <ProfilePage />,

      children: [
        {
          path: ROUTES.PROFILE_DETAILS,
          element: (
            <ProfileLayout>
              <ProfileDetailsPage />,
            </ProfileLayout>
          ),
        },
        {
          path: ROUTES.PROFILE_BOOKINGS,
          element: (
            <ProfileLayout>
              <BookingsPage />
            </ProfileLayout>
          ),
        },
      ],
    },
    { path: ROUTES.APPOINTMENT, element: <AppointmentPage /> },
    {
      path: '/admin',
      children: [
        {
          path: ROUTES.ADMIN_BOOKINGS,
          element: (
            <AdminLayout>
              <ADminBookingsPage />
            </AdminLayout>
          ),
        },
        {
          path: ROUTES.ADMIN_PATIENTS,
          element: (
            <AdminLayout>
              <AdminPatientsPage />
            </AdminLayout>
          ),
        },
      ],
    },
  ]);
  return routes;
}
