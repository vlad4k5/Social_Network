import React from "react";
import { connect } from "react-redux";
import { getProfile, getStatus } from "../../store/profile-reducer";
import s from "./Profile.module.css";


class Profile extends React.Component {

    componentDidMount() {
        const userId = 16227
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        debugger
        if (!this.props.profileInfo || !this.props.status) {
            return <div>Loading...</div>;
        }
        return <div className={s.profile_wrapper}>
            <img src={this.props.profileInfo.photos.large} />
            <div className={s.aboutMe}>
                <span>Status: {this.props.status}</span>
                <h4>About me</h4>
                <span>{this.props.profileInfo.aboutMe}</span>

                <h4>Contacts:</h4>
                <div className={s.contactsBlock}>
                    <a href={this.props.profileInfo.contacts.facebook} className={s.contacts}>facebook</a>
                    <a href={this.props.profileInfo.contacts.website} className={s.contacts}>website</a>
                    <a href={this.props.profileInfo.contacts.vk} className={s.contacts}>vk</a>
                    <a href={this.props.profileInfo.contacts.twitter} className={s.contacts}>twitter</a>
                    <a href={this.props.profileInfo.contacts.instagram} className={s.contacts}>instagram</a>
                    <a href={this.props.profileInfo.contacts.youtube} className={s.contacts}>youtube</a>
                    <a href={this.props.profileInfo.contacts.github} className={s.contacts}>github</a>
                    <a href={this.props.profileInfo.contacts.mainLink} className={s.contacts}>mainLink</a>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profile.profileInfo,
    status: state.profile.status
})

export default connect(mapStateToProps, { getProfile, getStatus })(Profile);
