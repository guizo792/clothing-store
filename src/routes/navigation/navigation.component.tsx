import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as CrwnLogo } from '../../assets/crwn.svg';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutStart } from '../../store/user/user.action';

import {
  NavigationContainer,
  NavLinkContainer,
  NavLinksContainer,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
  // console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer to="/shop">SHOP</NavLinkContainer>
          {currentUser ? (
            <NavLinkContainer as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLinkContainer>
          ) : (
            <NavLinkContainer to="/auth">LOGIN</NavLinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
