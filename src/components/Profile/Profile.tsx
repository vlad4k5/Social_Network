import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import { addNewPost, getProfile, getStatus, updatePhoto, updateStatus } from "../../store/profile-reducer";
import Posts from "./Posts/Posts";
import basicPhoto from "../../assets/images/basicUserPhoto.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType, ProfileInfoType } from "../../store/types/types";
import { AppStateType } from "../../store/store";

type TStateProps = {
    profileInfo: ProfileInfoType | null
    status: string | null
    posts: Array<PostType>
    ownerId: number | null
}
type TDispatchProps = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    addNewPost: (postText: string) => void
    updateStatus: (status: string | null) => void
    updatePhoto: (photoFile: any) => any
}
type TOwnProps = {
    match: any
}


type PropsType = TStateProps & TDispatchProps & TOwnProps

const Profile: React.FC<PropsType> = ({ getProfile, getStatus, match, ownerId, profileInfo, status, posts, addNewPost, updateStatus, updatePhoto }) => {
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

const mapStateToProps = (state: AppStateType): TStateProps => ({
    profileInfo: state.profile.profileInfo,
    status: state.profile.status,
    posts: state.profile.posts,
    ownerId: state.auth.userData.id
})

export default compose(
    withAuthRedirect,
    connect<TStateProps, TDispatchProps, TOwnProps, AppStateType>(mapStateToProps, { getProfile, getStatus, addNewPost, updateStatus, updatePhoto }),
    withRouter
)(Profile);