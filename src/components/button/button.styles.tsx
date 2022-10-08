import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #0b1b2d;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #0b1b2d;
    border: 1px solid #0b1b2d;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: white;
    color: #4285f4;
    border: 1px #4285f4 solid;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #0b1b2d;
  border: 1px solid #0b1b2d;
  &:hover {
    background-color: #0b1b2d;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
