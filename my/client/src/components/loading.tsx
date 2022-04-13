import styled, { css, keyframes } from 'styled-components';
import { colors } from '../styles/global';
import { ReactComponent as Logo } from '../assets/logo.svg';


const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loading = () => {
  return (
    <>
      <StyledLogo />
      <Caption>loading</Caption>
    </>
  )
}

const Caption = styled.a`
  text-align: center;
  font-size: 1.5em;
  color: ${colors.text};
`

const StyledLogo = styled(Logo)`
  animation: ${rotate} infinite 20s linear;
  height: 10rem;
  width: 10rem;
  display: inline-block;
  margin: auto;
`;

export default Loading;
