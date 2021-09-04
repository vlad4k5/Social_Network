import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { usersAPI } from "../../../api/users-api";
import basicPhoto from "../../../assets/images/basicUserPhoto.png";
import s from "./UserItem.module.scss";


type PropsType = {
    photo: string | null
    name: string
    status: string | null
    id: number
    followed: boolean
}



const UserItem: React.FC<PropsType> = ({ photo, name, status, id, followed }) => {

    const [isFollowed, setIsFollowed] = useState(followed);
    const [loading, isLoading] = useState(false);

    const follow = async (id: number) => {
        isLoading(true)
        const res = await usersAPI.follow(id);
        if (res.resultCode === 0) {
            setIsFollowed(true);
        }
        isLoading(false);
    }

    const unfollow = async (id: number) => {
        isLoading(true)
        const res = await usersAPI.unfollow(id);
        if (res.resultCode === 0) {
            setIsFollowed(false);
        }
        isLoading(false);
    }

    return <div className={s.userItem} key={id}>
        <div>
            <NavLink to={`/profile/${id}`}>
                <img onClick={() => { <Redirect to={`profile/${id}`} /> }} src={photo ? photo : basicPhoto} className={s.userPhoto} alt="User Avatar" />
            </NavLink>
        </div>

        <div className={s.userInfo}>
            <NavLink to={`/profile/${id}`} className={s.userName}>{name}</NavLink>
            <span>{status ? status : "User has no status"}</span>
        </div>

        <div className={s.subscribeBlock}>
            {isFollowed
                ? <button disabled={loading} onClick={() => { unfollow(id) }} className={s.followedButton}>Unfollow</button>
                : <button disabled={loading} onClick={() => { follow(id) }} >Follow</button>
            }
        </div>
    </div>
}


export default UserItem;