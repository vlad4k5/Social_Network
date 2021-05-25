import { useState } from "react";
import { usersAPI } from "../../../api/api";
import basicPhoto from "../../../assets/images/basicUserPhoto.png";
import s from "./UserItem.module.css";


const UserItem = ({ photo, name, status, id, followed }) => {

    const [isFollowed, setIsFollowed] = useState(followed);
    const [loading, isLoading] = useState(false);

    const follow = async (id) => {
        isLoading(true)
        const res = await usersAPI.follow(id);
        if (res.data.resultCode === 0) {
            setIsFollowed(true);
        }
        isLoading(false);
    }

    const unfollow = async (id) => {
        isLoading(true)
        const res = await usersAPI.unfollow(id);
        if (res.data.resultCode === 0) {
            setIsFollowed(false);
        }
        isLoading(false);
    }

    return <div className={s.userItem} key={id}>
        <div>
            <img src={photo ? photo : basicPhoto} className={s.userPhoto} alt="User Avatar" /><br />

            {isFollowed
                ? <button disabled={loading} onClick={() => { unfollow(id) }} className={s.followUnfollowButton}>Unfollow</button>
                : <button disabled={loading} onClick={() => { follow(id) }} className={s.followUnfollowButton}>Follow</button>
            }

        </div>

        <div>
            <br /><span>User name: {name}</span><br /><br />
            <span>User status: {status ? status : "User has not specified"}</span>
        </div>
    </div>
}


export default UserItem;