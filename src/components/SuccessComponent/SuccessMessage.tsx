import React from 'react';
import styled from 'styled-components';

const SuccessMessageContainer = styled.div`
  text-align: center;
`;

function SuccessMessage() {
  return (
    <SuccessMessageContainer>
      <div className="SuccessMessage">Authentication Successful</div>
    </SuccessMessageContainer>
  );
}

export default SuccessMessage;
