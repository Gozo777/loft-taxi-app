import React, { useContext } from 'react';
import { AuthProvider, withAuth } from './AuthContext';
import LoginForm from './LoginForm';

export const Profile = () => {
  const { isLoggedIn } = useContext(AuthProvider);
  
  if (!isLoggedIn) return <LoginForm />;

  console.log(isLoggedIn)
  return (
    <div>
      Profile
    </div>
  )
}

export default Profile;