import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LogInPage from './pages/log-in/log-in.component';

import './styles/styles.scss';

const App = () => (
  <div className="App">
    <Header/>
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/shop">
        <ShopPage/>
      </Route>
      <Route path="/log-in">
        <LogInPage/>
      </Route>
    </Switch>
  </div>
);

export default App;
