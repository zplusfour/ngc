import React from "react";
import ButtonsContainer from './components/ButtonsContainer';
import JoinClass from './components/JoinClass';
import Class, { CreateClass } from './components/Class';
import RouteError from './components/Error';
import HomePage from './components/Homepage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/demo">
          <ButtonsContainer />
        </Route>
        <Route exact path="/class/join">
          <JoinClass />
        </Route>
        <Route exact path="/class/join/:id">
          <Class />
        </Route>
        <Route exact path="/class/create">
          <CreateClass />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route component={RouteError}></Route>
      </Switch>
    </Router>
  )
};

export default App;