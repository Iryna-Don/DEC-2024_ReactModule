import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, initState:T[]): T[] => {
    const [state, setState] = useState<T[]>(initState);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setState(data));
    }, [url])

    return state;
}
// export const useFetch = <T, >(url: string): T[] => {
//     const [state, setState] = useState<T[]>([]);//initState = [] пустий масив
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setState(data));
//     }, [url])
//
//     return state;
// }

export const useFetchDummy = <T>(baseUrl: string, endpoint: string): T[] => {
    const [state, setState] = useState<T[]>([]);
    useEffect(() => {
        fetch(`${baseUrl}/${endpoint}`)
            .then(res => res.json())
            .then(data => {
                const items = data[endpoint];
                setState(Array.isArray(items) ? items as T[] : []);
            });
    }, [baseUrl, endpoint]);
    return state;
}