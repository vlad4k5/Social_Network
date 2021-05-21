import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import { userAuthorizing } from "./store/auth-reducer";





class App extends React.PureComponent {


  componentDidMount() {
    this.props.userAuthorizing();
  }


  render() {
    if (this.props.isAuth === false) {
      <Redirect to="/login" />
    } else if (!this.props.status || !this.props.profileInfo) {
      return <div>Loading...</div>
    }
    return <div>
      <Header />
      <div className="app_wrapper">
        <Navbar />
        <main className="main_content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/dialogs" render={() => <Dialogs />} />
            <Route path="/users" render={() => <Users />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </main>
      </div>

    </div>
  }
}

const mapStateToProps = state => ({
  profileInfo: state.profile.profileInfo,
  status: state.profile.status,
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { userAuthorizing })(App);
