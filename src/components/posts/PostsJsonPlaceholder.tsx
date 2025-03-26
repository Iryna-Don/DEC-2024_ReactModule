import {useEffect, useState} from "react";
import {getData} from "../../services/api.service.ts";
import JsonPlaceholderPost from "./JsonPlaceholderPost.tsx";
import {IPostJsonplaceholder} from "../../models/jsonplaceholderPostModels/IPostJsonplaceholder.ts";

const PostsJsonPlaceholder = () => {
    const [posts, setPosts] = useState<IPostJsonplaceholder[]>([]);

    useEffect(() => {
        getData<IPostJsonplaceholder>(import.meta.env.VITE_API_JSON_URL, 'posts')
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            PostsJsonPlaceholder content
            <hr/>
            {posts.map(post => <JsonPlaceholderPost key={post.id} post={post}/>)}
        </div>
    )
};

export default PostsJsonPlaceholder;