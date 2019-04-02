import React,{ Component } from 'react';
import axios from 'axios';

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.movie
        }
       
        this.handleAdding = this.handleAdding.bind(this);

    }

    handleAdding(e){
        axios.post('/movies', this.state.data)
          .then(response => {
              this.setState({
                  data: response
              })
          })
          .catch(error => {
              console.log(error)
          })
    }

    render(){
        const { view } = this.props;
        if(view === "default"){
            return(
                <div className="content">
                    <div>
                       <img src={this.props.movie.poster_path} className="dblist" alt="poster of movie"/>
                    </div>
                    <div>
                        <h2>{this.props.movie.title}</h2>
                        <p>{this.props.movie.overview}</p>
                        <input type="button" value="Add to my list" onClick={this.handleAdding}/>
                    </div>
                </div>
            );
        } else if(view === 'myList'){
            return(
                <div className="content">
                    <div>
                       <img src={this.props.movie.poster_path} alt="poster of movie"/>
                    </div>
                    <div>
                       <h2>{this.props.movie.title}</h2>
                      
                    </div>
                </div>
            );

        }
       return(
           <div>
               { view }
           </div>
       );
    }
}

export default MovieList;




 