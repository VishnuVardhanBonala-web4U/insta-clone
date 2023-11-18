// AuthForm.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from './authSlice';

const AuthForm = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn('JohnDoe')); // Simulate user sign-in
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default AuthForm;
