import {FC} from "react";
import {IPost} from "../models/IPost.ts";
type PostProps = {
    post:IPost;
}
const Post:FC<PostProps> = ({post}) => {
    const{userId, id, body, title}= post;
    return (
        <div>
            <div>
                <p>User ID: {userId}</p>
                <p>Post ID: {id}</p>
            </div>
            <h2>{title}</h2>
            <span>{body}</span>
        </div>
    );
};

export default Post;