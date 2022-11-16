import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PatientService from '../../services/apis/patient.services';
import { ROUTES } from '../../utils/ROUTES';
import LocalstorageService from '../../utils/storage/localstorage';
// import { useHistory } from 'react-router-dom';
const initialState = {
  isAuthorized: true,
  user: null,
  token: null,
};

export const AuthContext = React.createContext(initialState);

export const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  let userData;
  let authToken;

  const patientLogin = (data) => {
    console.log('user data', data);
  };

  const patientRegister = (data) => {
    console.log('patient data', data);
    // toast('success');
    PatientService.register(data)
      .then(({ data }) => {
        console.log('resp data', data);
        if (data.success) {
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
  };

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
      userData,
      authToken,
    }),
    [user, isAuthorized, userData, authToken]
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
