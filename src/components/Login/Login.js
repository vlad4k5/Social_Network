import { Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../store/auth-reducer";
import s from "./Login.module.css"

const Login = (props) => {
    const initialValues = {
        email: null,
        password: null,
        rememberMe: false
    }
    const onSubmit = values => {
        console.log("Values: ", values);
        props.login(values);
    }



    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h2>Login Page</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div className={s.loginItem}>
                    <label htmlFor="email">E-mail:</label>
                    <Field id="email" name="email" />
                </div>
                <div className={s.loginItem}>
                    <label htmlFor="password">Password:</label>
                    <Field type="password" id="password" name="password" />
                </div>
                <div className={s.loginItem}>
                    <label htmlFor="rememberMe">Remember me:</label>
                    <Field type="checkbox" id="rememberMe" name="rememberMe" />
                </div>

                <button>Login</button>
            </Form>
        </Formik>

    </div >
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);
