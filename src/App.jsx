import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './containers/Home';
import Start from './components/Start';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/chrono">
          <Chrono />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
