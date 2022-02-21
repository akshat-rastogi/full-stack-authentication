import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/Notfound";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import setAuthToken from "./global/utils/setAuthToken";
import { loadUser } from "./global/actions/auth";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
