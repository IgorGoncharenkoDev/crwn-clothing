import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LogInPage from './pages/log-in/log-in.component';

import './styles/styles.scss';

const App = ({ setCurrentUser }) => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    // subscription
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObject => {
      // user data: displayName, email
      if (userAuthObject) {
        const userRef = await createUserProfileDocument(userAuthObject);

        // listening to any changes to the data (by userRef)
        // 'snapshot' - is the first state of the data
        await userRef.onSnapshot(snapshot => {
          // setting state of our local App with the snapshot id and the snapshot data
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      else {
        // if a user logs out we set 'current user' to null
        setCurrentUser(userAuthObject);
      }
    });

    // is triggered on unmount
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
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
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userObject => dispatch(setCurrentUser(userObject))
});

export default connect(null, mapDispatchToProps)(App);
