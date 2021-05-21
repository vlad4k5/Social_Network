import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { addNewPost, getProfile, getStatus } from "../../store/profile-reducer";
import MyPosts from "./MyPosts";
import s from "./Profile.module.css";


const Profile = (props) => {
    debugger

    if (!props.profileInfo) {
        return <div>Loading...</div>
    }


    return <>
        <div className={s.profile_wrapper}>
            <img src={props.profileInfo.photos.large} />
            <div className={s.aboutMe}>
                <span>Status: {props.status}</span>
                <h4>About me:</h4>
                <span>{props.profileInfo.aboutMe}</span>

                <h4>Contacts:</h4>
                <div className={s.contactsBlock}>
                    <a href={props.profileInfo.contacts.facebook} className={s.contacts}>facebook</a>
                    <a href={props.profileInfo.contacts.website} className={s.contacts}>website</a>
                    <a href={props.profileInfo.contacts.vk} className={s.contacts}>vk</a>
                    <a href={props.profileInfo.contacts.twitter} className={s.contacts}>twitter</a>
                    <a href={props.profileInfo.contacts.instagram} className={s.contacts}>instagram</a>
                    <a href={props.profileInfo.contacts.youtube} className={s.contacts}>youtube</a>
                    <a href={props.profileInfo.contacts.github} className={s.contacts}>github</a>
                    <a href={props.profileInfo.contacts.mainLink} className={s.contacts}>mainLink</a>
                </div>

            </div>

        </div><hr /><br />
        <MyPosts posts={props.posts} userPhoto={props.profileInfo.photos.small} addNewPost={props.addNewPost} />
    </>
}

const mapStateToProps = (state) => ({
    profileInfo: state.profile.profileInfo,
    status: state.profile.status,
    posts: state.profile.posts
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, addNewPost })
)(Profile);
