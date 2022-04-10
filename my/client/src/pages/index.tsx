import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import GlobalStyle from "../styles/global";
import {PageContainer} from '../components'
import Launches from './launches'

const Pages: React.FC = () => {
  return (
    <>
        <GlobalStyle />
        <PageContainer>
        <Router primary={false} component={Fragment}>
          <Launches path="/" />
        </Router>
      </PageContainer>
    </>
  )
}

export default Pages;
