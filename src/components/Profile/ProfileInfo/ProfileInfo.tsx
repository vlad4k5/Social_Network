import s from "./ProfileInfo.module.scss";
import basicPhoto from "../../../assets/images/basicUserPhoto.png";
import { useEffect, useState } from "react";
import { ProfileInfoType } from "../../../store/types/types";


type PropsType = {
    profileInfo: ProfileInfoType | null
    status: string
    updateStatus: (statusText: string) => void
    updatePhoto: (file: any) => void
    isOwner: boolean | null
}




const ProfileInfo: React.FC<PropsType> = ({ profileInfo, status, updateStatus, updatePhoto, isOwner }) => {
    const [statusEditMode, setStatusEditMode] = useState(false)
    const [statusText, setStatusText] = useState(status)

    useEffect(() => {
        setStatusText(status);
    }, [status])

    const saveNewStatus = () => {
        updateStatus(statusText);
        setStatusEditMode(false)
    }

    const onStatusTextChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value);
    }
    // @ts-ignore
    const onMainPhotoSelected = (e: any) => {
        updatePhoto(e.target.files[0]);
    }



    if (!profileInfo) return <div>LLLLLoadign...</div>



    return <div className={s.profileInfo_wrapper}>

        <span className={s.userName}>{profileInfo.fullName}</span>
        <div className={s.userPhoto}>
            <img src={profileInfo.photos.large ? profileInfo.photos.large : basicPhoto} alt="User Avatar" />
            {isOwner && <div>
                <input id="photoFile" className={s.photoFile} type="file" onChange={onMainPhotoSelected} />
                <label htmlFor="photoFile" className={s.changePhotoLabel}>Change Photo</label>
            </div>}
        </div>



        <div className={s.aboutMe}>
            <label htmlFor="status">Status: </label>
            {statusEditMode && isOwner
                // @ts-ignore
                ? <input value={statusText} onChange={onStatusTextChanged} onBlur={saveNewStatus} autoFocus={true} />
                : <span id="status" onClick={() => { setStatusEditMode(true) }}>{status ? status : "User has no status"}</span>
            }

            <h4>About me:</h4>

            {profileInfo.aboutMe ? <span>{profileInfo.aboutMe}</span> : <span>We dont know nothing about this user :</span>}
            <h4>Contacts:</h4>
            <div className={s.contactsBlock}>
                <a href={profileInfo.contacts.facebook} className={s.contacts}>facebook</a>
                <a href={profileInfo.contacts.website} className={s.contacts}>website</a>
                <a href={profileInfo.contacts.vk} className={s.contacts}>vkontakte</a>
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
