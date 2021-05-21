import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/images/logo.svg"
import { connect } from "react-redux";
import { logout } from "../../store/auth-reducer";
import { NavLink, Redirect } from "react-router-dom";


const Header = (props) => {
    return <div className={s.header_wrapper}>
        <header className={s.mediaBlock}>
            <img src={logo} id={s.logo} alt="Social-Network logo" />
            <h2 className={s.slogan}>Social Network</h2>
        </header>
        {props.isAuth ?
            <div className={s.loginBlock}>
                <NavLink to="/profile" className={s.linkToProfile}>{props.userName}</NavLink>
                <button onClick={props.logout} className={s.logoutButton}>Logout</button>
            </div>
            : <div>
                <Redirect to="/login" />
            </div>
        }


    </div >
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.userData.login
})

export default connect(mapStateToProps, { logout })(Header);
