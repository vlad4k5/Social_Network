import s from "./Posts.module.scss"

type PropsType = {
    id: number
    userPhoto: any
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = ({ id, userPhoto, message, likesCount }) => {
    return <div className={s.post} key={id}>
        <img className={s.userPhoto} src={userPhoto} alt="User avatar" />
        <div>
            <div className={s.postText}>
                <span>{message}</span>
            </div>
        </div>
    </div>
}
export default Post;