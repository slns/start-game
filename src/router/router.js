'use strict'

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';

import Footer from '../components/organisms/footer';
import { listPublicRoutes, listPrivateRoutes } from './routes-list';
import NotFound from '../components/pages/not-found';

export default function Router(props) {

  return (
    <BrowserRouter >
      <Container maxWidth="md">
         <main style={{ marginBottom: '3rem'}}>
         <Switch>
              {listPublicRoutes.routes.map((route) => {
              return (
                  <Route
                    key={route.name}
                    exact={route.root}
                    path={route.path}
                    render={(props) => (<route.component {...props}/>)}
                  />
                )
              })}         
              <Route component={NotFound} />
          </Switch>
        </main>
      </Container>
      <Footer /> 
    </BrowserRouter>
  )
}
