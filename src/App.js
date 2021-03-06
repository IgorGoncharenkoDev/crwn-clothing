import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';

import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import LogInPage from './pages/log-in/log-in.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import './styles/styles.scss';

const App = ({ currentUser, checkUserSession }) => {
  // let unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();

    /*
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

      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(({ title, items }) => ({ title, items}))
      // );
    });
    */

    // is triggered on unmount
    // return () => {
    //   unsubscribeFromAuth();
    // };
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/shop" component={ ShopPage }/>
        <Route exact path="/checkout" component={ CheckoutPage }/>
        <Route exact render={ () => currentUser ? (
          <Redirect to="/"/>
        ) : (
          <LogInPage/>
        ) }/>
      </Switch>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
