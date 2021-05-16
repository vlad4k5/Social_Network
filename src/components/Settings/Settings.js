import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { updateProfile } from "../../store/profile-reducer";
import s from "./Settings.module.css"




const Settings = (props) => {

    const initialValues = {
        aboutMe: props.profileInfo.aboutMe,
        userId: props.profileInfo.userId,
        contacts: {
            facebook: props.profileInfo.contacts.facebook,
            website: props.profileInfo.contacts.website,
            vk: props.profileInfo.contacts.vk,
            twitter: props.profileInfo.contacts.twitter,
            instagram: props.profileInfo.contacts.instagram,
            youtube: props.profileInfo.contacts.youtube,
            github: props.profileInfo.contacts.github,
            mainLink: props.profileInfo.contacts.mainLink,
        },
        lookingForAJob: props.profileInfo.lookingForAJob,
        lookingForAJobDescription: props.profileInfo.lookingForAJobDescription,
        fullName: props.profileInfo.fullName
    }
    const onSubmit = values => {
        debugger
        props.updateProfile(values)
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
    profileInfo: state.profile.profileInfo
})


export default connect(maStateToProps, { updateProfile })(Settings);
