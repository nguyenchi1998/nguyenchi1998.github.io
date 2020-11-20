import React from 'react';
import styled from 'styled-components/macro';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import { PATHS } from 'router/paths';

const HorizontalCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  &:hover {
    text-decoration: none;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 320px;
  margin-bottom: 30px;
`;

const AuthLayout = ({ children }) => (
  <HorizontalCenter>
    <StyledLink to={PATHS.HOME_PAGE}>
      <Logo>Manager</Logo>
    </StyledLink>
    <Center>{children}</Center>
  </HorizontalCenter>
);

export default AuthLayout;
