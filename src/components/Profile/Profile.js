import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { addNewPost, getProfile, getStatus, updatePhoto, updateStatus } from "../../store/profile-reducer";
import Posts from "./Posts/Posts";
import basicPhoto from "../../assets/images/basicUserPhoto.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ getProfile, getStatus, match, ownerId, profileInfo, status, posts, addNewPost, updateStatus, updatePhoto }) => {
    useEffect(() => {
        if (match.params.userId) {
            getProfile(match.params.userId);
            getStatus(match.params.userId);
        }
    }, [])

    useEffect(() => {
        getProfile(match.params.userId ? match.params.userId : ownerId);
        getStatus(match.params.userId ? match.params.userId : ownerId);
    }, [match.params.userId])


    if (!profileInfo) {
        return <div>Loading...</div>
    }

    return <>
        <ProfileInfo
            profileInfo={profileInfo}
            status={status}
            updateStatus={updateStatus}
            updatePhoto={updatePhoto}
            isOwner={!match.params.userId}
        />
        <hr />
        <Posts
            posts={posts}
            userPhoto={profileInfo.photos.small ? profileInfo.photos.small : basicPhoto}
            addNewPost={addNewPost}
            isOwner={!match.params.userId}
        />
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
    connect(mapStateToProps, { getProfile, getStatus, addNewPost, updateStatus, updatePhoto }),
    withRouter
)(Profile);
