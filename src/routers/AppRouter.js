import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage'
import AddTradePage from '../components/AddTradePage'
import EditTradePage from '../components/EditTradePage'
import TradeDashboardPage from '../components/TradeDashboardPage'
import { Header } from '../components/Header'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={TradeDashboardPage} exact={true}/>
        <Route path="/dashboard" component={TradeDashboardPage}/>
        <Route path="/create" component={AddTradePage}/>
        <Route path="/edit/:id" component={EditTradePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
