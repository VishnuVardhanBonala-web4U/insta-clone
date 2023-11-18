// Header.js
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user}</p>
          {/* Add sign-out button or other user-related actions */}
        </div>
      ) : (
        <p>Please sign in or sign up</p>
      )}
    </div>
  );
};

export default Header;
