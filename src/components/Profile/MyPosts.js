import s from "./MyPosts.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";

const MyPosts = (props) => {
    const posts = [...props.posts].reverse().map(p =>
        <Post message={p.message} likesCount={p.likesCount} userPhoto={props.userPhoto} keyId={p.id} />)

    const initialValues = {
        postText: ""
    }
    const onSubmit = values => {
        props.addNewPost(values.postText)

    }

    return <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <Field as="textarea" name="postText" id="postText" />
                <button>Add post</button>
            </Form>
        </Formik>
        <div className={s.posts}>
            {posts}
        </div>
    </div >
}


const Post = (props) => {
    return <div className={s.post} key={props.keyId}>
        <img src={props.userPhoto} alt="User photo" />
        <div>
            <span>{props.message}</span>
        </div>
        <div>
            <span>Likes: {props.likesCount}</span>
        </div>
    </div>
}



export default MyPosts;
