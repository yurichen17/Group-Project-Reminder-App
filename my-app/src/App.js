import logo from './logo.svg';
import './App.css';
import LoginButton from './Login.js';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';

function App() {
  console.log(useAuth0());
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <Dashboard></Dashboard>
      </div>
    );
  } else {
    return <LoginButton></LoginButton>;
  }
}

export default App;
