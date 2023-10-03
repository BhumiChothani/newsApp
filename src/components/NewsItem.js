import React from 'react'

const NewsItem = (props)=> {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">

        <div className="card position-relative" id="newsItem" style={{width: '19rem', height: '100%'}}>
          <img src={imageUrl!==null?imageUrl:"https://www.reuters.com/resizer/c-e30mGjJn0l6tr7VBmKfJjggCg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RYSKEML6TVIDZMDMQBXWK2BZIE.jpg"} className="card-img-top" alt="..."/>
          <span className="position-absolute translate-start badge rounded-pill bg-warning" style={{top:'-2%', right:'0'}}>
          {source}
          <span className="visually-hidden">unread messages</span>
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} On {new Date(date).toISOString().slice(0, 16).replace('T','  ')}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read more...</a>
          </div>
        </div>

      </div>
    )
  
}

export default NewsItem