import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { usersAPI } from "../../../api/api";
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

            {isFollowed
                ? <button disabled={loading} onClick={() => { unfollow(id) }} className={s.followUnfollowButton}>Unfollow</button>
                : <button disabled={loading} onClick={() => { follow(id) }} className={s.followUnfollowButton}>Follow</button>
            }

        </div>

        <div>
            <br /><span>User name: </span><NavLink to={`/profile/${id}`}>{name}</NavLink><br /><br />
            <span>User status: {status ? status : "User has not specified"}</span>
        </div>
    </div>
}


export default UserItem;