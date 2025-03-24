
import {IComment} from "../models/IComment.ts";

const getComments = async ():Promise<IComment[]> => {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/comments');
    return await response.json();
}

export {getComments};