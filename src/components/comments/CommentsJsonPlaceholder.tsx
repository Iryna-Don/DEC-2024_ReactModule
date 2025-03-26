import {useEffect, useState} from "react";
import {getData} from "../../services/api.service.ts";
import {ICommentJsonplaceholder} from "../../models/jsonplaceholderCommentModels/ICommentJsonplaceholder.ts";
import JsonPlaceholderComment from "./JsonPlaceholderComment.tsx";

const CommentsJsonPlaceholder = () => {
    const [comments, setComments] = useState<ICommentJsonplaceholder[]>([]);

    useEffect(() => {
        getData<ICommentJsonplaceholder>(import.meta.env.VITE_API_JSON_URL, 'comments')
            .then(data => setComments(data))
    }, []);

    return (
        <div>
            CommentsJsonPlaceholder content
            <hr/>
            {comments.map(comment => <JsonPlaceholderComment key={comment.id} comment={comment}/>)}
        </div>
    )
};

export default CommentsJsonPlaceholder;