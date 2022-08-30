import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as CrwnLogo } from '../../assets/crwn.svg';

import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinkContainer,
  NavLinksContainer,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const isCartOpen = useSelector((state) => state.cart.isCartOpen);

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
            <NavLinkContainer to="/auth">SIGN IN</NavLinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        {/* {isCartOpen && <CartDropdown />} */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
