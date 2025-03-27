export const getData = async<T> (baseUrl:string, endpoint:string ):Promise<T[]> => {
    const response = await fetch(`${baseUrl}/${endpoint}`)
    const data = await response.json();
    return data[endpoint];
}