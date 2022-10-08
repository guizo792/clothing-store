import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #cfdae6dd;
  position: fixed;
  z-index: 99;
  padding: 0 52px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinksContainer = styled.div`
  padding-top: 20px;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`;

export const NavLinkContainer = styled(Link)`
  padding: 6px 12px;
  cursor: pointer;
  border: 1px dashed #0b1b2d;
  border-radius: 5px;

  &:hover {
    background-color: #bbcadd;
  }
`;