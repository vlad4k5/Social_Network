import s from "./Profile.module.css";
import basicPhoto from "../../assets/images/basicUserPhoto.png";
import { useEffect, useState } from "react";

const ProfileInfo = ({ profileInfo, status, updateStatus, updatePhoto }) => {
    const [statusEditMode, setStatusEditMode] = useState(false)
    const [statusText, setStatusText] = useState(status)

    useEffect(() => {
        setStatusText(status);
    }, [status])

    const saveNewStatus = () => {
        updateStatus(statusText);
        setStatusEditMode(false)
    }

    const onStatusTextChanged = (e) => {
        setStatusText(e.currentTarget.value);
    }

    const onMainPhotoSelected = (e) => {
        debugger
        updatePhoto(e.target.files[0]);
    }

    return <div className={s.profile_wrapper}>
        <div>
            <img src={profileInfo.photos.large ? profileInfo.photos.large : basicPhoto} alt="User Avatar" />
            <input type="file" onChange={onMainPhotoSelected} />
        </div>

        <div className={s.aboutMe}>
            <span>Status: </span>
            {statusEditMode
                ? <input value={statusText} onChange={onStatusTextChanged} onBlur={saveNewStatus} autoFocus={true} />
                : <span onClick={() => { setStatusEditMode(true) }}>{status}</span>
            }

            <h4>About me:</h4>

            {profileInfo.aboutMe ? <span>{profileInfo.aboutMe}</span> : <span>We dont know nothing about this user :</span>}
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
    </div>
}


export default ProfileInfo;
