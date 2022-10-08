import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 36px;
  height: 36px;

  @media (max-width: 553px) {
    width: 24px;
    height: 24px;
  }
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // transition: scale 10ms ease-out;

  // &:hover {
  //   scale: 1.1;
  // }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  bottom: 5px;
  color: #0066ff;

  @media (max-width: 553px) {
    font-size: 16px;
    bottom: 8px;
  }
`;
