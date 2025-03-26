import {useEffect, useState} from "react";
import {getData} from "../../services/api.service.ts";
import {ICommentDummy} from "../../models/dummyjsonCommentModels/ICommentDummy.ts";
import CommentDummy from "./CommentDummy.tsx";

const CommentsDummyJson = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {
        getData<ICommentDummy>(import.meta.env.VITE_API_DUMMY_URL, 'comments', 0)
            .then(data => setComments(data))
    }, []);

    return (
        <div>
            CommentsDummyJson content
            <hr/>
            {comments.map(comment => <CommentDummy key={comment.id} comment={comment}/>)}
        </div>
    )
}
export default CommentsDummyJson;