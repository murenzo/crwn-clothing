import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop-page.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // this.setState({ currentUser: user });

      // console.log(user);
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
