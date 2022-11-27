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
  user: 'null',
  token: null,
};

export const AuthContext = React.createContext(initialState);

export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState(
    LocalstorageService.getPatientdata() ?? null
  );
  const [userToken, setUserToken] = useState(
    LocalstorageService.getPatientToken() ?? null
  );
  const [isAuthorized, setIsAuthorized] = useState(
    LocalstorageService.getPatientToken() ?? false
  );

  useEffect(() => {}, []);

  const patientLogout = useCallback(() => {
    LocalstorageService.removePatientData();
    setUser(null);
    setUserToken(null);
    setIsAuthorized(false);
    navigate(ROUTES.HOMEPAGE);
    window.location.reload();
  }, [navigate]);

  const patientLogin = useCallback(
    (data) => {
      PatientService.login(data)
        .then(({ data }) => {
          if (data?.success) {
            toast.success('Logged In Successfull');
            setUser(data?.data?.patientData);
            setUserToken(data?.data?.token);
            setIsAuthorized(true);
            LocalstorageService.storePatientdata(data?.data?.patientData);
            LocalstorageService.storePatientToken(data?.data?.token);
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
            setUser(data?.data?.patientData);
            setUserToken(data?.data?.token);
            setIsAuthorized(true);
            LocalstorageService.storePatientdata(data?.data?.patientData);
            LocalstorageService.storePatientToken(data?.data?.token);

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
      user,
      isAuthorized,
      patientLogin,
      patientRegister,
      patientLogout,
    }),
    [user, isAuthorized, patientRegister, patientLogin, patientLogout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};
