import s from "./Dialogs.module.scss";
import { compose } from "redux";
import { connect } from "react-redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { dialogsActions } from "../../store/dialogs-reducer";
import DialogsUser from "./DialogsUser";
import DialogsMessage from "./DialogsMessage";
import { UserDialogType } from "../../store/types/types";
import { AppStateType } from "../../store/store";
import React from "react";


type TStateProps = {
    users: Array<UserDialogType>
    messages: Array<string>
}
type TDispatchProps = {
    addNewMessage: (message: string) => void
}

type PropsType = TStateProps & TDispatchProps

const Dialogs: React.FC<PropsType> = ({ users, messages, addNewMessage }) => {
    const dialogsUsers = users.map(u => <DialogsUser key={u.id} userName={u.userName} />)
    const dialogsMessages = messages.map((m, index) => <DialogsMessage key={index} message={m} />)

    interface Values {
        message: string
    }

    const onSubmit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
        addNewMessage(values.message);
        resetForm();
    }

    return <div>
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsUsers}>
                {dialogsUsers}
            </div>
            <div className={s.dialogsMessages}>

                <div className={s.messages}>
                    {dialogsMessages}
                </div>

                <div>
                <Formik initialValues={{ message: "" }} onSubmit={onSubmit}>
                    <Form>
                        <Field as="textarea" id="message" name="message" />
                        <button type="submit" className={s.sendMessageButton}>Send message</button>
                    </Form>
                </Formik>
                </div>
            </div>
        </div>
    </div >
}


const mapStateToProps = (state: AppStateType) => ({
    users: state.dialogs.users,
    messages: state.dialogs.messages
})


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<TStateProps, TDispatchProps, {}, AppStateType>(mapStateToProps, { addNewMessage: dialogsActions.addNewMessage })
)(Dialogs)