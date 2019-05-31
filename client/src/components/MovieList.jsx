import React,{ Component } from 'react';
import axios from 'axios';


class MovieList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.movie,
            
        }
       
    }
    
    
    render(){
        const { view } = this.props;
        if(view === "default"){
            return(
                <div className="ui main context container">
                    <div className="ui top attached segment">
                        <div className="ui divided items">
                            <div className="item">
                                <div className="image">
                                   <img src={this.props.movie.poster_path} className=" card-img-top " alt="poster of movie"/>
                                </div>
                                <div className="content">
                                    <h5 className="header">{this.props.movie.title}</h5>
                                    <div className="description">
                                        
                                        <p>{this.props.movie.overview.substring(0, 100)}...</p>
                                        <a className="ui floated basic violet button"  onClick={() => this.props.handleClick(this.state.data, "individualMovie")}>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(view === 'myList'){
            return(
                <div className="ui main text container segment">
                   <div className="ui huge header">
                       <h5>{this.props.movie.title}</h5>
                   </div>
                   <div className="ui top attached segment">
                      <div className="ui divided items">
                          <div className="item">
                              <div className="image">
                                 <img src={this.props.movie.poster_path}  className="card-img-top" alt="poster of movie"/>
                              </div>
                              
                          </div>
                      </div>
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

 {/* <section id="gallery"> 
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-4 mb-4">
                                <div className="card">
                                    <div className="thumbnail">
                                       <img src={this.props.movie.poster_path}  className="card-img-top" alt="poster of movie"/>
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">{this.props.movie.title}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </section> */}

{/* <section id="gallery">
                    <div className="container">
                        <div className="row text-center" >
                            <div className="col-md-3 col-sm-6 left" >
                                <div className="card">
                                    <div className="thumbnail">
                                       <img src={this.props.movie.poster_path} className=" card-img-top " alt="poster of movie"/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.movie.title}</h5>
                                        <p className="card-text">{this.props.movie.overview}</p>
                                        <input type="button" className="btn btn-primary" value="Add to my list" onClick={this.handleAdding}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}



{/* <div className="ui main text container segment">
                   <div className="ui huge header">
                       <h5>{this.props.movie.title}</h5>
                   </div>
                   <div className="ui top attached segment">
                      <div className="ui divided items">
                          <div className="item">
                              <div className="image">
                                 <img src={this.props.movie.poster_path}  className="card-img-top" alt="poster of movie"/>
                              </div>
                              
                          </div>
                      </div>
                   </div>
               </div> */}
 