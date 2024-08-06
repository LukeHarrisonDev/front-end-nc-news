import axios from "axios";

const newsApi = axios.create({
	baseURL: `https://nc-news-4-life.onrender.com/api`,
})

export function fetchArticles() {
    return newsApi.get(`/articles`)
    .then((response) => {
        return response.data.articles
    })
}

export function fetchArticleById(articleId) {
    return newsApi.get(`/articles/${articleId}`)
    .then((response) => {
        return response.data.article
    })
}

export function fetchCommentsByArticleId(articleId) {
    return newsApi.get(`/articles/${articleId}/comments`)
    .then((response) => {
        return response.data.comments
    })
}