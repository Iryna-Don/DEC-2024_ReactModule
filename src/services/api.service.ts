const baseUrl = new URL("https://dummyjson.com/");

export const getData = async <T>(endpoint: string, limit: number | null, skip: number | null): Promise<{ data: T[], total: number }> => {
    const url = new URL(endpoint, baseUrl);
    const response = await fetch(url + '?limit=' + limit + '&skip=' + skip);
    const dummyData = await response.json();
    return {
        data: dummyData[endpoint],
        total: dummyData.total
    };

}