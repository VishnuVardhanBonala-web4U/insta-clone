// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <Typography variant="h6">Welcome, {user}</Typography>
          {/* Add sign-out button or other user-related actions */}
        </div>
      ) : (
        <Typography variant="h6" style={{textAlign:'center'}}>Please sign in or sign up</Typography>
      )}
    </div>
  );
};

export default Header;
