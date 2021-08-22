import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../store/auth-reducer";
import s from "./Login.module.scss"
import * as Yup from "yup";
import TextError from "../common/TextError/TextError";
import { LoginDataType } from "../../store/types/types";
import { AppStateType } from "../../store/store";

type TStateProps = {
    isAuth: boolean | null
    captcha: string | null
    errorMessage: string | null
}
type TDispatchProps = {
    login: (loginData: LoginDataType) => void
}
type PropsType = TStateProps & TDispatchProps

const Login: React.FC<PropsType> = ({ isAuth, captcha, login, errorMessage }) => {

    interface Values {
        email: string
        password: string
        rememberMe: boolean
        captcha: string | null
    }


    const onSubmit = (values: Values) => {
        login(values);
    }

    const validationSchema = Yup.object({
        email: Yup.string().email(" Invalid e-mail format!").required(" Field is required!").nullable(),
        password: Yup.string().required(" Field is required!").nullable()
    })

    if (isAuth) {
        return <Redirect to="/profile" />
    }

    return <div className={s.loginWrapper}>
        <h2>Login Page </h2>
        < Formik initialValues={{
            email: "",
            password: "",
            rememberMe: false,
            captcha: null
        }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                {errorMessage && <div className={s.serverErrorMessage}> {errorMessage} </div>}
                <div className={s.loginItem} >
                    <label htmlFor="email" > E - mail: </label>
                    < ErrorMessage name="email" component={TextError} /> <br />
                    < Field id="email" name="email" />
                </div>
                <div className={s.loginItem} >
                    <label htmlFor="password" > Password: </label>
                    < ErrorMessage name="password" component={TextError} /> <br />
                    < Field type="password" id="password" name="password" />
                </div>
                < div className={s.loginItem} >
                    <label htmlFor="rememberMe" > Remember me: </label>
                    < Field type="checkbox" id="rememberMe" name="rememberMe" />
                </div><br />
                {captcha ? <div>
                    < img src={captcha} alt="captcha" /> <br />
                    <label htmlFor="captcha" > Please write a symbols from  captcha: </label><br />
                    <Field type="text" id="captcha" name="captcha" />
                </div> : null}
                < button > Login </button>

            </Form>
        </Formik>

    </div >
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
    errorMessage: state.auth.errorMessage
})

export default connect<TStateProps, TDispatchProps, {}, AppStateType>(mapStateToProps, { login })(Login);
