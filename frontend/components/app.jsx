import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogInForm from './login';
import JokesIndex from './jokes_index';

const App = () => {
  return (
    <section>
      <Route exact path='/' component={JokesIndex} />
      <Route path='/login' component={LogInForm} />
    </section>
  );
};

export default App;
