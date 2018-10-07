import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import '../App.css';
const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
    <Route path="/" component={Dashboard} exact={true}/>
    </Switch>
  </div>
  
  </BrowserRouter>
)
export default AppRouter;