import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import basicPhoto from "../../assets/images/basicUserPhoto.png";
import { compose } from "redux";
import { connect } from "react-redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { Field, Form, Formik } from "formik";
import { addNewMessage } from "../../store/dialogs-reducer";

const Dialogs = ({ users, messages, addNewMessage }) => {

    const dialogsUsers = users.map(u => <DialogsUser userName={u.userName} />)
    const dialogsMessages = messages.map(m => <DialogsMessage message={m} />)

    const onSubmit = (values, { resetForm }) => {
        addNewMessage(values.message);
        resetForm();
    }

    const initialValues = {
        message: ""
    }

    return <div>
        <h1>Messages</h1> <hr />
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsUsers}>
                {dialogsUsers}
            </div>
            <div className={s.dialogsMessages}>
                {dialogsMessages}<hr />
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <Form>
                        <Field as="textarea" id="message" name="message" /><br />
                        <button>Send message</button>
                    </Form>
                </Formik>
            </div>
        </div>
    </div >
}

const DialogsUser = ({ userName }) => {
    return <div className={s.dialogsUserWrapper}>
        <img src={basicPhoto} className={s.dialogsUserPhoto} alt={"User avatar"} />
        <NavLink className={s.linkToUserChat} to="/profile/17001">{userName}</NavLink>
    </div>
}

const DialogsMessage = ({ message }) => {
    return <div className={s.dialogsMessageWrapper}>
        <img src={basicPhoto} className={s.dialogsUserPhoto} alt={"User avatar"} />
        <span>{message}</span>
    </div>
}

const mapStateToProps = state => ({
    users: state.dialogs.users,
    messages: state.dialogs.messages
})

export default compose(
    connect(mapStateToProps, { addNewMessage }),
    withAuthRedirect)
    (Dialogs);
