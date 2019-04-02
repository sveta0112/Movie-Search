import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './MovieList.jsx';


class YourList extends Component {
    constructor(props){
        super(props)
        this.state = {
            myData: []
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.getData();
    }
    getData(){
        axios.get('/movies')
          .then(response => {
              
             this.setState({
                 myData: response.data
             })
            //console.log('my data', response.data)
          })
          .catch(err => {
              console.log("Failed to fetch from your list", err)
          })
    }
    render(){
        const { myData } = this.state;
        console.log('mine', myData);
        return(
            <div>
               {myData.map((movie, i) => {
                   return(
                       <MovieList key={i} movie={movie} view={this.props.view}/>
                   );
               })}
            </div>
        );
    }
}

export default YourList;