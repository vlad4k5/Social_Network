import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.scss";
import basicPhoto from "../../assets/images/basicUserPhoto.png";


type PropsType = {
    userName: string
}

const DialogsUser: React.FC<PropsType> = ({ userName }) => {
    return <div className={s.dialogsUserWrapper}>
        <img src={basicPhoto} className={s.dialogsUserPhoto} alt={"User avatar"} />
        <NavLink className={s.linkToUserChat} to="/profile/17001">{userName}</NavLink>
    </div>
}


export default DialogsUser
