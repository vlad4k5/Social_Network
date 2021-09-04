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
            <h2>Login Page </h2>
                {errorMessage && <div className={s.serverErrorMessage}> {errorMessage} </div>}
            <div className={s.loginItem} >
                < ErrorMessage name="email" component={TextError} /> 
                < Field type="text" name="email" placeholder="Email Address" />
            </div>

            <div className={s.loginItem} >
                < ErrorMessage name="password" component={TextError} /> 
                < Field type="password" name="password" placeholder="Password" />
            </div>

            < div className={s.checkboxBlock} >
            {/* < Field type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe" > Remember me: </label> */}
            <label htmlFor="rememberMe" className={s.label}> Remember me:</label>
            <Field type="checkbox" name="rememberMe" id="rememberMe"/>
            <label htmlFor="rememberMe" className={s.toggle }><span></span></label>
            </div>

            {captcha ? <div className={s.captchaBlock}>
                < img src={captcha} alt="captcha" />
                <label htmlFor="captcha" className={s.err} > Please write a symbols from  captcha: </label>
                <Field type="text" id="captcha" name="captcha" />
            </div> : null}

            < button className={s.loginButton}> Login </button>
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
