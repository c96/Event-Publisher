import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import CreateEvent from './routes/CreateEvent';
import Dashboard from './routes/Dashboard';
import UploadVideo from './routes/UploadVideo';

// Renders other components
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/create-event' component={CreateEvent}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/upload-video' component={UploadVideo}/>
    </Switch>
  </main>
);

export default Main;
