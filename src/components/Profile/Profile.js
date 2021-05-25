import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { addNewPost, getProfile, getStatus } from "../../store/profile-reducer";
import MyPosts from "./MyPosts";
import s from "./Profile.module.css";
import basicPhoto from "../../assets/images/basicUserPhoto.png";

const Profile = ({ getProfile, getStatus, match, ownerId, profileInfo, status, posts, addNewPost }) => {
    debugger


    useEffect(() => {
        debugger
        getProfile(match.params.userId ? match.params.userId : ownerId);
        getStatus(match.params.userId ? match.params.userId : ownerId);
    }, [match.params.userId])



    debugger
    if (!profileInfo) {
        return <div>Loading...</div>
    }


    return <>
        <div className={s.profile_wrapper}>
            <img src={profileInfo.photos.large ? profileInfo.photos.large : basicPhoto} alt="User Avatar" />
            <div className={s.aboutMe}>
                <span>Status: {status}</span>
                <h4>About me:</h4>
                {profileInfo.aboutMe ? <span>{profileInfo.aboutMe}</span> : <span>We dont know nothing about this user :(</span>}

                <h4>Contacts:</h4>
                <div className={s.contactsBlock}>
                    <a href={profileInfo.contacts.facebook} className={s.contacts}>facebook</a>
                    <a href={profileInfo.contacts.website} className={s.contacts}>website</a>
                    <a href={profileInfo.contacts.vk} className={s.contacts}>vk</a>
                    <a href={profileInfo.contacts.twitter} className={s.contacts}>twitter</a>
                    <a href={profileInfo.contacts.instagram} className={s.contacts}>instagram</a>
                    <a href={profileInfo.contacts.youtube} className={s.contacts}>youtube</a>
                    <a href={profileInfo.contacts.github} className={s.contacts}>github</a>
                    <a href={profileInfo.contacts.mainLink} className={s.contacts}>mainLink</a>
                </div>

            </div>

        </div><hr /><br />
        <MyPosts posts={posts} userPhoto={profileInfo.photos.small ? profileInfo.photos.small : basicPhoto} addNewPost={addNewPost} />
    </>
}

const mapStateToProps = (state) => ({
    profileInfo: state.profile.profileInfo,
    status: state.profile.status,
    posts: state.profile.posts,
    ownerId: state.auth.userData.id
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, addNewPost }),
    withRouter
)(Profile);
