import {FC} from "react";
import {IPost} from "../models/post/IPost.ts";

type postProps = {
    post: IPost;
}
const Post:FC<postProps> = ({post}) => {
    const{id, title, reactions}=post;
    return (
        <div className={'cardBlock'}>
            <span>ID:{id}</span>
            <h2>{title}</h2>
            <p> ❤️{reactions.likes} 👎🏻{reactions.dislikes}</p>
        </div>
    );
};

export default Post;