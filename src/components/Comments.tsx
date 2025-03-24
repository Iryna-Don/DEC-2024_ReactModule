import {FC, useEffect, useState} from 'react';
import {IComment} from "../models/IComment";
import {getComments} from "../services/api.service.ts";
import Comment from "./Comment.tsx";
import styles from './comments.module.css';

const Comments:FC = () => {
    const [comments, setComments]=useState<IComment[]>([]);
    useEffect(()=> {
        getComments()
            .then(value => setComments(value))
    }, [])
    return (
        <div className={styles.blockComments}>
            {comments.map((comment, index)=><Comment key={index} comment={comment}/>)}
        </div>
    );
};

export default Comments;