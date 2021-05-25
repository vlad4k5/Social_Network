import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { getProfile, getStatus, updateProfile } from "../../store/profile-reducer";
import s from "./Settings.module.css"


const Settings = ({ profileInfo, updateProfile, ownerId, getProfile, getStatus }) => {

    // const [loading, setLoading] = useState(false);
    debugger
    if (ownerId !== profileInfo.userId) {
        getProfile(ownerId);
        getStatus(ownerId);
    }
    if (!profileInfo || ownerId !== profileInfo.userId) {
        return <div>Loading...</div>
    }



    const initialValues = {
        aboutMe: profileInfo.aboutMe,
        userId: profileInfo.userId,
        contacts: {
            facebook: profileInfo.contacts.facebook,
            website: profileInfo.contacts.website,
            vk: profileInfo.contacts.vk,
            twitter: profileInfo.contacts.twitter,
            instagram: profileInfo.contacts.instagram,
            youtube: profileInfo.contacts.youtube,
            github: profileInfo.contacts.github,
            mainLink: profileInfo.contacts.mainLink,
        },
        lookingForAJob: profileInfo.lookingForAJob,
        lookingForAJobDescription: profileInfo.lookingForAJobDescription,
        fullName: profileInfo.fullName
    }
    const onSubmit = values => {
        debugger
        updateProfile(values)
    }

    return <div className={s.settingsComponent}>
        <h1>Settings</h1>
        <hr />

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <div className={s.settingsWrapper}>
                    <div className={s.settingsBlock}>
                        <label htmlFor="aboutMe">About Me:</label><br />
                        <Field as="textarea" name="aboutMe" id="aboutMe" /><br />
                        <label htmlFor="fullName">Full Name:</label><br />
                        <Field type="text" name="fullName" id="fullName" />
                    </div>
                    <div className={s.settingsBlock}>
                        <label htmlFor="lookingForAJobDescription">Job information:</label><br />
                        <Field as="textarea" name="lookingForAJobDescription" id="lookingForAJobDescription" /><br />
                        <label htmlFor="lookingForAJob">Open for job:</label>
                        <Field type="checkbox" name="lookingForAJob" id="lookingForAJob" />
                    </div>
                    <div className={s.settingsBlock}>
                        <h3>Contacts:</h3>
                        <div className={s.settingsContactsWrapper}>
                            <div className={s.contactsLabales}>
                                <label htmlFor="facebook">Facebook:</label><br />
                                <label htmlFor="website">Website:</label><br />
                                <label htmlFor="vk">Vk:</label><br />
                                <label htmlFor="twitter">Twitter:</label><br />
                                <label htmlFor="instagram">Instagram:</label><br />
                                <label htmlFor="youtube">Youtube:</label><br />
                                <label htmlFor="github">Github:</label><br />
                                <label htmlFor="mainLink">MainLink:</label><br />
                            </div>
                            <div>
                                <Field type="text" name="contacts.facebook" id="facebook" />
                                <Field type="text" name="contacts.website" id="website" />
                                <Field type="text" name="contacts.vk" id="vk" />
                                <Field type="text" name="contacts.twitter" id="twitter" />
                                <Field type="text" name="contacts.instagram" id="instagram" />
                                <Field type="text" name="contacts.youtube" id="youtube" />
                                <Field type="text" name="contacts.github" id="github" />
                                <Field type="text" name="contacts.mainLink" id="mainLink" />
                            </div>
                        </div>
                    </div>
                </div>
                <button>Save all</button>
            </Form>
        </Formik>

    </div >
}

const maStateToProps = state => ({
    profileInfo: state.profile.profileInfo,
    ownerId: state.auth.userData.id,

})


export default compose(
    connect(maStateToProps, { updateProfile, getProfile, getStatus }),
    withAuthRedirect
)(Settings);