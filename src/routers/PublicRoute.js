import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    <div>
      <Header />
      <Component {...props} />
    </div>
  )}/>
);
