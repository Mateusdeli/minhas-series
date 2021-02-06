// eslint-disable-next-line import/no-anonymous-default-export
export default (httpClient) => ({
    getAllGeneres: async () => {
        const { data } = await httpClient.get(`/genre/movie/list`)
        return data.genres
    }
})