import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AppStateType } from "../store/store";

type PropsType = {
    isAuth: boolean | null
}

const mapSateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    function RedirectComponent(props: PropsType) {
        let { isAuth, ...restProps } = props
        if (isAuth === false) return <Redirect to="/login" />

        return < Component {...restProps as unknown as WCP} />
    }
    const ConnectAuthRedirectComponent = connect<PropsType, {}, WCP, AppStateType>(mapSateToProps)(RedirectComponent);

    return ConnectAuthRedirectComponent
}


export default withAuthRedirect