import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import ProfileLayout from './components/profile/profileLayout';
import AboutUs from './pages/about-us/about-us';
import AppointmentPage from './pages/booking/appointmentPage';
import HomePage from './pages/home/home';
import SignInPage from './pages/signin/signIn';
import SignupPage from './pages/signup/signup';
import { ROUTES } from './utils/ROUTES';
import BookingsPage from './pages/profile/bookingsPage';
import ProfileDetailsPage from './pages/profile/profileDetails';
import ADminBookingsPage from './pages/admin/bookings';
import AdminPatientsPage from './pages/admin/patients';
import AdminLayout from './components/admin-components/layout/admin-layout';
import AdminLoginPage from './pages/admin/admin-login';

export function Router() {
  let routes = useRoutes([
    { path: ROUTES.ABOUTUS, element: <AboutUs /> },
    { path: ROUTES.SIGNIN, element: <SignInPage /> },

    { path: ROUTES.HOMEPAGE, element: <HomePage /> },
    { path: ROUTES.SIGNUP, element: <SignupPage /> },
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
        {
          path: ROUTES.ADMIN_LOGIN,
          element: <AdminLoginPage />,
        },
      ],
    },
  ]);
  return routes;
}
