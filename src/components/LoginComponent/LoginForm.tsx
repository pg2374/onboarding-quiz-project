import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  background-color: #abdbe3; /* Set the background color for the entire page */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  text-align: center;
  background-color: #abdbe3; /* Change the background color */
`;

const InputContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px; /* Add some space between label and input */
  }

  input {
    width: 100%;
    padding: 12px 20px; /* Enlarge the input fields */
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Increase the space between buttons */
`;

const Button = styled.button`
  padding: 10px 15px; /* Reduce the button size */
  background-color: #ffcc80; /* Light Orange */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0074cc; /* Blue */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.span`
  margin-top: 10px;
  text-align: center;
  color: #0074cc;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

interface LoginFormProps {
  username: string;
  password: string;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onSignup: () => void;
  onForgotPassword: () => void;
  isLoading: boolean;
}

function LoginForm(props: LoginFormProps) {
  return (
    <PageContainer>
      <LoginFormContainer>
        <Form>
          <InputContainer>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              value={props.username}
              onChange={props.onUsernameChange}
              id="username"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={props.password}
              onChange={props.onPasswordChange}
              id="password"
            />
          </InputContainer>
          <ButtonContainer>
            <Button type="button" name="login" onClick={props.onSubmit}>
              Login
            </Button>
            <Button type="button" name="signup" onClick={props.onSignup}>
              Signup
            </Button>
          </ButtonContainer>
          <Link onClick={props.onForgotPassword}>Forgot password?</Link>
        </Form>
      </LoginFormContainer>
    </PageContainer>
  );
}

export default LoginForm;
