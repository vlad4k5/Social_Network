import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import { getProfile, getStatus } from "./store/profile-reducer";





class App extends React.PureComponent {


  componentDidMount() {
    const userId = 16227
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }


  render() {
    if (!this.props.profileInfo || !this.props.status) {
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
          </Switch>
        </main>
      </div>

    </div>
  }
}

const mapStateToProps = state => ({
  profileInfo: state.profile.profileInfo,
  status: state.profile.status
})


export default connect(mapStateToProps, { getProfile, getStatus })(App);
