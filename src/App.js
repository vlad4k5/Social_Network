import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import s from './App.module.scss';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import { userAuthorizing } from "./store/auth-reducer";



const App = ({ userAuthorizing, isAuth, }) => {

  useEffect(() => {
    userAuthorizing();
  }, [])

  if (isAuth === false) {
    <Redirect to="/login" />
  }
  return <div className={s.app__Wrapper}>
    <header className={s.app__Header}>
      <Header />
    </header>

    <div className={s.app__Navbar}>
      <Navbar />
    </div>

    <main className={s.app__Content}>
      <Switch>
        <Redirect exact from="/" to="/profile" />
        <Route path="/profile/:userId?" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/users" render={() => <Users />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login />} />
        <Redirect from="" to="/profile" />
      </Switch>
    </main>

  </div>
}

const mapStateToProps = state => ({
  profileInfo: state.profile.profileInfo,
  status: state.profile.status,
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { userAuthorizing })(App);