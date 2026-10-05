import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  static defaultProps = {
    imageUrl:
      "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg",
  };

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    url: PropTypes.string,
  };

  render() {
    let { title, description, imageUrl, url,author,publishedAt } = this.props;

    // declare date and time
 
    return (
      <div className="my-3">
        <div className="card"  >
          {/* ADDING AUTHOR NAME ON IMAGE */}
          {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:'88%',zIndex:'1'}}>
             {author}</span> */}
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title"> {title} 
             </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author } on { new Date(publishedAt).toGMTString()} </small></p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;