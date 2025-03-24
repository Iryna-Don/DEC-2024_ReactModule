import {FC, useEffect, useState} from 'react';
import {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../api.service.ts";
import Post from "../Post/Post.tsx";

const Posts:FC = () => {
    const [posts, setPosts]=useState<IPost[]>([]);
    useEffect(()=> {
        getPosts()
            .then(value => setPosts(value))
    },[])
    return (
        <div className={'container'}>
            {posts.map((post, index)=><Post key={index} post={post}/>)}
        </div>
    );
};

export default Posts;