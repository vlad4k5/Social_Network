import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapSateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default function withAuthRedirect(Component) {
    function RedirectComponent(props) {
        if (props.isAuth === false) {
            return <Redirect to="/login" />
        }
        return < Component {...props} />
    }
    const ConnectAuthRedirectComponent = connect(mapSateToProps)(RedirectComponent);

    return ConnectAuthRedirectComponent
}


