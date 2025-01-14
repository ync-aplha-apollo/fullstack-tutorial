import React from 'react';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/client';
import { lighten } from 'polished';

import { menuItemClassName } from '../components/menu-item';
import { isLoggedInVar } from '../cache';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';
import { colors, unit } from '../styles/global';

const LogoutButton = () => {
  const client = useApolloClient();
  return (
    <StyledButton
      data-testid="logout-button"
      onClick={() => {
        // Since we're logging out, remove all traces of the current user
        // from the cache. First use `cache.evict()` to remove the stored
        // `me` reference that was added to the cache by the `GET_MY_TRIPS`
        // query in `profile.tsx`. Then trigger garbage collection using
        // `cache.gc()` to remove the cached `User` object that is no longer
        // reachable.
        client.cache.evict({ fieldName: 'me' });
        client.cache.gc();

        // Remove user details from localStorage.
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        // Let other parts of the application that are relying on logged in
        // state know we're now logged out.
        isLoggedInVar(false);
      }}
    >
      <ExitIcon />
      Logout
    </StyledButton>
  );
}

export default LogoutButton;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const StyledButton = styled('button')(menuItemClassName, {
  background: 'none',
  border: 'none',
  padding: 0,
  margin: `0 auto ${unit}px`,
  color: `${colors.secondary}`,
  cursor: 'pointer',
  svg: {
    display: 'block',
    width: 60,
    ':hover': {
      backgroundColor: lighten(0.1, colors.accent),
    },
    ':active': {
      backgroundColor: lighten(0.2, colors.secondary),
    },  
    fill: `${colors.secondary}`,
  },
});
