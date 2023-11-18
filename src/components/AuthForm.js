// AuthForm.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../features/auth/authSlice';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const AuthForm = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signIn('JohnDoe')); // Simulate user sign-in
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Card>
      <CardContent  style={{marginLeft:'40%'}}>
        <Button variant="contained" color="primary" onClick={handleSignIn}  style={{margin:'1rem'}}>
          Sign In
        </Button>
        <Button variant="contained" color="secondary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
