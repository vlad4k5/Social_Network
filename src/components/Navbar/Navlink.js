import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navlink.module.css"

const Navbar = () => {
    return <nav className={s.navbar}>
        <div className={s.navbar_item}>
            <NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.navbar_item}>
            <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.navbar_item}>
            <NavLink to="/users" className={s.link} activeClassName={s.active}>Users  </NavLink>
        </div>
        <div className={s.navbar_item}>
            <NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.navbar_item}>
            <NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.navbar_item}>
            <NavLink to="/setting" className={s.link} activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}



export default Navbar;
