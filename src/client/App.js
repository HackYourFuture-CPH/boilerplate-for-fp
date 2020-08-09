import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './containers/Home/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import PrivateRoute from './components/Auth/PrivateRoute';
import { useAuth } from './hooks/useAuth';
import Header from './components/Navigation/Header';
import Profile from './containers/Profile';
import Loader from './components/Loader';

function App() {
  const { isAuth, isLoading } = useAuth();
  if (isLoading) return <Loader />;
  return (
    <Router>
      <Header isAuth={isAuth} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />
        <PrivateRoute exact path="/profile" isAuth={isAuth}>
          <Profile />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
