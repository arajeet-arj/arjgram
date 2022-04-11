import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/common/Header';
import NewsFeed from './pages/NewsFeed';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <NewsFeed />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
