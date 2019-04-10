import React, { Component } from 'react';
import $ from 'jquery';
import MovieList from './MovieList.jsx';
import MOVIE_API_KEY from '../config/moviedb.js';
import Navbar from './Navbar.jsx';
import YourList from './YourList.jsx';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        title: "",
        list: null,
        view: "default"
        
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  handleChange(e){
    this.setState({
        [e.target.id] : e.target.value
    })
    const searchedMovie = this.state.title;
    this.handleSearch(searchedMovie);
}

  handleSearch(movie){
    const myUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=` + movie;
    $.ajax({
      url: myUrl,
      success: (result) => {
        console.log("loaded data", result);
        const output = result.results;

        var movieCollection = [];
        output.forEach(movie => {
          console.log('movie object', movie);
          movie.poster_path = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const singleMovie = <MovieList  key={movie.id} movie={movie} view={this.state.view}/>
          movieCollection.push(singleMovie)
        })

        this.setState({
           list: movieCollection
        })
      },
      error: (err) => {
        console.log("failed to fetch data", err);
      }
    })
  }
  changeView(option){
    this.setState({
      view: option
    })
  }

  renderView() {
    const { view } = this.state;
    if(view === "default"){
      return(
        <div>
          <Navbar handleView={this.changeView}/>
          <div className="container">
              <section id="header" className="jumbotron text-center">
                  <h1 className="lead">Welcome to Movie Search!</h1>
                  <p>Please use below window to find your favorite movie from The Movie DB</p>
                  <div className="container">
                    <label htmlFor="title"></label>
                    <input type="text"  id="title" className="search" onChange={this.handleChange} placeholder="Search..."/>
                  </div>
              </section>
              
                 {this.state.list}
              
          </div>
        </div>
      );

    } else if(view === "myList"){
      return(
        <div>
          <Navbar handleView={this.changeView}/>
          <div className="container">
            
              <YourList view={this.state.view}/>
            
          </div>
        </div>
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
