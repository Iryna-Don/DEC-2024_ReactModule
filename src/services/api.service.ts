import {IPost} from "../models/IPost.ts";

async function getPosts():Promise<IPost[]> {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/posts');
    return await response.json();
}
export { getPosts };
