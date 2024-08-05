function ArticleCard({article}) {

  const dateAndTime = article.created_at

  function formatDate(dateAndTimeString) {
    const date = `${dateAndTimeString.slice(8, 10)}-${dateAndTimeString.slice(5, 7)}-${dateAndTimeString.slice(0, 4)}`
    return date
  }

  function formatTime(dateAndTimeString) {
    return dateAndTimeString.slice(11, 16)
  }

  const postingDate = formatDate(dateAndTime)
  const postingTime = formatTime(dateAndTime)

    return (
      <li>
      {/* <p>Hello</p> */}
        <h3>{article.title}</h3>
        <div className="art-card-format">
          <img className="art-img" src={article.article_img_url}/>
          <p>Votes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <p>Posted at: {postingTime}</p>
          <p>{postingDate}</p>
        </div>
      </li>
    )
  }
  
  export default ArticleCard