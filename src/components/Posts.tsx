import {FC, useEffect, useState} from 'react';
import {IPost} from "../models/IPost.ts";
import {getPosts} from "../services/api.service.ts";
import Post from "./Post.tsx";
import styles from './posts.module.css';

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts()
            .then(value=>setPosts(value))
    }, [])

    return (
        <div className={styles.card}>
            {posts.map((post, index) => <Post key={index} post={post}/>)}
        </div>
    );
};

export default Posts;