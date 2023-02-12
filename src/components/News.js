import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
      country: "in",
      pageSize: 8,
      category: 'general'
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string

    }
   
    constructor(props){
        super(props);
        console.log("Hello, this is my app");
        this.state = {
            articles: [], 
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category} - NewsMonkey`;
    }
   
  async updateNews(){
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80bc4d426998451ea5a98f81195fef5f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
    });
  }



  handleNextClick = async ()=>{
    // console.log("Next");
    // console.log(this.state.page + 1);
    // console.log(this.state.totalResults);
    // if(this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.pageSize))
    // {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80bc4d426998451ea5a98f81195fef5f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles});
    // this.setState({
    //   page: this.state.page+1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
    // }
    
    this.setState({page: this.state.page+1});
    this.updateNews();
    
    
  }
  handlePrevClick = async ()=>{
    //  console.log("Previous");
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80bc4d426998451ea5a98f81195fef5f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true});
    //  let data = await fetch(url);
    //  let parsedData = await data.json();
    //  console.log(parsedData);
    //  this.setState({articles: parsedData.articles});
    //  this.setState({
    //    page: this.state.page-1,
    //    articles : parsedData.articles,
    //    loading:false
    //  })
    this.setState({page: this.state.page-1});
    this.updateNews();

  }

  async componentDidMount(){
    console.log("CDM");
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80bc4d426998451ea5a98f81195fef5f&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
    });
  }
  

  render() {
    return (
      <div className="container my-3" >
        <h2>Whats the news today!</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {this.state.articles.map((element)=>{
            return(
                
                <div className="col-md-4" key={element.url}>
                    <NewsItems title={element.title?element.title:""} description={element.description?element.description.slice(0,50):" "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}></NewsItems>    
                </div>
                
            )
        })}
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
       </div>
        
      </div>
    )
  }
}

export default News