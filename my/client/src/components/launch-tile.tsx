import React from 'react';
import styled, {css} from "styled-components"
import { Link } from '@reach/router';
import { unit } from '../styles/global';
import * as LaunchTileTypes from '../pages/__generated__/LaunchTile';

import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';

// const galaxy = require('../assets/images/galaxy.jpg');
// const iss = require('../assets/images/iss.jpg');
// const moon = require('../assets/images/moon.jpg');

const backgrounds = [galaxy, iss, moon];
export function getBackgroundImage(id: string) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

interface LaunchTileProps {
  launch: LaunchTileTypes.LaunchTile;
}

const LaunchTile: React.FC<LaunchTileProps> = ({ launch }) => {
  const { id, mission, rocket } = launch;
  return (
    <StyledLink
      to={`/launch/${id}`}
      style={{
        backgroundImage: getBackgroundImage(id as string),
      }}
    >
      <h3>{id}. {mission ? mission.name : ''}</h3>
      <h5>{rocket && rocket.name}</h5>
    </StyledLink>
  );
}

export default LaunchTile;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */
 export const cardClassName = styled.style`
  padding: ${unit * 4}px ${unit * 5}px,
  borderRadius: 7,
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
`;

const padding = unit * 2;
const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  height: 193,
  marginTop: padding,
  textAlign: 'center',
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
});
