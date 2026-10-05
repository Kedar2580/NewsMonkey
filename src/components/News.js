import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes, { string } from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  capitalizeFirstLetter=(string)=>{
    return string. charAt(0).toUpperCase() + string.slice(1);
  }
  
  constructor(props) {
    super(props);
    const response = this.articles[0];
    this.state = {
      articles: response && response.articles ? response.articles : [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(){
     this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9289bc65308341a6b93a8150e16d5608&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles ? parsedData.articles : [],
      loading: false,
      totalResults: parsedData.totalResults ? parsedData.totalResults : 0,
    });

  }

  async componentDidMount() {
   this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page:this.state.page-1})
    this.updateNews();

  };

  handleNextClick = async () => {
    this.setState({page:this.state.page+1});
    this.updateNews();

  };

  render() {
    const { articles, loading } = this.state;
    return (
      <div>
        <div className="container">
          <h1 className="text-center my-4">NewsMonkey - Top   {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner />}

          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element && element.title ? element.title.slice(0,85) : ""}
                      description={
                        element && element.description ? element.description.slice(0,88) : ""
                      }
                      imageUrl={element && element.urlToImage ? element.urlToImage : undefined}
                      url={element ? element.url : " "}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      // ADDING AUTHOR NAME ON IMAGE
                      // source={element.source.author}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="container d-flex justify-content-between my-4">
                <button
                  disabled={this.state.page <= 1}
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handlePrevClick}
                >
                  &larr; Previous
                </button>
                <button
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handleNextClick}
                >
                  Next &rarr;
                </button>
              </div>
        </div>
      </div>
    );
  }
}

export default News;
