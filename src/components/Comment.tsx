import {FC} from 'react';
import {IComment} from "../models/IComment.ts";

type CommentPropsType = {
    comment: IComment;
}
const Comment: FC<CommentPropsType> = ({comment}) => {
    const {id, postId, name, body, email} = comment;
    return (
        <div>
            <div>
                <span>Post ID: {postId}</span>
                <span>Comment ID: {id}</span>
            </div>
            <h2>{name}</h2>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
};

export default Comment;