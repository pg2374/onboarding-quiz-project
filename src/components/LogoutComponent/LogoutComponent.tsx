// LogoutComponent.tsx
import React from 'react';
import styled from 'styled-components';

interface LogoutComponentProps {
  onLogout: () => void;
  buttonLabel?: string;
}

const LogoutWrapper = styled.div`
  text-align: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const LogoutButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const LogoutComponent: React.FC<LogoutComponentProps> = ({ onLogout, buttonLabel }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <LogoutWrapper>
      <h2>You have been logged out</h2>
      {buttonLabel && (
        <LogoutButton onClick={handleLogout}>{buttonLabel}</LogoutButton>
      )}
    </LogoutWrapper>
  );
};

export default LogoutComponent;
