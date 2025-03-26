import {FC} from "react";
import {IPostJsonplaceholder} from "../../models/jsonplaceholderPostModels/IPostJsonplaceholder.ts";
type PropsType = {
    post: IPostJsonplaceholder;
}

const JsonPlaceholderPost:FC<PropsType> = ({post}) => {
        const {id, body} = post;

        return (
            <>
                <p>{id} {body}</p>
            </>
        );
    };
export default JsonPlaceholderPost