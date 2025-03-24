import {FC} from 'react';
import {IComment} from "../../models/IComment.ts";

type CommentPropsType = {
    comment: IComment;
}
const Comment: FC<CommentPropsType> = ({comment}) => {
    const {id, postId, body, likes, user} = comment;
    return (
        <div>
            <div>
                <span><i>Comment ID:</i> {id}</span>
                <span><i>Post ID:</i> {postId}</span>
            </div>
            <div><span><i>User ID:</i> {user.id} </span>
                <span><i>Full Name:</i> {user.fullName}</span>
                <span><i>User Name:</i> {user.username}</span>
            </div>
            <p>{body}</p>
            <p><span> 💗 </span> {likes}</p>
        </div>
    );
};

export default Comment;