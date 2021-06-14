import s from "./Dialogs.module.scss";
import basicPhoto from "../../assets/images/basicUserPhoto.png";


type PropsType = {
    message: string
}

const DialogsMessage: React.FC<PropsType> = ({ message }) => {
    return <div className={s.dialogsMessageWrapper}>
        <img src={basicPhoto} className={s.dialogsUserPhoto} alt={"User avatar"} />
        <span>{message}</span>
    </div>
}


export default DialogsMessage