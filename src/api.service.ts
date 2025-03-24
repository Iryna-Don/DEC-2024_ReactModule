import {IPost} from "./models/IPost.ts";
import {ITodo} from "./models/ITodo.ts";
import {IComment} from "./models/IComment.ts";

const fetchData = async <T>(endpoint: string): Promise<T[]> => {
    const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/${endpoint}?limit=${import.meta.env.VITE_API_LIMIT}&skip=${import.meta.env.VITE_API_SKIP}`
    );
    const data = await response.json();
    return data[endpoint];
};

const getPosts = () => fetchData<IPost>("posts");
const getComments = () => fetchData<IComment>("comments");
const getTodos = () => fetchData<ITodo>("todos");


export {getPosts, getTodos, getComments};