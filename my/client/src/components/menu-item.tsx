import styled from 'styled-components';
import { Link } from '@reach/router';
import { colors, unit } from '../styles/global';
import { lighten } from 'polished';

export const menuItemClassName = styled.style`
  flexGrow: 1,
  width: 0,
  fontFamily: 'inherit',
  fontSize: 20,
  color: 'inherit',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  textAlign: 'center',
`;

const MenuItem = styled(Link)(menuItemClassName, {
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  svg: {
    display: 'block',
    width: 60,
  },
  margin: `0 auto ${unit}px`,
  fill: `${colors.secondary}`,
  ':hover': {
    fill: lighten(0.1, colors.accent),
    color: lighten(0.1, colors.accent),
  },
  ':active': {
    color: lighten(0.2, colors.accent),
  },
});

export default MenuItem;
