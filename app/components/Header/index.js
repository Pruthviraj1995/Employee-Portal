import React from 'react';
import H1 from 'components/H1';
import { NavBarWrapper, NavBar } from './Styled';

function Header() {
  return (
    <NavBarWrapper className="w-100">
      <NavBar>
        <H1>
          <strong>Employee Portal App</strong>
        </H1>
      </NavBar>
    </NavBarWrapper>
  );
}

export default Header;
