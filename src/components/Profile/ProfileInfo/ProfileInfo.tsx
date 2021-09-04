import s from "./ProfileInfo.module.scss";
import basicPhoto from "../../../assets/images/basicUserPhoto.png";
import { useEffect, useState } from "react";
import { ProfileInfoType } from "../../../store/types/types";
import { NavLink } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

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
    const onMainPhotoSelected = (e: any) => {
        updatePhoto(e.target.files[0]);
    }

    if (!profileInfo) return <Preloader />

    return <div className={s.profileInfo_wrapper}>
        <div className={s.userPhoto}>
                <label htmlFor="photoFile" >
                    <img 
                        src={profileInfo.photos.large ? profileInfo.photos.large : basicPhoto} 
                        className={isOwner? s.ownerPhoto: ""} 
                        alt="User Avatar" 
                    />
                </label>
            {isOwner && <div>
                <input id="photoFile" className={s.photoFile} type="file" onChange={onMainPhotoSelected} />
                <button className={s.editProfile}>
                    <NavLink to="/settings" >
                        Edit profile
                    </NavLink>
                </button>
            </div>}
        </div>

        <div className={s.aboutMe}>
            <h1 className={s.userName}>{profileInfo.fullName}</h1>
            <div className={isOwner? s.userStatus: ""} onClick={() => { setStatusEditMode(true) }}>
                <label htmlFor="status">Status: </label>
                {statusEditMode && isOwner
                    ? <input value={statusText} onChange={onStatusTextChanged} onBlur={saveNewStatus} autoFocus={true} />
                    : <span id="status" >
                        {status ? status : "User has no status"}
                    </span>}
            </div>
            
            <div className={s.aboutMeInfo}>
                <p>About me: {profileInfo.aboutMe ? profileInfo.aboutMe : ""}</p>
            </div>
            <div className={s.jobInfo}>
                <p>{profileInfo.lookingForAJob? `Looking for a job ✔️`: "Not looking for a job ❌"}</p>
                <p>{profileInfo.lookingForAJobDescription? profileInfo.lookingForAJobDescription: ""}</p>
            </div>
        </div>
    </div>
}
export default ProfileInfo;