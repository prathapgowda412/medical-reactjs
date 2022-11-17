import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PatientService from '../../services/apis/patient.services';
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

  const patientLogin = useCallback((data) => {
    console.log('loginu ser data', data);
    PatientService.login(data)
      .then(({ data }) => {
        console.log('resp data', data);
        if (data?.success) {
          toast.success('Logged In Successfull');
          setUser(data?.data?.patientData);
          setUserToken(data?.data?.token);
          setIsAuthorized(true);
          LocalstorageService.storePatientdata(data?.data?.patientData);
          LocalstorageService.storePatientToken(data?.data?.token);

          navigate(ROUTES.HOMEPAGE);
        }
      })
      .catch((error) => {
        console.log('error', error);
        toast.error('something went wrong');
      });
  }, []);

  const patientRegister = useCallback(
    (data) => {
      console.log('patient data', data);
      // toast('success');
      PatientService.register(data)
        .then(({ data }) => {
          console.log('resp data', data);
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
          console.log('error', error);
        });
    },
    [navigate]
  );
  // let value = {
  //   user,
  //   setUser,
  //   patientLogin,
  //   patientRegister,
  //   userToken,
  //   setUser,
  // };

  const value = React.useMemo(
    () => ({
      user,
      isAuthorized,
      patientLogin,
      patientRegister,
    }),
    [user, isAuthorized, patientRegister, patientLogin]
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
