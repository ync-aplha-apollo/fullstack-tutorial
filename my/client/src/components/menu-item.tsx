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
  cursor: 'pointer',
`;

const MenuItem = styled(Link)(menuItemClassName, {
  textAlign: 'center',
  textDecoration: 'none',
  color: `${colors.secondary}`,
  svg: {
    display: 'block',
    width: 60,
    ':hover': {
      backgroundColor: lighten(0.1, colors.accent),
    },
    ':active': {
      backgroundColor: lighten(0.2, colors.secondary),
    },  
  },
  margin: `0 auto ${unit}px`,
  fill: `${colors.secondary}`,
});

export default MenuItem;
