import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/images/logo.svg"


const Header = () => {
    return <div className={s.header_wrapper}>
        <header className={s.mediaBlock}>
            <img src={logo} id={s.logo} alt="Social-Network logo" />
            <h2 className={s.slogan}>Social Network</h2>
        </header>

    </div >
}



export default Header;
