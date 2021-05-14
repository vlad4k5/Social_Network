import React from "react";
import { Redirect, Route, Switch } from "react-router";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";





const App = () => {
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
        </Switch>
      </main>
    </div>

  </div>
}



export default App;
