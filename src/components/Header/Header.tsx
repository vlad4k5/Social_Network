import React from "react";
import s from "./Header.module.scss"
import logo from "../../assets/images/logo.svg"
import { connect } from "react-redux";
import { logout } from "../../store/auth-reducer";
import { NavLink } from "react-router-dom";
import { AppStateType } from "../../store/store";

type TStateProps = {
    isAuth: boolean | null
    userName: string | null
}
type TDispatchProps = {
    logout: () => void
}
type PropsType = TStateProps & TDispatchProps

const Header: React.FC<PropsType> = ({ isAuth, logout, userName }) => {

    return <div className={s.header_wrapper}>
        <div className={s.mediaBlock}>
            <img src={logo} className={s.logo} alt="Social-Network logo" />
            <h2 className={s.slogan}>Social Network</h2>
        </div>
        {isAuth ?
        <div className={s.loginBlock}>
            <NavLink to="/profile" className={s.linkToProfile}>{userName}</NavLink>
            <button onClick={logout} className={s.logoutButton}>Log out</button>
        </div>
        : <div className={s.loginBlock}>
            <NavLink to="/login" className={s.linkToLogin} >
                <button className={s.logoutButton}>Log in</button>
            </NavLink>
        </div>
        }
    </div >
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.userData.login
})
export default connect<TStateProps, TDispatchProps, {}, AppStateType>(mapStateToProps, { logout })(Header);