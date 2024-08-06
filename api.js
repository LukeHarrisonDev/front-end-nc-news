import axios from "axios";

const newsApi = axios.create({
	baseURL: `https://nc-news-4-life.onrender.com/api`,
})

export function fetchArticles() {
    return newsApi.get(`/articles`)
    .then((response) => {
        return response.data
    })
}