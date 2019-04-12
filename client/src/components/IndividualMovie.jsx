import React, { Component } from 'react';
import axios from 'axios';



class IndividualMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
           currentMovie: this.props.desc,
           
        }
        this.handleAdding = this.handleAdding.bind(this);
    }
    handleAdding(e){
        axios.post('/movies', this.state.currentMovie)
          .then(response => {
              this.setState({
                  currentMovie: response, 
                  
              })
              //after clicking add to my list, its redirect to myList view
              this.props.movieClick(this.props.desc, "myList")
          })
          .catch(error => {
              console.log(error)
          })
    }

    render(){
        const { currentMovie } = this.state;
        return(
            <div className="ui main text container segment">
               <div className="ui huge header">
                   <h1>{currentMovie.original_title}</h1>
               </div>
               <div className="ui top attached">
                   <div className="item">
                       <img className="ui centered rounded image" src={currentMovie.poster_path}/>
                   </div>
                   <div className="description">
                       <p>{currentMovie.overview}</p> 
                   </div>
                   <button className="ui orange basic button" onClick={this.handleAdding}>Add to My List</button>
               </div>
            </div>
        );
    }
}

export default IndividualMovie;