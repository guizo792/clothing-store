import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  // background-color: #cfdae6dd;
  background-color: #ffffffcc;
  position: fixed;
  top: 0;
  z-index: 99;
  padding: 20px 50px 64px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  // padding: 25px;
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
  @media (max-width: 558px) {
    padding: 2px 0px;
    border: none;
  }

  @media (max-width: 553px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #0066ff23;

    @media (min-width: 406px) {
      color: #0066ff;
      border: 1px dashed #0066ffaa;
    }
  }
`;
