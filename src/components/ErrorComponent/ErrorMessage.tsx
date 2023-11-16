import React from 'react';
import styled from 'styled-components';

const ErrorMessageContainer = styled.div`
  text-align: center;
`;

function ErrorMessage() {
  return (
    <ErrorMessageContainer>
      <div className="ErrorMessage">Authentication Failed!!! Please Enter Valid Credentials</div>
    </ErrorMessageContainer>
  );
}

export default ErrorMessage;