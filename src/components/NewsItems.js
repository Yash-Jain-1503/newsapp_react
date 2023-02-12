import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title, description, imageurl, newsurl,author, date} = this.props;
    return (
        <div>
             <div className="card">
        <img src={imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} className="btn btn-dark">Read more</a>
        </div>
      </div>
        </div>
       
    )
  }
}

export default NewsItems