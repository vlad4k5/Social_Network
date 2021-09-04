import s from "./Posts.module.scss"
import { Formik, Form, Field, FormikHelpers } from "formik";
import Post from "./Post";
import { PostType } from "../../../store/types/types";

type PropsType = {
    posts: Array<PostType>
    userPhoto: any
    addNewPost: (postText: string) => void
    isOwner: boolean | null
}

const Posts: React.FC<PropsType> = ({ posts, userPhoto, addNewPost, isOwner }) => {

    const profilePosts = [...posts].reverse().map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount} userPhoto={userPhoto} id={p.id} />)

    interface Values {
        postText: string
    }
    const onSubmit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
        addNewPost(values.postText);
        resetForm();
    }

    return <div>
        {isOwner && <Formik initialValues={{ postText: "" }} onSubmit={onSubmit}>
            <Form>
                <Field name="postText">
                    {(props: any) => {

                        const { field } = props;

                        return <div>
                            <textarea className={s.postField} type="text" id="postText" placeholder="Add new post..." {...field}>{props.children}</textarea>
                        </div>
                    }}
                </Field>
                <button type="submit" className={s.newPostButton}>Add post</button>
            </Form>
        </Formik>}
        <div>
            {profilePosts}
        </div>
    </div >
}
export default Posts;