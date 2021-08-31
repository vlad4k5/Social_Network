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
            facebook: Yup.string().url("Invalid url format")
        }),
        aboutMe: Yup.string().max(200, "Too long text"),
        fullName: Yup.string().max(20, "Too long name"),
    })

    return <div className={s.settingsComponent}>
        <h2>Account settings</h2>

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <div className={s.settingsWrapper}>
                    <label htmlFor="aboutMe">About Me:</label>
                    <Field as="textarea" name="aboutMe" id="aboutMe" />
                    <span><ErrorMessage name="aboutMe" /></span>
                    
                    <label htmlFor="fullName">Full Name:</label>
                    <Field type="text" name="fullName" id="fullName" />
                    <span><ErrorMessage name="fullName" /></span>
                    
                    <label htmlFor="lookingForAJobDescription">Job information:</label>
                    <Field as="textarea" name="lookingForAJobDescription" id="lookingForAJobDescription" />
                    <span></span>

                    <label htmlFor="lookingForAJob">Open for job:</label>
                    <span><Field type="checkbox" name="lookingForAJob" id="lookingForAJob" /></span>
                    <span></span>

                    <h2>Contacts</h2> <span></span> <span></span>
                    
                    <label htmlFor="facebook">Facebook:</label>
                    <Field type="text" name="contacts.facebook" id="facebook" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="website">Website:</label>
                    <Field type="text" name="contacts.website" id="website" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="vk">Vkontakte:</label>
                    <Field type="text" name="contacts.vk" id="vk" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="twitter">Twitter:</label>
                    <Field type="text" name="contacts.twitter" id="twitter" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="instagram">Instagram:</label>
                    <Field type="text" name="contacts.instagram" id="instagram" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="youtube">Youtube:</label>
                    <Field type="text" name="contacts.youtube" id="youtube" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="github">Github:</label>
                    <Field type="text" name="contacts.github" id="github" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                    <label htmlFor="mainLink">MainLink:</label>
                    <Field type="text" name="contacts.mainLink" id="mainLink" />
                    <span><ErrorMessage name="contacts.facebook" /></span>

                </div>
                <button type="submit" className={s.submitButton}>Save all</button>
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