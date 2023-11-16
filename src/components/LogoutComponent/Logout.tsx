// Logout.tsx
import React from 'react';
import styled from 'styled-components';
import LogoutComponent from './LogoutComponent';

const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

function Logout() {
  const handleLogout = () => {
    // Perform the logout action, e.g., clear user data, invalidate tokens, etc.
    // Then, navigate to the login page
    window.location.href = '/login'; // Use window.location.href for navigation
  };

  return (
    <LogoutContainer>
      <Logo>Logout</Logo>
      <LogoutComponent
        onLogout={handleLogout}
        buttonLabel="Go back to Login"
      />
    </LogoutContainer>
  );
}

export default Logout;
