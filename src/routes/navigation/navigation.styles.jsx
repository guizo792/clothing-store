import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: fixed;
  padding: 40px;
  background-color: #cfdae6;
  padding-top: 20px;
  z-index: 9;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 0;
`;

export const NavLinksContainer = styled.div`
  padding-top: 20px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLinkContainer = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
