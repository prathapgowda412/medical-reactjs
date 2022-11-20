import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PatientService from '../../services/apis/patient.services';
import { setAuthToken } from '../../services/httpService';
import { ROUTES } from '../../utils/ROUTES';
import LocalstorageService from '../../utils/storage/localstorage';
// import { useHistory } from 'react-router-dom';
const initialState = {
  isAuthorized: true,
  user: null,
  adminToken: null,
  isAdmin: false,
};

export const AdminAuthContext = React.createContext(initialState);

export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

  const [admin, setAdmin] = useState(
    LocalstorageService.getPatientdata() ?? null
  );
  const [adminToken, setAdminToken] = useState(
    LocalstorageService.getPatientToken() ?? null
  );
  const [isAuthorized, setIsAuthorized] = useState(
    LocalstorageService.getPatientToken() ?? false
  );

  useEffect(() => {}, []);

  const patientLogout = useCallback(() => {
    LocalstorageService.removePatientData();
    setAdmin(null);
    setAdminToken(null);
    setIsAuthorized(false);
    navigate(ROUTES.HOMEPAGE);
  }, [navigate]);

  const patientLogin = useCallback(
    (data) => {
      PatientService.login(data)
        .then(({ data }) => {
          if (data?.success) {
            toast.success('Logged In Successfull');
            setAdmin(data?.data?.patientData);
            setAdminToken(data?.data?.token);
            setIsAuthorized(true);
            LocalstorageService.storeAdmindata(data?.data?.patientData);
            LocalstorageService.storeAdminToken(data?.data?.token);
            setAuthToken(data?.data?.token);
            navigate(ROUTES.HOMEPAGE);
          }
        })
        .catch((error) => {
          console.error('error', error);
          toast.error('something went wrong');
        });
    },
    [navigate]
  );

  const patientRegister = useCallback(
    (data) => {
      PatientService.register(data)
        .then(({ data }) => {
          if (data.success) {
            toast.success('Registered Successfull');
            setAdmin(data?.data?.patientData);
            setAdminToken(data?.data?.token);
            setIsAuthorized(true);
            LocalstorageService.storeAdmintdata(data?.data?.patientData);
            LocalstorageService.storeAdminToken(data?.data?.token);

            navigate(ROUTES.HOMEPAGE);
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
      isAuthorized,
      patientLogin,
      patientRegister,
      patientLogout,
    }),
    [admin, isAuthorized, patientRegister, patientLogin, patientLogout]
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
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};
