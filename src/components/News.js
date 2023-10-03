import React, {useState, useEffect} from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async()=>{
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=${props.searchQuery}&apiKey=${props.apikey}&page=${pages}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
      
      setArticles(parsedData.articles) 
      setLoading(false)
      setTotalResults(parsedData.totalResults)

    props.setProgress(100);    
  }

   useEffect(()=>{
     updateNews();
     document.title = capitalize(props.category) + "-NewsMonkey";
     /* eslint-disable */
   }, [props.searchQuery])

  const fetchMoreData = async() => {
    setPages(pages + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=${props.searchQuery}&apiKey=${props.apikey}&page=${pages + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))   
  }

   // const handlePreviousClick = async()=>{
   //    setPages(pages - 1)
  //     this.updateNews();
  // }

  // const handleNextClick = async()=>{
  //   setPages(pages + 1)
  //   this.updateNews();
  // }
  
    return (
      <>
      
        <h2 className="text-center mb-4" style={{marginTop:'80px'}}>NewsMonkey - Top {capitalize(props.category)} headlines</h2>
         {loading && <Loader/>} 
        
         
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loader/>}
         >
          <div className="container"> 
          <div className="row">
            {articles.map((element)=>{
              return <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-stretch" key={element.url}>
                    <NewsItem title={element.title?element.title:''}
                     description={element.description!==null?element.description.slice(0,88):""}
                     imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} 
                     date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>
          
        {/* {!loading && <div className="d-flex justify-content-between my-5 px-3">
            <button type="button" disabled={pages<=1} className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" disabled={pages>=Math.ceil(totalResults/props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> } */}
      
      </>
    ) 
}


News.defaultProps = {
  category: 'general',
  country: 'in',
  pageSize: 8
}

News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number
}

export default News