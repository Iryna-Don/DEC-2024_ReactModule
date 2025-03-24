import {FC, useEffect, useState} from 'react';
import {IComment} from "../../models/IComment.ts";
import {getComments} from "../../api.service.ts";
import Comment from "../Comment/Comment.tsx";


const Comments: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments()
            .then(value => setComments(value))
    }, []);
    return (
        <div className={'container'}>
            {comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
        </div>
    );
};

export default Comments;