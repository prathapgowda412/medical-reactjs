import toast, { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { AdminAuthProvider } from './contexts/auth/adminAuth';
import { AuthProvider, useAuth } from './contexts/auth/authContext';
import { Router } from './router';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AdminAuthProvider>
            <Toaster />
            <Router />
          </AdminAuthProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
