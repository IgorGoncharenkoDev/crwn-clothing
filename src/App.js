import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LogInPage from './pages/log-in/log-in.component';

import './styles/styles.scss';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {

    // subscription
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      // user:
      // displayName, email
      setCurrentUser(user);
    });

    // is triggered on unmount
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={ currentUser }/>
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
  )
};

export default App;
