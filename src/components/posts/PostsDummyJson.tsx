import {getData} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import {IPostDummy} from "../../models/dummyjsonPostModels/IPostDummy.ts";
import PostDummy from "./DummyPost.tsx";

const PostsDummyJson = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {
        getData<IPostDummy>(import.meta.env.VITE_API_DUMMY_URL, 'posts', 0)
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            PostsDummyJson content
            <hr/>
            {posts.map(post => <PostDummy key={post.id} post={post}/>)}
        </div>
    )
}

export default PostsDummyJson;