import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminServices from '../../services/apis/admin.services';
import { setAdminAuthToken } from '../../services/httpService';
import { ROUTES } from '../../utils/ROUTES';
import LocalstorageService from '../../utils/storage/localstorage';
// import { useHistory } from 'react-router-dom';
const initialState = {
  isAdminAuthorized: false,
  admin: null,
  adminToken: null,
  isAdmin: false,
};

export const AdminAuthContext = React.createContext(initialState);

export const AdminAuthProvider = ({ children }) => {
  let navigate = useNavigate();

  const [admin, setAdmin] = useState(
    LocalstorageService.getAdmintdata() ?? null
  );
  const [adminToken, setAdminToken] = useState(
    LocalstorageService.getAdminToken() ?? null
  );
  const [isAdminAuthorized, setIsAdminAuthorized] = useState(
    LocalstorageService.getAdminToken() ?? false
  );

  useEffect(() => {}, []);

  const adminLogout = useCallback(() => {
    LocalstorageService.removeAdminData();
    setAdmin(null);
    setAdminToken(null);
    setIsAdminAuthorized(false);
    navigate(ROUTES.HOMEPAGE);
  }, [navigate]);

  const adminLogin = useCallback(
    (data) => {
      AdminServices.login(data)
        .then(({ data }) => {
          if (data?.success) {
            toast.success('Logged In Successfull');
            setAdmin(data?.data?.adminData);
            setAdminToken(data?.data?.token);
            setIsAdminAuthorized(true);
            LocalstorageService.storeAdmindata(data?.data?.adminData);
            LocalstorageService.storeAdminToken(data?.data?.token);
            setAdminAuthToken(data?.data?.token);
            navigate(ROUTES.ADMIN_BOOKINGS);
          }
        })
        .catch((error) => {
          console.error('error', error);
          toast.error('something went wrong');
        });
    },
    [navigate]
  );

  const adminRegister = useCallback(
    (data) => {
      AdminServices.register(data)
        .then(({ data }) => {
          if (data.success) {
            toast.success('Registered Successfull');
            setAdmin(data?.data?.adminData);
            setAdminToken(data?.data?.token);
            setIsAdminAuthorized(true);
            LocalstorageService.storeAdmintdata(data?.data?.adminData);
            LocalstorageService.storeAdminToken(data?.data?.token);

            navigate(ROUTES.ADMIN_BOOKINGS);
          }
        })
        .catch((error) => {
          console.error('error', error);
        });
    },
    [navigate]
  );

  const value = React.useMemo(
    () => ({
      admin,
      isAdminAuthorized,
      adminLogin,
      adminRegister,
      adminLogout,
    }),
    [admin, isAdminAuthorized, adminRegister, adminLogin, adminLogout]
  );
  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = React.useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error(`useAdminAuth must be used within a AdminAuthProvider`);
  }
  return context;
};
