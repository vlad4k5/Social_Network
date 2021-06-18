import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss"



const Navbar = () => {
    return <nav className={s.navbar}>
        <div className={s.navbar__Item}>
            <NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.navbar__Item}>
            <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.navbar__Item}>
            <NavLink to="/users" className={s.link} activeClassName={s.active}>Users  </NavLink>
        </div>
        <div className={s.navbar__Item}>
            <NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.navbar__Item}>
            <NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.navbar__Item}>
            <NavLink to="/settings" className={s.link} activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}



export default Navbar;
