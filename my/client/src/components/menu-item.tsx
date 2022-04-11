import styled from 'styled-components';
import { Link } from '@reach/router';
import { colors, unit } from '../styles/global';

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
  svg: {
    display: 'block',
    width: 60,
  },
  margin: `0 auto ${unit}px`,
  fill: `${colors.secondary}`,
});

export default MenuItem;
