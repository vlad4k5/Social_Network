import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { getProfile, getStatus, updateProfile } from "../../store/profile-reducer";
import s from "./Settings.module.scss"
import * as Yup from "yup";
import { AppStateType } from "../../store/store";
import { ProfileInfoType } from "../../store/types/types";
import React from "react";


type TStateProps = {
    profileInfo: ProfileInfoType | null
    ownerId: number | null
}
type TDispatchProps = {
    updateProfile: (profileInfo: ProfileInfoType) => void
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
}
type PropsType = TStateProps & TDispatchProps

const Settings: React.FC<PropsType> = ({ profileInfo, updateProfile, ownerId, getProfile, getStatus }) => {
    if (ownerId === null) return <div>LLOADING.........</div>

    if (ownerId !== profileInfo?.userId) {
        getProfile(ownerId);
        getStatus(ownerId);
    }
    if (!profileInfo || ownerId !== profileInfo.userId) {
        return <div>Loading...</div>
    }

    const initialValues: ProfileInfoType = {
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
        fullName: profileInfo.fullName,
        photos: profileInfo.photos
    }
    // above weird code :/ "initialValues.photos"
    const onSubmit = (values: ProfileInfoType) => {
        updateProfile(values)
    }

    const validationSchema = Yup.object({
        contacts: Yup.object({
            facebook: Yup.string().url("! Invalid url format"),
            website: Yup.string().url("! Invalid url format"),
            vk: Yup.string().url("! Invalid url format"),
            twitter: Yup.string().url("! Invalid url format"),
            instagram: Yup.string().url("! Invalid url format"),
            youtube: Yup.string().url("! Invalid url format"),
            github: Yup.string().url("! Invalid url format"),
            mainLink: Yup.string().url("! Invalid url format")
        }),
        aboutMe: Yup.string().max(200, "! Too long text"),
        fullName: Yup.string().max(20, "! Too long name"),
        lookingForAJobDescription: Yup.string().max(200, "! Too long text")
    })

    return <div className={s.settingsComponent}>
        <h2>Account settings</h2>

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div className={s.settingsWrapper}>
                    <label htmlFor="aboutMe">About Me:</label>
                    <Field as="textarea" name="aboutMe" id="aboutMe" />
                    <span className={s.errorMessage}><ErrorMessage name="aboutMe" /></span>
                    
                    <label htmlFor="fullName">Full Name:</label>
                    <Field type="text" name="fullName" id="fullName" />
                    <span className={s.errorMessage}><ErrorMessage name="fullName" /></span>
                    
                    <label htmlFor="lookingForAJobDescription">Job information:</label>
                    <Field as="textarea" name="lookingForAJobDescription" id="lookingForAJobDescription" />
                    <span className={s.errorMessage}><ErrorMessage name="lookingForAJobDescription" /></span>

                    <label htmlFor="lookingForAJob"> Looking for a job:</label>
                    <Field type="checkbox" name="lookingForAJob" id="lookingForAJob"/>
                    <label htmlFor="lookingForAJob" className={s.toggle }><span></span></label>
                    <span></span>
                    



                    <h2>Contacts</h2> <span></span> <span></span>

                    <label htmlFor="facebook">Facebook:</label>
                    <Field type="text" name="contacts.facebook" id="facebook" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="website">Website:</label>
                    <Field type="text" name="contacts.website" id="website" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.website" /></span>

                    <label htmlFor="vk">Vkontakte:</label>
                    <Field type="text" name="contacts.vk" id="vk" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.vk" /></span>

                    <label htmlFor="twitter">Twitter:</label>
                    <Field type="text" name="contacts.twitter" id="twitter" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.twitter" /></span>

                    <label htmlFor="instagram">Instagram:</label>
                    <Field type="text" name="contacts.instagram" id="instagram" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.instagram" /></span>

                    <label htmlFor="youtube">Youtube:</label>
                    <Field type="text" name="contacts.youtube" id="youtube" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.youtube" /></span>

                    <label htmlFor="github">Github:</label>
                    <Field type="text" name="contacts.github" id="github" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.github" /></span>

                    <label htmlFor="mainLink">MainLink:</label>
                    <Field type="text" name="contacts.mainLink" id="mainLink" />
                    <span className={s.errorMessage}><ErrorMessage name="contacts.mainLink" /></span>

                </div>
                
                <button type="submit" className={s.submitButton}>
                    Save changes
                </button>
                
            </Form>
        </Formik>
    </div >
}

const maStateToProps = (state: AppStateType) => ({
    profileInfo: state.profile.profileInfo,
    ownerId: state.auth.userData.id
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(maStateToProps, { updateProfile, getProfile, getStatus })
)(Settings);