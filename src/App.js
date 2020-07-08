import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LogInPage from './pages/log-in/log-in.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import './styles/styles.scss';

const App = ({ currentUser, setCurrentUser }) => {
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
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/shop">
          <ShopPage/>
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage/>
        </Route>
        <Route exact render={ () => currentUser ? (
          <Redirect to="/"/>
        ) : (
          <LogInPage/>
        ) }/>
      </Switch>c
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userObject => dispatch(setCurrentUser(userObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
