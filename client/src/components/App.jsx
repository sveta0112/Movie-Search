import React, { Component } from 'react';
import $ from 'jquery';
import MovieList from './MovieList.jsx';
import MOVIE_API_KEY from '../config/moviedb.js';
import Navbar from './Navbar.jsx';
import YourList from './YourList.jsx';
import IndividualMovie from './IndividualMovie.jsx';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        title: "",
        list: null,
        view: "default",
        lastMovie: ""
        
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  handleChange(e){
    this.setState({
        [e.target.id] : e.target.value
    })
   
    // const searchedMovie = this.state.title;
    // this.handleSearch(searchedMovie);
  }

  handleSubmit(e){
    e.preventDefault();
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
          const singleMovie = <MovieList  key={movie.id} movie={movie} view={this.state.view} handleView={this.changeView} handleClick={this.movieHandler}/>
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

  movieHandler(movie, option) {
    this.setState({
      view: option,
      lastMovie: movie
    });
  }


  renderView() {
    const { view } = this.state;
    if(view === "default"){
      return(
        <div>
          <Navbar handleView={this.changeView}/>
          <div className="ui main text container">
           
            <div className="ui one column stackable center aligned page grid">
               <div className="column">
                  <div className="ui icon header">
                    Welcome to Movie Search!
                  </div>
                  <div className="field">
                  <p>Please use below window to find your favorite movie from The Movie DB</p>
                    <div className="search">
                       <div className="ui icon input">
                         <form className="ui form" onSubmit={this.handleSubmit}>
                            <div className="ui action input">
                              <input type="text"  id="title" className="search" onChange={this.handleChange} placeholder="Search movies..."/>
                              <button className="ui teal right labeled icon button">Find</button>
                            </div>
                         </form>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
              {this.state.list}
          </div>
       </div>
      );

    } else if(view === "myList"){
      return(
        <div>
          <Navbar handleView={this.changeView}/>
          <div>
            <YourList view={this.state.view}/>
          </div>
        </div>
      );
    } else if(view === "individualMovie"){
      return(
        <div>
          <Navbar handleView={this.changeView}/>
          <div>
            <IndividualMovie 
                view={this.state.view} 
                desc={this.state.lastMovie}
                movieClick={this.movieHandler}
               
            />
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

{/* <p>Please use below window to find your favorite movie from The Movie DB</p>
                <label htmlFor="title"></label>
                <input type="text"  id="title" className="search" onChange={this.handleChange} placeholder="Search..."/> */}


{/* <div className="container">
              <section id="header" className="jumbotron text-center">
                  <h1 className="lead">Welcome to Movie Search!</h1>
                  <p>Please use below window to find your favorite movie from The Movie DB</p>
                  <div className="container">
                    <label htmlFor="title"></label>
                    <input type="text"  id="title" className="search" onChange={this.handleChange} placeholder="Search..."/>
                  </div>
              </section>
              
                 {this.state.list}
              
          </div> */}