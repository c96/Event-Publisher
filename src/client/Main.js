import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import CreateEvent from './routes/CreateEvent';
import Dashboard from './routes/Dashboard';
import Uploader from './routes/Uploader';
import SignIn from './routes/SignIn';

// Renders other components
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/create-event' component={CreateEvent}/>
      <Route path='/upload-video' component={Uploader}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  </main>
);

export default Main;
