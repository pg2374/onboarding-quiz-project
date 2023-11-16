import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

export const FooterComponent: React.FC = () => {
  return (
    <PageWrapper>
      <Content>
        {/* Your main content goes here */}
      </Content>
      <FooterContainer>
        <div className="container">Your content here</div>
        <hr />©️PiyushGautam
      </FooterContainer>
    </PageWrapper>
  );
};
