import {FC} from "react";
import {ICommentJsonplaceholder} from "../../models/jsonplaceholderCommentModels/ICommentJsonplaceholder.ts";
type PropsType = {
    comment: ICommentJsonplaceholder;
}

    const JsonPlaceholderComment: FC<PropsType> = ({comment}) => {
        const {id, body} = comment;

        return (
            <>
                <p>{id} {body}</p>
            </>
        );
    };

export default JsonPlaceholderComment;