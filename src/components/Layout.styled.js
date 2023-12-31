import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const NavHeader = styled.nav`
  margin-bottom: 30px;
`;

export const NavLinkItem = styled(NavLink)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  border-radius: 4px;

  &.active {
    color: #fff;
   
    background: #b38df9;
  }
`;
