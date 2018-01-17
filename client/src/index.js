import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import muiTheme from "./config/theme";

import Layout from "./components/Layout";
import Login from "./containers/Login";
import Items from "./containers/Items";
import ItemsContainer from "./containers/Items";
import Profile from "./containers/Profile";
import ProfileContainer from "./containers/Profile";

import "./index.css";

const Boomtown = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Items} />
          <Route
            exact
            path="/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2"
            component={Profile}
          />
          {/*
            <Route exact path="/profile/:userid" component={} />
            <Route exact path="/share" component={} />
          */}
        </Switch>
      </Router>
    </Layout>
  </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
