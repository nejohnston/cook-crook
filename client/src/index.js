import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import client from './config/apolloClient';

import store from './redux/store';

import muiTheme from './config/theme';

import PrivateRoute from './components/PrivateRoute';

import Layout from './components/Layout';
import Login from './containers/Login';
import Profile from './containers/Profile';
import ProfileContainer from './containers/Profile/ProfileContainer';
import ShareContainer from './containers/Share';
import NotFoundContainer from './containers/NotFound';
import RecipesContainer from './containers/Recipes/RecipesContainer';

import './index.css';
import { updateAuthState, userLoading } from './redux/modules/auth';
import { firebaseAuth } from './config/firebase';
import LoginContainer from './containers/Login/LoginContainer';

// local variable gotProfile's purpose is so the subscribe
// method is only run once.
let gotProfile = false;
store.subscribe(() => {
  const values = store.getState();
  if (values.authenticated !== 'LOADING_PROFILE' && !gotProfile) {
    gotProfile = true;
    store.dispatch(userLoading(false));
  }
});

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(updateAuthState(user));
  } else {
    store.dispatch(updateAuthState(false));
  }
});

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={LoginContainer} />
              <PrivateRoute exact path="/recipes" component={RecipesContainer} />
              <PrivateRoute exact path="/profile/:userid" component={ProfileContainer} />
              <PrivateRoute exact path="/share" component={ShareContainer} />
              <PrivateRoute exact path="*" component={NotFoundContainer} />
            </Switch>
          </Layout>
        </Router>
      </ApolloProvider>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
