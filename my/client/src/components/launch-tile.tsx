import React from 'react';
import styled, {css} from "styled-components"
import { Link } from '@reach/router';
import { unit } from '../styles/global';
import * as LaunchTileTypes from '../pages/__generated__/LaunchTile';

const galaxy = require('../assets/images/galaxy.jpg');
const iss = require('../assets/images/iss.jpg');
const moon = require('../assets/images/moon.jpg');

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
    <Link
      to={`/launch/${id}`}
      style={{
        backgroundImage: getBackgroundImage(id),
      }}
    >
      <h3>{mission ? mission.name : ''}</h3>
      <h5>{rocket && rocket.name}</h5>
    </Link>
  );
}

export default LaunchTile;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

export const cardClassName = css`
`;

const padding = unit * 2;
const StyledLink = styled(Link)`
    padding: ${({unit}: {unit: number}) => unit ? unit*4 : 4 }px ${({unit}: {unit: number}) => unit ? unit*5 : 5 }px,
    borderRadius: 7,
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'block',
    height: 193,
    marginTop: padding,
    textDecoration: 'none',
    ':not(:last-child)': {
    marginBottom: padding * 2,
Å`;
