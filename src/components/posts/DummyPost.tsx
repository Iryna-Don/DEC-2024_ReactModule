import {FC} from "react";
import {IPostDummy} from "../../models/dummyjsonPostModels/IPostDummy.ts";

type PropsType = {
    post: IPostDummy;
}

const PostDummy: FC<PropsType> = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <p>{id} {title}</p>
        </div>
    );
};

export default PostDummy;