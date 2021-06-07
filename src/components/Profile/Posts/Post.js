import s from "./Posts.module.scss"

const Post = (props) => {
    return <div className={s.post} key={props.id}>
        <img className={s.userPhoto} src={props.userPhoto} alt="User avatar" />
        <div>
            <div className={s.postText}>
                <span>{props.message}</span>
            </div>
        </div>
        <div>
            <div className={s.likeBlock}>
                <span>{props.likesCount}</span>
                <button className={s.likeButton}>&#10084;</button>
            </div>
        </div>
    </div>
}



export default Post;
