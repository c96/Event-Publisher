import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import EventPublish from './EventPublish';
import Dashboard from './Dashboard';

// Renders other components
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/eventpublish' component={EventPublish}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  </main>
);

export default Main;
