import {FC} from 'react';
import {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost;
}
const Post: FC<PostPropsType> = ({post}) => {
    const {id, userId, body, reactions, tags, views, title} = post;
    return (
        <div>
            <div>
                <span>Post ID: {id}</span>
                <span>User ID: {userId}</span>
            </div>
            <h3>{title}</h3>
            <p> 🗒 {body}</p>
            <p>Tags: {tags}</p>
            <p>Views: {views} &#128065;</p>
            <div>
                <span> 👍 {reactions.likes}</span>
                <span> 👎 {reactions.dislikes}</span>
            </div>
        </div>
    );
};

export default Post;