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
                <section id="gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={this.props.movie.poster_path} className=" card-img-top " alt="poster of movie"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.movie.title}</h5>
                                        <p className="card-text">{this.props.movie.overview}</p>
                                        <input type="button" className="btn btn-primary" value="Add to my list" onClick={this.handleAdding}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else if(view === 'myList'){
            return(
                <section id="gallery"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <img src={this.props.movie.poster_path}  className="card-img-top" alt="poster of movie"/>
                                    <div className="card-body">
                                    <h5 className="card-title">{this.props.movie.title}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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




 