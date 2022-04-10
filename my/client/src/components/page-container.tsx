import React, { Fragment } from 'react';
import styled from "styled-components"
import { Link } from '@reach/router';

const PageContainer:React.FC = ({children}) => {
    return (
        <Fragment>
            page-container
            <Bar colors='red'/>
            <Container unit={2}>{children}</Container>
        </Fragment>
    )
}        

const menuItemClassName = styled.div`
  flexGrow: 1,
  width: 0,
  fontFamily: 'inherit',
  fontSize: 20,
  color: 'inherit',
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  textAlign: 'center',
  svg: {
    display: 'block',
    width: 60,
    margin: 0 auto ${({unit}: {unit: number}) => unit ? unit : 2 } px,
    fill: colors.secondary,
  },
`;

const MenuItem = styled(Link)(menuItemClassName, {
  textDecoration: 'none',
});

const Bar = styled.div`
  flexShrink: 0,
  height: 12,
  backgroundColor: ${({colors}: {colors: string}) => colors ? colors : 'black' }.primary,
`

const Container = styled.div`
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: ${({unit}: {unit: number}) => unit ? unit : 1 } * 3,
  paddingBottom: unit * 5,
`;

export default PageContainer

