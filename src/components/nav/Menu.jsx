import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";
import Burger from './Burger';

const Nav = styled.nav`
  background-color: ${p => p.theme.colors.primaryRed};
  width: 100%;
  // border-bottom: 2px solid #f1f1f1;
  box-shadow: 0 4px 2px -2px #bababa;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
`;

const Logo = styled(Link)`
  color: ${p => p.theme.colors.primaryWhite};
  padding: 1rem 1.5rem;
  font-weight: ${p => p.theme.h1.fontWeight};
  font-size: ${p => p.theme.h2.size};
  text-decoration: none;
`;
 
const Menu = () => {
  return (
    <Nav>
      <Logo to="/">
      ANDIterate
      </Logo>
      <Burger />
    </Nav>
  )
}

export default withRouter(Menu);
