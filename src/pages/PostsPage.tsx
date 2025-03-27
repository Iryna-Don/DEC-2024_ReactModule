import {IPost} from "../models/post/IPost.ts";
import {useEffect, useState} from "react";
import {getData} from "../services/api.service.ts";
import Post from "../components/Post.tsx";
import {baseUrl} from "../services/urls.ts";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getData<IPost>(baseUrl, 'posts')
            .then(data => setPosts(data));
    })
    return (
        <>
            <h1>PostsPage content</h1>
            <div className="cardsContainer">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </>
    );
};

export default PostsPage;