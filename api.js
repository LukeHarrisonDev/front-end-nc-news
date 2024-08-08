import axios from "axios";

const newsApi = axios.create({
	baseURL: `https://nc-news-4-life.onrender.com/api`,
})

export function fetchTopics() {
    return newsApi.get(`/topics`)
    .then((response) => {
        return response.data.topics
    })
}

export function fetchArticles(topic) {
    return newsApi.get(`/articles`, {params: {topic}})
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

export function changeVote(articleId, voteAmount) {
    voteAmount = +voteAmount
    return newsApi.patch(`/articles/${articleId}`, {inc_votes: voteAmount})
}

export function postComment(articleId, comment) {
    return newsApi.post(`articles/${articleId}/comments`, comment)
}

export function deleteComment(commentId) {
    return newsApi.delete(`/comments/${commentId}`)
}