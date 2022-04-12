import styled, { css, keyframes } from 'styled-components';
import { size } from 'polished';
import { colors } from '../styles/global';
import { ReactComponent as Logo } from '../assets/logo.svg';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fade = ({primaryColor, secondaryColor}: {primaryColor:any, secondaryColor:any}) => keyframes`
  0% {
    fill:${primaryColor};
  }
  50% {
    fill:${secondaryColor};
  }
  100%{
    fill:${primaryColor};
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
    transform-origin: center;
  }
  100% {
    transform: scale(4.5);
    opacity: 0;
    transform-origin: center;
  }
`;

const animation = (props: any) =>
  css`
    ${rotate} 1s linear infinite;
  `


const Loading = () => {
  return (
    <Container>
      <StyledLogo/>
      <Caption>loading</Caption>
    </Container>  
  )
}
const Container = styled.div`
  vertical-align: top;
  display: inline-block;
  text-align: center;
  width: 10rem;
`

const Caption = styled.a`
  display: 'block'
`

const StyledLogo = styled(Logo)`
  animation: ${rotate} infinite 20s linear;
  height: 10rem;
  width: 10rem;
  display: inline-block;
  margin: auto;
  .lines {
    animation: ${props => fade({
      primaryColor: colors.primary, 
      secondaryColor: colors.secondary
    })}
      infinite 8s linear;
  }
  .circle {
    animation: ${pulse} infinite 4s linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  }
`;

export default Loading;
