import s from "./Posts.module.scss"
import { Formik, Form, Field } from "formik";
import Post from "./Post";

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
                <Field as="textarea" name="postText">
                    {(props) => {

                        const { field, form, meta } = props;

                        return <div>
                            <textarea className={s.postField} type="text" id="postText" placeholder="add new post" {...field}>{props.children}</textarea>
                        </div>
                    }}
                </Field>
                <button className={s.newPostButton}>Add post</button>
            </Form>
        </Formik>}
        <div className={s.posts}>
            {profilePosts}
        </div>
    </div >
}


export default MyPosts;
