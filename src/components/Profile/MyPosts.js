import s from "./MyPosts.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";

const MyPosts = ({ posts, userPhoto, addNewPost, isOwner }) => {
    const profilePosts = [...posts].reverse().map(p =>
        <Post message={p.message} likesCount={p.likesCount} userPhoto={userPhoto} id={p.id} />)

    const initialValues = {
        postText: ""
    }
    const onSubmit = (values, { resetForm }) => {
        addNewPost(values.postText);
        resetForm();
    }

    return <div>
        {isOwner && <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <Field as="textarea" name="postText" id="postText" placeholder="add new post" /><br />
                <button>Add post</button>
            </Form>
        </Formik>}
        <div className={s.posts}>
            {profilePosts}
        </div>
    </div >
}


const Post = (props) => {
    return <div className={s.post} key={props.id}>
        <img src={props.userPhoto} alt="User avatar" />
        <div>
            <span>{props.message}</span>
        </div>
        <div>
            <span>Likes: {props.likesCount}</span>
        </div>
    </div>
}



export default MyPosts;
