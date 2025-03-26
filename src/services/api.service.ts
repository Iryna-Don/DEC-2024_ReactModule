export const getData = async <T>(baseUrl: string, endpoint: string, limit?: number, skip?: number, id?: number): Promise<T[]> => {
    let url = baseUrl + '/' + endpoint;
    if (id) {
        url += `/${id}`;
    }
    const params = new URLSearchParams();

    if (limit !== undefined) params.append("limit", limit.toString());
    if (skip !== undefined) params.append("skip", skip.toString());

    if (params.toString()) {
        url += `?${params.toString()}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (baseUrl.toLowerCase().includes('dummy')) {
        return id ? [data] : data[endpoint] || [];
    } else if (baseUrl.toLowerCase().includes('jsonplaceholder')) {
        return Array.isArray(data) ? data : [data];
    }
    throw new Error('Error');
}
