import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SuccessMessage from '../SuccessComponent/SuccessMessage';
import ErrorMessage from '../ErrorComponent/ErrorMessage';
import styled from 'styled-components';
import { auth } from '../Security/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserCredential } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

export default function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (!username || !password) {
      setShowErrorMessage(true);
      return;
    }

    setIsLoading(true);

    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential: UserCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log('Authentication successful');
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
        setIsLoading(false);
        navigate(`/welcome/${user.displayName}`);
      })
      .catch((error: FirebaseError) => {
        // Handle authentication error
        console.error('Authentication failed', error.message);
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
        setIsLoading(false);
      });
  }

  function handleSignup() {
    navigate('/signup');
  }

  function handleForgotPassword() {
    navigate('/error');
  }

  return (
    <PageContainer>
      <ContentContainer>
        <LoginForm
          username={username}
          password={password}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
          onSubmit={handleSubmit}
          onSignup={handleSignup}
          onForgotPassword={handleForgotPassword}
          isLoading={isLoading}
        />
        {showSuccessMessage && <SuccessMessage />}
        {showErrorMessage && <ErrorMessage />}
      </ContentContainer>
      <Footer>This is your footer content.</Footer>
    </PageContainer>
  );
}
