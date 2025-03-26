import {FC} from 'react';
import {ICommentDummy} from "../../models/dummyjsonCommentModels/ICommentDummy.ts";

type PropsType = {
    comment: ICommentDummy;
}

const CommentDummy: FC<PropsType> = ({comment}) => {
    const {id, body} = comment;
    return (
        <div>
            <p>{id} {body}</p>
        </div>
    );
};

export default CommentDummy;