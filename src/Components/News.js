import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
      country:'in',
      pageSize:6,
      category:'general '
    }

    static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
    }
    
    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state={
            articles:[
              
            ],
            loading:false,
            page:1
        }
    }
     async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42d98cb07cd54c44b5b5e9f43af125df&page=${this.state.page+1} `
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
     handlePreviousClick=async()=>{
      console.log("prev")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42d98cb07cd54c44b5b5e9f43af125df&page=${this.state.page-1}`
      let data = await fetch(url)
      let parsedData = await data.json()
       
        this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
      })
     }
     handleNextClick=async()=>{
      console.log("next")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=42d98cb07cd54c44b5b5e9f43af125df&page=${this.state.page+1}`
      let data = await fetch(url)
      let parsedData = await data.json()
       

      this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
      })
     }
  render() {
    return (
      <div className="container my-3">
        <h2  className={`text-${this.state.mode==='light'?'dark':'white'}`}  style={{textAlign:"center"}}>NewsMonkey - Top Headlines</h2>
        <div className="row">
            { this.state.articles.map((element)=>{
                 return <div className="col-md-4 my-3" key={element.url}>
                 <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
            })
            
            }
        </div>
        <div className={`container d-flex justify-content-between text-${this.state.mode}`}>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous</button>
        <button type="button" className={`btn btn-dark text-${this.state.mode==='light'?'dark':'light'}`} onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
  }
