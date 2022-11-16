import './App.css';
import { AuthProvider, useAuth } from './contexts/auth/authContext';
import { Router } from './router';

function App() {
  const { isAuthorized, token, user } = useAuth();

  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
