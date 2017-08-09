import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogInForm from './loginContainer';
import JokesIndex from './jokes_index';
import { ProtectedRoute } from '../util/route';
const App = () => {
  return (
    <section>
      <ProtectedRoute exact path='/' component={JokesIndex} />
      <Route path='/login' component={LogInForm} />
    </section>
  );
};

export default App;
