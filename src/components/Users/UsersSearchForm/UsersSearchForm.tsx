import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../common/TextError/TextError";
import s from "./UsersSearchForm.module.scss"


type Values = {
    term: string
}

const onSubmit = (values: Values) => {

}
const validationSchema = Yup.object({
    term: Yup.string().max(25, "25 characters maximum")
})


const UsersSearchForm = () => {
    return <Formik initialValues={{ term: "" }} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <Field type="text" name="term" className={s.searchField} />
            <button className={s.searchButton}> Find User</button><br />
            <ErrorMessage name="term" component={TextError} />
            <br />
        </Form>
    </Formik>
}


export default UsersSearchForm